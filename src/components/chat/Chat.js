import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import { setCloseChatBox, setUserChat } from "../../features/authSlice";

function Chat() {
  const dispatch = useDispatch();
  const { user: me, userChat } = useSelector((state) => state.auth);
  const [username2, setUsername2] = useState(
    userChat?.personal_details?.username
  );
  const [myUsername, setMyUsername] = useState(me?.personal_details?.username);
  const [room, setRoom] = useState(
    [myUsername, username2]
      .filter(Boolean)
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .join("")
  );

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const chatContainerRef = useRef(null);

  async function handleSendMessage() {
    try {
      if (message) {
        await addDoc(collection(db, "chats", `${room}`, "personalchats"), {
          message: message,
          sender_username: myUsername,
          timestamp: serverTimestamp(),
        });

        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chats]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "chats", `${room}`, "personalchats"),
        orderBy("timestamp", "asc")
      ),
      (querySnapshot) => {
        const _chats = [];
        querySnapshot.forEach((doc) => {
          _chats.push(doc.data());
        });

        setChats(_chats);
      },
      (error) => {
        console.error("Error getting document: ", error);
      }
    );

    return () => unsubscribe();
  }, [room]);

  return (
    <div className="fixed w-[400px] h-[400px] bottom-0 right-0 lg:right-60 bg-white border shadow-sm">
      <div className="flex justify-between items-center border-b-2 p-1 relative bg-gray-50">
        <div className="">
          {userChat?.personal_details?.fullName}{" "}
          {userChat?.is_online === true ? (
            <p className="p-1 rounded-full bg-green-500 inline-block"></p>
          ) : (
            <p className="p-1 rounded-full bg-red-500 inline-block"></p>
          )}
        </div>
        <button
          className=""
          onClick={() => {
            dispatch(setUserChat(null));
            dispatch(setCloseChatBox());
          }}
        >
          X
        </button>
      </div>
      {chats.length === 0 ? (
        <div className="flex justify-center items-center w-full h-full">
          <p>No chat found!</p>
        </div>
      ) : (
        <div
          className="overflow-y-scroll h-[330px]"
          ref={chatContainerRef}
          style={{
            overflowY: "scroll",
            "&::webkitScrollbar": {
              width: "12px", // width of the scrollbar
            },
            "&::webkitScrollbarThumb": {
              backgroundColor: "blue", // color of the thumb
            },
            "&::webkitScrollbarTrack": {
              backgroundColor: "red", // color of the track
            },
          }}
        >
          {chats?.map((chat) => (
            <div
              key={chat.timestamp}
              className={
                `${
                  chat?.sender_username === myUsername
                    ? `flex justify-end text-white`
                    : `flex justify-start`
                }` + "border-sm p-1 my-2 w-ful "
              }
            >
              <p className={"bg-gray-100 inline-block rounded px-2"}>
                {chat.message}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="absolute bottom-0 border-2 w-full flex justify-between bg-white">
        <input
          type="text"
          className="w-full p-1"
          placeholder="type message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="p-1 bg-gray-500 text-white rounded"
          onClick={handleSendMessage}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default Chat;
