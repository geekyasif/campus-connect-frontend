import React from "react";
import { Link, useLocation } from "react-router-dom";

function QueryCategory({ cat }) {
  const {pathname} = useLocation()
  const currentPath = pathname.split("/")[2]

  return (
    <Link
      className={
        currentPath === cat.slug
          ? "bg-indigo-500 inline-block text-white hover:bg-indigo-600 rounded text-xs border transition-all ease-in mr-1 mb-1 p-2"
          : "p-2 bg-white  hover:bg-gray-100 rounded text-xs border transition-all ease-in mr-1 mb-1 inline-block"
      }
      to={`/forum/category/${cat.slug}`}
    >
      {cat.title}
    </Link>
  );
}

export default QueryCategory;
