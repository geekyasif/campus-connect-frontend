import React from "react";
import { Link } from "react-router-dom";

function QueryCategory({ cat, key }) {
  return (
    <div
      className="bg-white inline-block p-2 hover:bg-gray-100 rounded text-xs border transition-all ease-in mr-1 mb-1"
      key={cat.slug}
    >
      <Link to={`/forum/${cat.slug}`}>{cat.title}</Link>
    </div>
  );
}

export default QueryCategory;
