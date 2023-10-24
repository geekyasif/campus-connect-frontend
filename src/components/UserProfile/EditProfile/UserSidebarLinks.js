import React from "react";
import { useSelector } from "react-redux";
import UserSidebarLink from "./UserSidebarLink";

function UserSidebarLinks() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-white shadow lg:w-[15%] w-full h-full lg:p-2 pt-2 lg:pt-0 flex flex-row lg:flex-col flex-wrap">
      <UserSidebarLink
        url={`${user?.user?.personal_details?.username}`}
        label="Personal Details"
      />

      <UserSidebarLink
        url={`${user?.user?.personal_details?.username}/academics`}
        label="Academics"
      />

      <UserSidebarLink
        url={`${user?.user?.personal_details?.username}/social-links`}
        label="Social Links"
      />

      <UserSidebarLink
        url={`${user?.user?.personal_details?.username}/certificates`}
        label="Certificates"
      />
      <UserSidebarLink
        url={`${user?.user?.personal_details?.username}/projects`}
        label="Projects"
      />

      <UserSidebarLink
        url={`${user?.user?.personal_details?.username}/change-password`}
        label="Change Password"
      />
    </div>
  );
}

export default UserSidebarLinks;
