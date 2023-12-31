import React from "react";
import { Link, useLocation } from "react-router-dom";

function UserSidebarLink({ label, url }) {
  const location = useLocation();
  return (
    <Link
      className={
        location.pathname === `/edit-profile/${url}`
          ? "bg-indigo-500 text-sm text-white cursor-pointer p-1 lg:p-2 lg:my-2 my-0 rounded block mx-2 mb-2 lg:mb-0 lg:mx-0"
          : "cursor-pointer p-1 lg:p-2 rounded lg:my-2 text-sm block mx-2 lg:mx-0 mb-2 lg:mb-0 border"
      }
      to={`/edit-profile/${url}`}
    >
      {label}
    </Link>
  );
}

export default UserSidebarLink;
