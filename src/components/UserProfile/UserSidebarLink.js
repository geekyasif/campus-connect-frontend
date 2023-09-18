import React from "react";
import { Link, useLocation } from "react-router-dom";

function UserSidebarLink({ label, url }) {
  const location = useLocation();
  return (
    <div className="m-2 lg:m-0">
    <Link
      className={
        location.pathname === `/edit-profile/${url}`
          ? "bg-indigo-500 text-sm text-white cursor-pointer p-1 lg:p-2 lg:my-2 my-0 rounded block"
          : "cursor-pointer p-1 lg:p-2 rounded lg:my-2 text-sm block"
      }
      to={`/edit-profile/${url}`}
    >
      {label}
    </Link>
    </div>
  );
}

export default UserSidebarLink;
