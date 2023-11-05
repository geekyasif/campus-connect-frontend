import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { db } from "../../services/firebase";
import useUser from "../../hooks/user/useUser";

function Chat() {
  const { user_id } = useUser();
  const [chats, setChats] = useState({});
  const { pathname } = useLocation();
  const chatId = pathname?.split("/")[2];
  console.log(chatId);

  const handleFetchAllChats = async () => {
    const chatSnapshot = await getDocs(collection(db, "chats"));
    let _chats = [];
    chatSnapshot.forEach((doc) => {
      if (doc.id.includes(user_id)) {
        _chats.push({
          id: doc.id,
          data: doc.data(),
        });
      }
    });
    setChats(_chats);
  };

  console.log(chats);

  useEffect(() => {
    handleFetchAllChats();
  }, []);

  return (
    <div className="container mx-auto flex flex-row gap-2 my-2 ">
      <div className="w-[20%] bg-white">
        <div className="w-full m-1">
          <input
            type="text"
            className="p-2 rounded border-[1px]"
            placeholder="Search here..."
          />
        </div>
        <div className="">
          <div className="my-2 p-2 border-b">
            <p>Shabaj Ansari</p>
          </div>
          <div className="my-2 p-2 border-b">
            <p>Shabaj Ansari</p>
          </div>
          <div className="my-2 p-2 border-b">
            <p>Shabaj Ansari</p>
          </div>
          <div className="my-2 p-2 border-b">
            <p>Shabaj Ansari</p>
          </div>
          <div className="my-2 p-2 border-b">
            <p>Shabaj Ansari</p>
          </div>
          <div className="my-2 p-2 border-b">
            <p>Shabaj Ansari</p>
          </div>
          <div className="my-2 p-2 border-b">
            <p>Shabaj Ansari</p>
          </div>
          <div className="my-2 p-2 border-b">
            <p>Shabaj Ansari</p>
          </div>
          <div className="my-2 p-2 border-b">
            <p>Shabaj Ansari</p>
          </div>
        </div>
      </div>
      {chatId === undefined ? (
        <div className=" p-2 bg-white w-full flex items-center justify-center">
          No Chat Found!
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Chat;
