import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

function DevDetailsSidebar({ user }) {
  const { personal_details, social_links } = user;

  return (
    <div className="border bg-white rounded p-4 h-[700px] w-[25%]">
      <div className="flex justify-center">
      {personal_details?.profile_url !== "" ? (
        <img src={personal_details?.profile_url} className="rounded-full w-40 h-40" />
      ) : (
        <Avatar name={personal_details?.fullName} round={true} size={95} />
      )}
      </div>

      <p className="text-center text-sm mt-2">Expertise in</p>
      <p className="text-center text-gray-500 font-semibold">
        {personal_details?.expertise_in}
      </p>
      <p className="mt-2 font-bold text-2xl text-center my-4">
        {personal_details?.name}
      </p>
      <p className="text-gray-500 font-bold text-normal mb-2">
        Username : @{personal_details?.username}
      </p>
      <p className="text-gray-500 font-bold text-normal mb-2">
        Email : {personal_details?.email}
      </p>
      <p className="text-gray-500 font-bold text-normal mb-2">
        Phone : {personal_details?.phone}
      </p>
      <p className="text-gray-500 font-bold text-normal mb-2">
        City : {personal_details?.city}
      </p>
      <p className="my-2 font-bold mt-4 border-b-2">Skills</p>
      <div className="flex flex-row">
        {personal_details?.skills.split(",").map((skill, id) => (
          <p className="border p-1 my-1 mr-1 text-xs rounded" key={id}>{skill}</p>
        ))}
      </div>

      <div>
        <p className=" font-bold mt-4 mb-2 border-b-2">Follow on</p>
        <a
          className="mr-2 text-xs text-indigo-600 border p-1 rounded"
          target="_blank"
          href={social_links?.github}
        >
          Github
        </a>
        <a
          className="mr-2 text-xs text-indigo-600 border p-1 rounded"
          target="_blank"
          href={social_links?.leetcode}
        >
          Leetcode
        </a>
        <a
          className="mr-2 text-xs text-indigo-600 border p-1 rounded"
          target="_blank"
          href={social_links?.linkedin}
        >
          Linkedin
        </a>
        <a
          className="mr-2 text-xs text-indigo-600 border p-1 rounded"
          target="_blank"
          href={social_links?.geeksforgeek}
        >
          GeeksforGeeks
        </a>
        <a
          className="mr-2 text-xs text-indigo-600 border p-1 rounded"
          target="_blank"
          href={social_links?.codechef}
        >
          Codechef
        </a>
      </div>
      <div className="my-4 text-center">
        <Link className="border rounded p-2 text-xs md:text-sm bg-indigo-500 text-center text-white">
          <FontAwesomeIcon icon={faMessage} className="mr-2" />
          Request Chat
        </Link>
      </div>
    </div>
  );
}

export default DevDetailsSidebar;
