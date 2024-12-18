import { Message } from "@/types/message";
import { useState } from "react";


export default function useChatMessage() {
  const [ loading, setLoading ] = useState(false)
  const [ messages, setMessages ] = useState<Message[]>([])

  const fetchMessage = async() => {
    setLoading(true)
    fetch('https://known-racer.dataos.app/inmoment/data/event')
      .then((res) => res.json())
      .then((res) => {
        setMessages([
          { content: res.data.bank_default_message, userType: "bank", userName: "Lloyd's" },
          { content: res.data.nba1_message, userType: "bank", userName: "Lloyd's" },
          { content: res.data.nba2_message, userType: "bank", userName: "Lloyd's", options: ["Yes", "No"] }
        ])
        setLoading(false)
      })
  }



  const sendMessage = async() => {
    setLoading(true)
    fetch('https://known-racer.dataos.app/inmoment/data/event')
      .then((res) => res.json())
      .then((res) => {
        setMessages([
          ...messages,
          { content: "Yes", userType: "customer", userName: "Renaldo" },
          { content: res.data.thanks, userType: "bank", userName: "Lloyd's" }
        ])
        setLoading(false)
      })
  }


  return { loading, sendMessage, messages, fetchMessage }
}