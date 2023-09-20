import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function QueryCard({ query, user }) {
  return (
    <div className="border-b-2 my-2 px-4 py-2">
      <Link
        to={`/forum/${query.category.split(" ").join("-").toLowerCase()}/${
          user.username
        }/${query.id}`}
        className="font-semibold"
      >
        {query.title} |{" "}
        <span>{query.category.split("-").join(" ").toUpperCase()}</span>{" "}
      </Link>
      <div className="flex">
        {query.tags?.split(",").map((tag) => (
          <p className="px-2 text-xs border mr-2 rounded my-2" key={tag}>
            {tag}
          </p>
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
        {query.description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="rounded-full w-2" />
          <p className="text-xs my-2 mx-2"> {user?.username} </p>
          <FontAwesomeIcon icon={faClock} className="w-3 text-gray-600" />
          <p className="text-xs my-2 mx-2">{query.datetime.toString()}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default QueryCard;
