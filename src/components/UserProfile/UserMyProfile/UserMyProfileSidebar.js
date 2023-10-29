import React from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserMyProfileSidebar() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="border rounded">
      {/* user profile cover change section  */}
      <div className="w-full h-[180px] rounded-t-md relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <button className="absolute top-3 right-3 px-2 py-1 bg-white text-blue-500 rounded text-xs">
          change cover
        </button>
      </div>

      {/* about section  */}
      <div className="">
        {/* profile image section  */}
        <div className="h-[100px] flex justify-center relative">
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
        <div className="p-2">
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-lg font-bold">
                {user?.user?.personal_details?.fullName}
              </p>
              <p className="text-xs lg:text-sm text-gray-500 font-semibold">
                {user?.user?.personal_details?.expertise_in}
              </p>
            </div>

            <div className="flex gap-2">
              <button className="px-2 rounded bg-gray-100 text-xs">
                Share
              </button>
              <button className="px-2 rounded bg-gray-100 text-xs">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="py-2">
            <p className="text-xs lg:text-sm text-gray-500 font-semibold">
              {user?.user?.personal_details?.city}
            </p>
            <div className="flex flex-row gap-2 border-b-2 my-4 pb-2">
              {user?.user?.personal_details?.skills.split(",").map((skill) => (
                <p className="px-2 py-1 text-xs rounded bg-gray-100">{skill}</p>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-1">
                <a
                  className="rounded p-1 text-xs  lg:text-sm  border"
                  href={user?.user?.social_links?.github}
                >
                  github
                </a>
                <a
                  className="rounded p-1 text-xs  lg:text-sm  border"
                  href={user?.user?.social_links?.linkedin}
                >
                  linkedin
                </a>
                <a
                  className="rounded p-1 text-xs  lg:text-sm  border"
                  href={user?.user?.social_links?.leetcode}
                >
                  leetcode
                </a>
                <a
                  className="rounded p-1 text-xs  lg:text-sm  border"
                  href={user?.user?.social_links?.portfolio}
                >
                  portfolio
                </a>
                <a
                  className="rounded p-1 text-xs  lg:text-sm  border"
                  href={user?.user?.social_links?.hackerrank}
                >
                  hackerrank
                </a>
                <a
                  className="rounded p-1 text-xs  lg:text-sm  border"
                  href={user?.user?.social_links?.codechef}
                >
                  codechef
                </a>
                <a
                  className="rounded p-1 text-xs  lg:text-sm  border"
                  href={user?.user?.social_links?.geeksforgeek}
                >
                  geeksforgeek
                </a>
              </div>

              <div>
                <p className="px-2 bg-gray-100 rounded text-xs py-1">Contact</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tabs / navigation section  */}
      {/* <div className="flex gap-2 overflow-x-auto border-t-[2px] pt-2">
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
      </div> */}
    </div>
  );
}

export default UserMyProfileSidebar;
