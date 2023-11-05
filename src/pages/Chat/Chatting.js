import React from "react";

function Chatting() {
  return (
    <div className="flex-grow bg-white">
      <div className="border-b flex p-2 gap-4">
        <div className="w-[50px] h-[50px] rounded-full bg-gray-100 ">
          <img className="rounded-full" src="/" alt="image" />
        </div>
        <div>
          <p>Shabaj Ansari</p>
          <p>Online</p>
        </div>
      </div>

      <div className="flex items-center justify-center  bg-gray-100 h-[500px]">
        No Chat Found!
      </div>
      <div className="flex">
        <input
          className="border p-2 w-full"
          placeholder="type message here..."
        />
        <button className="border px-2 rounded">Send</button>
      </div>
    </div>
  );
}

export default Chatting;
