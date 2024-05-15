import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addchat } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/Helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage,setliveMessage] = useState("");

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      // API POLLING AFTER EVERY 2 SECONDS store chats/append chats in redux store
      // console.log("api call");

      dispatch(
        addchat({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll overflow-x-hidden flex flex-col-reverse ">
        <div>
          {ChatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 ml-1 border border-black" onSubmit={(e)=>{e.preventDefault() ; dispatch(addchat({name:"Shruti" , message:liveMessage}));setliveMessage("")}}>
        <input type="text" placeholder="Say Something" className="pl-4 border-none outline-none w-72" onChange={(e)=>setliveMessage(e.target.value)} value={liveMessage}/>
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
