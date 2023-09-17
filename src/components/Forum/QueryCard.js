import React from "react";
import { Link } from "react-router-dom";

function QueryCard({
  id,
  userid,
  username,
  timedate,
  title,
  slug,
  tags,
  category,
  description,
  imageURL,
}) {
  return (
    <div className="border-b-2 my-2 px-4 py-2">
      <Link to={`/forum/${slug}`} className="font-semibold">
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
        <div>
          <p className="text-xs my-2">
            {username} created at {timedate}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default QueryCard;
