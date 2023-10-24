import {
  faBoltLightning,
  faBook,
  faDatabase,
  faMessage,
  faUniversity,
  faUser,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "react-avatar";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Chat from "../chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import {
  setCloseChatBox,
  setOpenChatBox,
  setUserChat,
} from "../../features/authSlice";
import ChatShimmer from "../chat/ChatShimmer";

function DevCard({ user, id }) {
  const { authToken, isChatOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const [isChatLoading, setIsChatLoading] = useState(false);

  const handleChatBox = async () => {
    if (authToken) {
      try {
        setIsChatLoading(true);
        dispatch(setCloseChatBox());
        await new Promise((resolve) => setTimeout(resolve, 200));
        dispatch(setUserChat({ user, id }));
        dispatch(setOpenChatBox());
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsChatLoading(false);
      }
    } else {
      naviagte("/login");
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center">
        <Toaster position="top-right" reverseOrder={false} />
        <div className=" md:w-[140px] md:h-[100px] w-[80px] h-[60px] flex justify-center items-center md:mr-8 mr-4 ">
          {user?.personal_details?.profile_url === "" ? (
            <Avatar
              name={user?.personal_details?.fullName}
              round={true}
              size={65}
            />
          ) : (
            <img
              alt="profile"
              src={user?.personal_details?.profile_url}
              className="rounded-full"
            />
          )}
        </div>
        <div className="w-full ">
          <div className="text-center flex flex-row justify-between items-center">
            <p className="md:text-xl text-sm font-bold">
              {user?.personal_details?.fullName}
            </p>
            <div className="flex flex-row items-center">
              {user?.social_links.github && (
                <a
                  className="mr-2 md:mr-4 text-xs text-indigo-600"
                  href={user?.social_links?.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              )}
              {user?.social_links.linkedin && (
                <a
                  href={user?.social_links?.linkedin}
                  target="_blank"
                  className="text-xs text-indigo-600"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              )}
            </div>
          </div>
          <p className="text-xs my-2">
            <FontAwesomeIcon icon={faBook} className="mr-1" />
            {user?.academics?.enrol_in_branch_name}{" "}
            <span className="">
              ( year/sem - {user?.academics?.current_year}/
              {user?.academics?.current_semester} )
            </span>
          </p>
          <p className="text-xs">
            <FontAwesomeIcon icon={faUniversity} className="mr-1" />
            {user?.academics?.university_name}
          </p>
          <div className="hidden md:block">
            <p className="text-xs my-2">
              <FontAwesomeIcon icon={faUserGraduate} className="mr-1 text-xs" />
              About
            </p>
            <p className="my-2 text-xs">{user?.personal_details?.about}</p>
          </div>
        </div>
      </div>

      <div className="my-4  border-t-2 py-2">
        <p className="text-gray-700 md:text-base text-sm">
          <FontAwesomeIcon
            icon={faDatabase}
            className="mr-1 md:text-[15px] text-sm"
          />
          Skills
        </p>
        <div className="flex flex-row flex-wrap">
          {user?.personal_details?.skills.length !== 0 &&
            user?.personal_details?.skills.split(",").map((skill, i) => (
              <p
                className="p-1 border rounded mr-1 my-1 text-xs text-indigo-500"
                key={skill + i}
              >
                {skill}
              </p>
            ))}
        </div>

        <p className="text-gray-700 md:text-base text-sm">
          <FontAwesomeIcon
            icon={faBoltLightning}
            className="mr-1 md:text-[15px] text-sm"
          />
          Expertise in
        </p>
        <p className="my-2 text-xs">{user?.personal_details?.expertise_in}</p>

        <div className="block md:hidden">
          <p className="text-sm my-2">
            <FontAwesomeIcon icon={faUserGraduate} className="mr-1 text-xs" />
            About
          </p>
          <p className="my-2 text-xs">{user?.personal_details?.about}</p>
        </div>

        <div className="flex flex-row lg:justify-end justify-between items-center">
          <Link
            to={`/find-dev/${user?.personal_details?.username}`}
            state={{
              user,
            }}
            className="border rounded p-2 md:mr-2 text-xs  bg-indigo-500 mr-0  md:mt-0 text-center text-white w-full lg:w-1/5"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            View Details
          </Link>
          <button
            className="border rounded p-2 text-xs  bg-indigo-500 text-center text-white w-full lg:w-1/5"
            onClick={handleChatBox}
          >
            <FontAwesomeIcon icon={faMessage} className="mr-2" />
            Chat
          </button>
        </div>
      </div>
      {isChatLoading && <ChatShimmer />}
      {isChatOpen && <Chat />}
    </div>
  );
}

export default DevCard;
