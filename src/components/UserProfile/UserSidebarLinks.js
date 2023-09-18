import React from "react";
import { useSelector } from "react-redux";
import UserSidebarLink from "./UserSidebarLink";

function UserSidebarLinks() {
  const { user } = useSelector((state) => state.auth);

  // md:mr-4 md:w-64 rounded mb-4 md:flex md:flex-col p-2 flex-wrap
  return (
    <div className="bg-white shadow lg:w-[15%] w-full h-full p-2 flex flex-row lg:flex-col flex-wrap">
      <UserSidebarLink
        url={`${user?.personal_details?.username}`}
        label="Personal Details"
      />

      <UserSidebarLink
        url={`${user?.personal_details?.username}/academics`}
        label="Academics"
      />

      <UserSidebarLink
        url={`${user?.personal_details?.username}/social-links`}
        label="Social Links"
      />

      <UserSidebarLink
        url={`${user?.personal_details?.username}/certificates`}
        label="Certificates"
      />
      <UserSidebarLink
        url={`${user?.personal_details?.username}/projects`}
        label="Projects"
      />

      <UserSidebarLink
        url={`${user?.personal_details?.username}/change-password`}
        label="Change Password"
      />
    </div>
  );
}

export default UserSidebarLinks;
