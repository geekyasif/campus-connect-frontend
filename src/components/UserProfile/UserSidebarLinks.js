import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function UserSidebarLinks() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div className="bg-white shadow md:mr-4 md:w-64 rounded mb-4 md:flex md:flex-col h-[325px] p-2 hidden">
      <Link
        className={
          location.pathname === `/edit-profile/${user?.personal_details?.username}`
            ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
            : "cursor-pointer p-2 rounded my-2 text-sm"
        }
        to={`/edit-profile/${user?.personal_details?.username}`}
      >
        Personal Details
      </Link>
      <Link
        className={
          location.pathname ===
          `/edit-profile/${user?.personal_details?.username}/academics`
            ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
            : "cursor-pointer p-2 rounded my-2 text-sm"
        }
        to={`/edit-profile/${user?.personal_details?.username}/academics`}
      >
        Academics
      </Link>

      <Link
        className={
          location.pathname ===
          `/edit-profile/${user?.personal_details?.username}/social-links`
            ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
            : "cursor-pointer p-2 rounded my-2 text-sm"
        }
        to={`/edit-profile/${user?.personal_details?.username}/social-links`}
      >
        Social Links
      </Link>

      <Link
        className={
          location.pathname ===
          `/edit-profile/${user?.personal_details?.username}/certificates`
            ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
            : "cursor-pointer p-2 rounded my-2 text-sm"
        }
        to={`/edit-profile/${user?.personal_details?.username}/certificates`}
      >
        Certificates
      </Link>

      <Link
        className={
          location.pathname ===
          `/edit-profile/${user?.personal_details?.username}/projects`
            ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
            : "cursor-pointer p-2 rounded my-2 text-sm"
        }
        to={`/edit-profile/${user?.personal_details?.username}/projects`}
      >
        Projects
      </Link>

      <Link
        className={
          location.pathname ===
          `/edit-profile/${user?.personal_details?.username}/change-password`
            ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
            : "cursor-pointer p-2 rounded my-2 text-sm"
        }
        to={`/edit-profile/${user?.personal_details?.username}/change-password`}
      >
        Change Password
      </Link>
    </div>
  );
}

export default UserSidebarLinks;
