import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function QueryCard({
  date,
  title,
  tags,
  category,
  description,
  user,
  queryId,
}) {
  return (
    <div className="border-b-2 my-2 px-4 py-2">
      <Link
        to={`/forum/${category.split(" ").join("-").toLowerCase()}/${queryId}`}
        className="font-semibold"
      >
        {title} | <span>{category}</span>{" "}
      </Link>
      <div className="flex">
        {tags.map((tag) => (
          <p className="px-2 text-xs border mr-2 rounded my-2">{tag}</p>
        ))}
      </div>
      <p
        className="text-sm text-gray-500 mb-2"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: 2,
        }}
      >
        {description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="rounded-full w-2" />
          <p className="text-xs my-2 mx-2"> {user.userName} </p>
          <FontAwesomeIcon icon={faClock} className="w-3 text-gray-600" />
          <p className="text-xs my-2 mx-2">{date}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default QueryCard;
