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
import ChatShimmer from "../Shimmer/ChatShimmer";

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
    <Link
      to={`/profile/${user?.personal_details?.username}`}
      state={{
        user,
      }}
      className="lg:w-[48%] w-full border shadow rounded"
    >
      <div className=" bg-white h-full">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="w-full h-[100px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t"></div>
        <div className="flex flex-row gap-2 ">
          <div className="w-[30%] lg:w-[15%] relative min-h-[100px] lg:ml-2">
            <div className="absolute top-[-40px] left-1">
              {user?.personal_details?.profile_url === "" ? (
                <Avatar
                  name={user?.personal_details?.fullName}
                  round={true}
                  size={95}
                />
              ) : (
                <img
                  alt="profile"
                  src={user?.personal_details?.profile_url}
                  className="rounded-full w-[95px] h-[95px]"
                />
              )}
            </div>
            {/* <button
              className="border rounded p-1 text-xs  bg-indigo-500 text-center text-white absolute top-[65px] left-2"
              onClick={handleChatBox}
            >
              <FontAwesomeIcon icon={faMessage} className="mr-2" />
              Message
            </button> */}
          </div>
          <div className="w-[70%] lg:flex-grow px-2">
            <div className="text-center flex flex-row justify-between items-center">
              <p className="md:text-xl text-sm font-bold">
                {user?.personal_details?.fullName}
              </p>
              <div className="flex flex-row items-center">
                {user?.social_links?.github && (
                  <a
                    className="mr-2 md:mr-4 text-xs text-indigo-600"
                    href={user?.social_links?.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
                {user?.social_links?.linkedin && (
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

            {user?.academics?.enrol_in_branch_name && (
              <p className="text-xs my-2">
                <FontAwesomeIcon icon={faBook} className="mr-1" />
                {user?.academics?.enrol_in_branch_name}
              </p>
            )}

            {user?.academics?.university_name && (
              <p className="text-xs">
                <FontAwesomeIcon icon={faUniversity} className="mr-1" />
                {user?.academics?.university_name}
              </p>
            )}
            <div className="flex flex-wrap gap-1 mt-2">
              {user?.personal_details?.skills?.length !== 0 &&
                user?.personal_details?.skills?.split(",")?.map((skill, i) => (
                  <p
                    className="p-1 border rounded text-xs text-indigo-500"
                    key={skill + i}
                  >
                    {skill}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className="my-4 border-t-2 px-2 min-h-[50px] pb-2 overflow-hidden">
          <p
            className="my-2 text-xs text-gray-600"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2,
            }}
          >
            {user?.personal_details?.about}
          </p>
        </div>
        {isChatLoading && <ChatShimmer />}
        {isChatOpen && <Chat />}
      </div>
    </Link>
  );
}

export default DevCard;
