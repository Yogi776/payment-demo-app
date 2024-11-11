"use client"

import Image from "next/image";
import Chat from "./(components)/(chat)";
import useChatMessage from "./(hooks)/useChatMessage";

export default function Home() {

  const { messages, sendMessage, loading, fetchMessage } = useChatMessage()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
       <main style={{ width: '80%', height: 'calc(100vh - 4rem)' }} className="w-full"> 
        <div>
          <h1 style={{ color: '#2B323C', textAlign: 'center', marginBottom: '50px', fontSize: '40px', fontFamily: 'Arial', fontWeight: '300', marginTop: '20px' }}>
            User Payment Simulation
          </h1>
        </div>
        <div className="flex w-full">
          <div className="card bg-base-300 rounded-box grid flex-grow place-items-center">
            <Image src="/assets/process_payment.png" width={500} height={500} alt="POS" />
            <div className="space-x-4">
              <button onClick={() => fetchMessage()} className="btn btn-accent" style={{ backgroundColor: '#F04F23', outlineColor: '#F04F23', borderColor: '#F04F23', marginTop: '20px', color: '#ffffff' }}>
                {messages.length > 0 ? "RE-PROCESS PAYMENT" : "PROCESS PAYMENT"}
              </button>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="card bg-base-300 rounded-box p-8 grid flex-grow place-items-center">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1 justify-end">
                  <div className="w-full p-2 pt-8 overflow-y-auto">
                    <Chat messages={messages} onOptionClick={(option) => {
                      if (option === "Yes") {
                        sendMessage();
                      }
                    }} />
                  </div>
                  <div className="w-full px-2 pt-2 mb-6 flex items-center justify-between">
                    <input type="text" className="flex-1 input input-bordered input-sm" placeholder="Type your message" />
                    <button className="btn btn-circle">
                      <Image src="/assets/paper-plane-right-light.svg" alt="Send" width={24} height={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-16">
      </footer>
    </div>
  );
}