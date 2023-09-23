import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";

function UserMyProfileSidebar() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="border rounded p-2 text-center bg-white shadow md:w-[300px] md:h-[400px] mx-auto w-full">
      <div className="my-4">
        {user?.personal_details?.profile_url !== "" ? (
          <img
alt="profile"
            src={user?.personal_details?.profile_url}
            className=" w-[120px] lg:w-[150px] rounded-full mx-auto"
          />
        ) : (
          <Avatar
            name={user?.personal_details?.fullName}
            size={95}
            round={true}
          />
        )}
      </div>

      <p className="text-lg font-bold">{user?.personal_details?.fullName}</p>
      <p className="text-xs lg:text-sm text-gray-500 font-semibold">@{user?.personal_details?.username}</p>
    </div>
  );
}

export default UserMyProfileSidebar;
