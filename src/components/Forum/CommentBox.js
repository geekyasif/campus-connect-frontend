import React from "react";
import toast, { Toaster } from "react-hot-toast";

function CommentBox() {
  
  const handlePostComment = () => {
    toast.error("Something went wrong. try again!");
  };

  return (
    <div className="bg-white rounded  my-4 p-4">
      <Toaster position="top-right" reverseOrder={false} />
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-2"
        rows="4"
        placeholder="Write a comment..."
      ></textarea>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded text-xs"
        type="button"
        onClick={handlePostComment}
      >
        Post
      </button>
    </div>
  );
}

export default CommentBox;
