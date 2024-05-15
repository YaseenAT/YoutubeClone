import React from "react";
import usericon from "../icons/usericon.png";

const ChatMessage = ({ name, message }) => {
    
  return (
    <div className="flex items-center shadow-md p-2">
      <img src={usericon} alt="user-icon" className="h-8" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
