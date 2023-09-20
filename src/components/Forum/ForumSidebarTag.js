import React from "react";
import { Link } from "react-router-dom";

function ForumSidebarTag({ text }) {
  return (
    <Link to={`/forum/tag/${text}`} className="bg-white hover:bg-gray-100 p-1 rounded text-xs border transition-all ease-in">
      {text}
    </Link>
  );
}

export default ForumSidebarTag;
