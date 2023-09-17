import React from "react";

function ForumTag({ text }) {
  return (
    <div className="bg-white rounded p-2 border hover:bg-gray-200 transition-all ease-in text-xs">
      {text}
    </div>
  );
}

export default ForumTag;
