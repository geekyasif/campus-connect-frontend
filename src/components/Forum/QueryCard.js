import {
  faClock,
  faPen,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

function QueryCard({ query, user }) {
  const { currentUser } = getAuth();

  return (
    <div className="border-b-2 my-2 lg:px-4 py-2">
      <div className="flex justify-between">
        <Link
          to={`/forum/${query.category.split(" ").join("-").toLowerCase()}/${
            user.username
          }/${query.id}`}
          className="font-semibold text-sm lg:text-base"
        >
          {query.title} |{" "}
          <span>{query.category.split("-").join(" ").toUpperCase()}</span>{" "}
        </Link>

        {user?.email === currentUser?.email && (
          <div className="flex justify-end">
            <FontAwesomeIcon
              icon={faTrash}
              width={10}
              className="mx-2 text-red-600 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faPen}
              width={10}
              className="mx-2 text-indigo-500 cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="flex">
        {query?.tags?.split(",").map((tag) => (
          <Link to={`/forum/tag/${tag}`} className="px-2 text-xs border mr-2 rounded my-2" key={tag}>
            {tag}
          </Link>
        ))}
      </div>
      <p
        className="text-xs lg:text-sm text-gray-500 mb-2"
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
          <Link
            to={`/find-dev/${user?.username}`}
            className="flex items-center"
          >
            {user?.profile_url ? (
              <img
                src={user?.profile_url}
                className="w-[20px] h-[20px] rounded-full"
              />
            ) : (
              <Avatar name={user?.fullName} round={true} size={20} />
            )}
            <p className="text-xs my-2 mx-2"> {user?.username} </p>
          </Link>
          <FontAwesomeIcon icon={faClock} className="w-3 text-gray-600" />
          <p className="text-xs my-2 mx-2">{query?.datetime.slice(0, 24)}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default QueryCard;
