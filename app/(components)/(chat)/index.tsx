import { Message } from "@/types/message"
import Image from "next/image"

type ChatProps = {
  messages: Message[]
  onOptionClick: (option: string) => void
}

export default function Chat({
  messages,
  onOptionClick
}: ChatProps) {

  return(
    messages.length > 0 ?
    messages.map(({ content, userName, userType, options }, i) => 
      <div className={`chat ${userType  === "bank" ? "chat-start" : "chat-end"}`} key={i}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-300">
            { userType  === "bank" ? 
              <Image width={32} height={32}
                alt="Tailwind CSS chat bubble component"
                src={  "assets/bank-duotone.svg"} /> :
              <img src="assets/user.png" width={32} height={32} alt="Customer" /> }
          </div>
        </div>
        <div className="chat-header">
          {userName}
        </div>
        <div className={`chat-bubble ${userType  === "bank" ? "chat-bubble-primary" : "chat-bubble-secondary"}`}>
          <p>{content}</p>
          { options ? 
            <div className=" space-x-2 mt-2">
              { options.map((option, i) => 
                <button 
                  className="btn btn-sm" 
                  key={i}
                  onClick={() => onOptionClick(option)}
                > {option} </button> ) 
              }
            </div> : null
          }
        </div>
      </div>
    ): 
    <p className=" text-center">No messages</p>
  )

}