import React from "react";
import assets from "../assets/assets";

const ChatContainer = () => {
  return (
    <div>
      <div>
       <img src={assets.profile_martin} alt="" className="w-8 rounded-full" />
       <p>Martin Johnson
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
       </p>
      </div>
    </div>
  );
};

export default ChatContainer;
