import { Message } from "@/types/message";
import { useState } from "react";

export default function useChatMessage() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessage = async () => {
    setLoading(true);
    fetch('https://cheerful-maggot.dataos.app/talos/public:banking-event-talos-api/api/event', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer Y2lfY2RfZGVtby5lZmM2ZWZjZS1iMWU3LTRiNDMtYWM2Zi0xMzZiNWZhNGQ0ZGU=',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Response data:', res); // Log response to inspect structure
        if (res.length > 0) {
          const data = res[0]; // Access the first object in the array
          setMessages([
            { content: data.bank_default_message, userType: "bank", userName: "Lloyd's" },
            { content: data.nba1_message, userType: "bank", userName: "Lloyd's" },
            { content: data.nba2_message, userType: "bank", userName: "Lloyd's", options: ["Yes", "No"] }
          ]);
        } else {
          console.error('Error: Response array is empty.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
        setLoading(false);
      });
  };

  const sendMessage = async () => {
    setLoading(true);
    fetch('https://cheerful-maggot.dataos.app/talos/public:banking-event-talos-api/api/event', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer Y2lfY2RfZGVtby5lZmM2ZWZjZS1iMWU3LTRiNDMtYWM2Zi0xMzZiNWZhNGQ0ZGU=',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Response data:', res); // Log response to inspect structure
        if (res.length > 0) {
          const data = res[0]; // Access the first object in the array
          setMessages([
            ...messages,
            { content: "Yes", userType: "customer", userName: "Renaldo" },
            { content: data.thanks, userType: "bank", userName: "Lloyd's" }
          ]);
        } else {
          console.error('Error: Response array is empty.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setLoading(false);
      });
  };

  return { loading, sendMessage, messages, fetchMessage };
}
