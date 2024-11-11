"use client"

import Image from "next/image";
import Chat from "./(components)/(chat)";
import useChatMessage from "./(hooks)/useChatMessage";

export default function Home() {

  const { messages, sendMessage, loading, fetchMessage } = useChatMessage()

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20">
      <main className=" w-full h-full">
        <div className="flex w-full">
          <div className="card bg-base-300 rounded-box grid flex-grow place-items-center">
            <Image src="assets/pos.svg" width={"500"} height={"500"} alt="POS" />
            <div className=" space-x-4">
              <button onClick={() => fetchMessage()} className="btn btn-accent">
                { messages.length > 0 ? "Re-Process" : "Process" }
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
                    <Chat messages={messages} 
                      onOptionClick={(option) => {
                        if(option === "Yes") {
                          sendMessage()
                        }
                      }} 
                    />
                  </div>
                  <div className=" w-full px-2 pt-2 mb-6 flex items-center justify-between">
                      <input type="text" className="flex-1 input input-bordered input-sm" placeholder="Type your message" />
                      <button className="btn btn-circle">
                        {
                          loading ? <span className="loading loading-spinner loading-xs"></span> :
                          <Image src={'assets/paper-plane-right-light.svg'} alt="Send" width={24} height={24} />
                        }
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
