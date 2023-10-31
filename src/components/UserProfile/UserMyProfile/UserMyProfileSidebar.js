import React, { useState } from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import {
  ImDownload3,
  ImFire,
  ImGithub,
  ImHtmlFive,
  ImLinkedin2,
  ImLocation,
  ImPencil,
  ImPhone,
  ImShare2,
} from "react-icons/im";
import { BiSolidEdit } from "react-icons/bi";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import Modal from "../../Modal/Modal";
import UserPersonalDetails from "../EditProfile/UserPersonalDetails";

function UserMyProfileSidebar() {
  const { user } = useSelector((state) => state.auth);
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
    <div className="border rounded">
      {/* user profile cover change section  */}
      <div className="w-full h-[180px] rounded-t-md relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <button className="absolute top-3 right-3 px-2 py-1 bg-white text-blue-500 rounded text-xs flex gap-1 items-center">
          <BiSolidEdit /> change cover
        </button>
      </div>

      {/* about section  */}
      <div className="flex flex-col lg:flex lg:flex-row">
        {/* profile image section  */}
        <div className="h-[100px] flex justify-center relative md:w-[15%]">
          <div className="my-4 bg-gray-100 rounded-full p-[3px] w-[150px] h-[150px] lg:w-[150px] absolute bottom-0">
            {user?.user?.personal_details?.profile_url !== "" ? (
              <img
                alt="profile"
                src={user?.user?.personal_details?.profile_url}
                className="rounded-full  w-[150px] h-[150px] lg:w-[150px] object-cover"
              />
            ) : (
              <Avatar
                name={user?.user?.personal_details?.fullName}
                size={95}
                round={true}
              />
            )}
          </div>
        </div>

        {/* user profile about section  */}
        <div className="p-2 md:w-[85%]">
          <div className="flex justify-between">
            <div className="">
              <p className="text-lg lg:text-2xl font-bold">
                {user?.user?.personal_details?.fullName}
              </p>
              <p className="text-xs lg:text-sm text-gray-500 font-semibold flex gap-2 my-2">
                <ImFire /> {user?.user?.personal_details?.expertise_in}
              </p>
            </div>

            <div className="flex gap-2 h-full">
              <button className="flex gap-2 items-center text-xs border px-2 py-1 rounded">
                <ImShare2 className="text-xs" size={10} />
                Share
              </button>
              <button
                className="flex gap-2 items-center text-xs border px-2 py-1  rounded"
                onClick={() => showModal(<UserPersonalDetails />)}
              >
                <ImPencil />
                Edit Profile
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs lg:text-sm text-gray-500 font-semibold flex gap-2 items-center ">
              <ImLocation />
              {user?.user?.personal_details?.city}
            </p>
            <div className="flex flex-row gap-2 border-b-2 my-4 pb-2">
              {user?.user?.personal_details?.skills.split(",").map((skill) => (
                <p className="px-2 py-1 text-xs rounded bg-gray-100">{skill}</p>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:items-center">
              <div className="flex flex-wrap gap-1 justify-between items-center mb-2 border-b-2 pb-2 lg:border-b-0 lg:pb-0">
                <SocialIcon
                  link={user?.user?.social_links?.github}
                  element={<ImGithub />}
                />
                <SocialIcon
                  link={user?.user?.social_links?.linkedin}
                  element={<ImLinkedin2 />}
                />
                <SocialIcon
                  link={user?.user?.social_links?.leetcode}
                  element={<SiLeetcode />}
                />
                <SocialIcon
                  link={user?.user?.social_links?.portfolio}
                  element={<ImHtmlFive />}
                />
                <SocialIcon
                  link={user?.user?.social_links?.hackerrank}
                  element={<FaHackerrank />}
                />
                <SocialIcon
                  link={user?.user?.social_links?.codechef}
                  element={<SiCodechef />}
                />
                <SocialIcon
                  link={user?.user?.social_links?.geeksforgeek}
                  element={<SiGeeksforgeeks />}
                />
              </div>

              <div className="flex flex-row gap-2">
                <button className="px-2 bg-gray-100 flex-grow rounded text-xs py-2 lg:py-1 flex gap-2 items-center justify-center">
                  <ImDownload3 /> Resume
                </button>
                <button className="px-2 bg-gray-100 flex-grow rounded text-xs py-2 lg:py-1 flex gap-2 items-center justify-center">
                  <ImPhone /> Contact
                </button>
              </div>
            </div>
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

export default UserMyProfileSidebar;

{
  /* tabs / navigation section  */
}
{
  /* <div className="flex gap-2 overflow-x-auto border-t-[2px] pt-2">
  <Link className="px-2 mb-3 text-sm font-semibold" to={`#about`}>
    About
  </Link>
  <Link className="px-2 mb-3 text-sm font-semibold" to="#queries">
    Queries
  </Link>
  <Link className="px-2 mb-3 text-sm font-semibold" to="#academics">
    Academics
  </Link>
  <Link className="px-2 mb-3 text-sm font-semibold" to="#certificates">
    Certificates
  </Link>
  <Link className="px-2 mb-3 text-sm font-semibold" to="#projects">
    Projects
  </Link>
</div> */
}
