import React from "react";

function QueryCategory({ cat, key }) {
  return (
    <div
      className="bg-white inline-block p-2 hover:bg-gray-100 rounded text-xs border transition-all ease-in mr-1 mb-1"
      // key={key}
    >
      {cat.title}
    </div>
  );
}

export default QueryCategory;
