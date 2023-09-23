import { faClock, faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserComment = ({ user, comment, replies }) => {
  const { authToken } = useSelector((state) => state.auth);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    setReplying(true);
  };

  const handleCancelReply = () => {
    setReplying(false);
    setReplyText("");
  };

  const handleReplyTextChange = (e) => {
    setReplyText(e.target.value);
  };

  const handlePostReply = () => {
    setReplying(false);
    setReplyText("");
  };

  return (
    <div className="bg-white px-4 pt-2 rounded border-t-2">
      <div className="flex items-center ">
        <img
          alt="profile"
          src="https://assets.leetcode.com/users/sithis/avatar_1566406146.png"
          className="h-4 w-4 rounded-full"
        />

        <p className="text-xs my-2 mx-2">{user?.username}</p>
        <FontAwesomeIcon icon={faClock} className="w-3 text-gray-600" />
        <p className="text-xs my-2 mx-2">1233</p>
      </div>

      <div className="text-gray-800 mb-1 ml-6 text-sm">{comment}</div>

      {replying ? (
        <div className="border p-2 rounded mb-2">
          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-2"
            rows="2"
            value={replyText}
            onChange={handleReplyTextChange}
            placeholder="Write a reply..."
          ></textarea>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 text-xs rounded mr-2"
              onClick={handlePostReply}
            >
              Reply
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 text-xs rounded"
              onClick={handleCancelReply}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-end">
          {authToken ? (
            <button onClick={handleReply} className="text-indigo-600 text-xs">
              <FontAwesomeIcon icon={faReply} />
            </button>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default UserComment;
