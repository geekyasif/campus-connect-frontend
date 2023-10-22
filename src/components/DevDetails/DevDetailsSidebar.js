import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Avatar from "react-avatar";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setOpenChatBox, setUserChat } from "../../features/authSlice";

function DevDetailsSidebar({ user }) {
  const { personal_details, social_links } = user;
  const dispatch = useDispatch();


  return (
    <div className="border bg-white rounded p-4 h-full lg:w-[25%] w-full ">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex justify-center">
        {personal_details?.profile_url !== "" ? (
          <img
            alt="profile"
            src={personal_details?.profile_url}
            className="rounded-full w-40 h-40"
          />
        ) : (
          <Avatar name={personal_details?.fullName} round={true} size={95} />
        )}
      </div>
      <p className=" font-bold text-xl lg:text-2xl text-center my-2">
        {personal_details?.fullName}
      </p>

      <p className=" font-bold text-sm lg:text-base mb-2">
        Expertise in :{" "}
        <span className="text-gray-500 text-xs lg:text-sm">
          {personal_details?.expertise_in}
        </span>
      </p>

      <p className=" font-bold text-sm lg:text-base mb-2">
        Username :{" "}
        <span className="text-gray-500 text-xs lg:text-sm">
          @{personal_details?.username}
        </span>
      </p>
      <p className=" font-bold text-sm lg:text-base mb-2">
        Email :{" "}
        <span className="text-gray-500 text-xs lg:text-sm">
          {personal_details?.email}
        </span>
      </p>
      <p className=" font-bold text-sm lg:text-base mb-2">
        Phone :{" "}
        <span className="text-gray-500 text-xs lg:text-sm">
          {personal_details?.phone}
        </span>
      </p>
      <p className=" font-bold text-sm lg:text-base mb-2">
        City :{" "}
        <span className="text-gray-500 text-xs lg:text-sm">
          {personal_details?.city}
        </span>
      </p>
      <p className="my-2 font-bold mt-4 border-b-2">Skills</p>
      <div className="flex flex-row flex-wrap">
        {personal_details?.skills?.split(",").map((skill, id) => (
          <p className="border p-1 my-1 mr-1 text-xs rounded" key={id}>
            {skill}
          </p>
        ))}
      </div>

      <div>
        <p className=" font-bold mt-4 mb-2 border-b-2">Follow on</p>
        <div className="flex flex-wrap">
          <a
            className="mr-2 text-xs text-indigo-600 border p-1 rounded"
            target="_blank"
            href={social_links?.github}
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="mr-2 text-xs text-indigo-600 border p-1 rounded"
            target="_blank"
            href={social_links?.leetcode}
            rel="noreferrer"
          >
            Leetcode
          </a>
          <a
            className="mr-2 text-xs text-indigo-600 border p-1 rounded"
            target="_blank"
            href={social_links?.linkedin}
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            className="mr-2 text-xs text-indigo-600 border p-1 rounded"
            target="_blank"
            href={social_links?.geeksforgeek}
            rel="noreferrer"
          >
            GeeksforGeeks
          </a>
          <a
            className="mr-2 text-xs text-indigo-600 border p-1 rounded"
            target="_blank"
            href={social_links?.codechef}
            rel="noreferrer"
          >
            Codechef
          </a>
        </div>
      </div>
      <div className="my-4 text-center">
        <button
          className="border rounded p-2 text-xs md:text-sm bg-indigo-500 text-center text-white"
          onClick={() => {
            dispatch(setUserChat(user))
            dispatch(setOpenChatBox())
          }}
        >
          <FontAwesomeIcon icon={faMessage} className="mr-2" />
          Chat
        </button>
      </div>
    </div>
  );
}

export default DevDetailsSidebar;
