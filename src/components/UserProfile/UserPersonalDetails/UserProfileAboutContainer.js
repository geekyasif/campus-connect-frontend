import React, { useState } from "react";
import {
  ImDownload3,
  ImFire,
  ImGithub,
  ImHtmlFive,
  ImLinkedin2,
  ImLocation,
  ImMail3,
  ImPencil,
  ImPhone,
  ImPlus,
  ImShare2,
} from "react-icons/im";
import UserPersonalDetails from "./EditUserPersonalDetails";
import SocialIcon from "../SocialIcon";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import UserSocialLinks from "../EditProfile/UserSocialLinks";
import Modal from "../../Modal/Modal";
import useUser from "../../../hooks/user/useUser";

function UserProfileAboutContainer({ user }) {
  const { user_id: current_user } = useUser();
  const [isOpenToCollab, setIsOpenToCollab] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [element, setElement] = useState(null);

  const showModal = (el) => {
    setElement(el);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setElement(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-2 md:w-[85%]">
      <div className="flex justify-between">
        <div className="">
          <p className="text-lg lg:text-3xl font-bold flex items-center gap-2">
            {user?.user?.personal_details?.fullName}
            {current_user === user?.id && isOpenToCollab && (
              <span className="bg-green-700 text-sm text-white px-2 rounded-full">
                Open For Collaboration
              </span>
            )}
          </p>

          {user?.user?.personal_details?.expertise_in && (
            <p className="text-xs lg:text-base text-gray-500 font-semibold flex gap-2 my-2">
              <ImFire /> {user?.user?.personal_details?.expertise_in}
            </p>
          )}
        </div>
        <div>
          <div className="flex gap-2">
            <button className="flex gap-2 items-center text-xs px-2 py-1 rounded border-blue-500 border-[1px]">
              <ImShare2 className="text-xs" size={10} />
              Share
            </button>
            {current_user === user?.id && (
              <button
                className="flex gap-2 items-center text-xs border px-2 py-1  rounded bg-red-600 text-white"
                onClick={() => showModal(<UserPersonalDetails />)}
              >
                <ImPencil />
                Edit Profile
              </button>
            )}
          </div>
          {current_user === user?.id && (
            <div className="mt-3 w-full flex gap-2 items-center justify-center p-1 rounded border-[1px] border-blue-500">
              <input
                type="checkbox"
                value={isOpenToCollab}
                onChange={() => setIsOpenToCollab(!isOpenToCollab)}
              />
              <span className="text-xs text-blue-600">
                Open for Collaboration
              </span>
            </div>
          )}
        </div>
      </div>

      <div>
        {user?.user?.personal_details?.city && (
          <p className="text-xs lg:text-base text-gray-500 font-semibold flex gap-2 items-center ">
            <ImLocation />
            {user?.user?.personal_details?.city}
          </p>
        )}
        {user?.user?.personal_details?.skills && (
          <div className="flex flex-row gap-2 my-4 pb-2">
            {user?.user?.personal_details?.skills?.split(",")?.map((skill) => (
              <p className="px-2 py-1 text-xs lg:text-base rounded bg-blue-50 text-blue-500 font-medium">
                {skill}
              </p>
            ))}
          </div>
        )}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:items-center border-t-2 py-2 mt-2">
          <div className="flex flex-wrap gap-1 justify-between items-center mb-2 border-b-2 pb-2 lg:border-b-0 lg:pb-0">
            <SocialIcon
              link={user?.user?.social_links?.github}
              element={<ImGithub />}
            />
            <SocialIcon
              link={user?.user?.social_links?.linkedin}
              element={<ImLinkedin2 color="blue" />}
            />
            <SocialIcon
              link={user?.user?.social_links?.leetcode}
              element={<SiLeetcode color="yellow" />}
            />
            <SocialIcon
              link={user?.user?.social_links?.portfolio}
              element={<ImHtmlFive color="orange" />}
            />
            <SocialIcon
              link={user?.user?.social_links?.hackerrank}
              element={<FaHackerrank color="green" />}
            />
            <SocialIcon
              link={user?.user?.social_links?.codechef}
              element={<SiCodechef color="brown" />}
            />
            <SocialIcon
              link={user?.user?.social_links?.geeksforgeek}
              element={<SiGeeksforgeeks color="green" />}
            />
            {current_user === user?.id && (
              <div
                className="p-2 rounded-md cursor-pointer bg-red-600 flex items-center justify-center gap-2"
                onClick={() => showModal(<UserSocialLinks />)}
              >
                <ImPlus color="white" />
              </div>
            )}
          </div>

          <div className="flex flex-row gap-2">
            <button className="px-2 bg-gray-100 flex-grow rounded text-xs py-2 lg:py-1 flex gap-2 items-center justify-center">
              <ImDownload3 /> Resume
            </button>
            <button className="px-2 bg-gray-100 flex-grow rounded text-xs py-2 lg:py-1 flex gap-2 items-center justify-center">
              <ImMail3 /> Email
            </button>
            <button className="px-2 bg-gray-100 flex-grow rounded text-xs py-2 lg:py-1 flex gap-2 items-center justify-center">
              <ImPhone /> Contact
            </button>
          </div>
        </div>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        element={element}
        modalTitle="Edit Profile"
      />
    </div>
  );
}

export default UserProfileAboutContainer;
