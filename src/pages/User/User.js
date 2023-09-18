import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import UserSidebarLinks from "../../components/UserProfile/UserSidebarLinks";

function User() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto flex flex-col md:flex md:flex-row my-4 md:p-0 p-2">
      <div className="flex flex-col md:flex-row w-[100%] h-full gap-4">
        <UserSidebarLinks />
        <div className="rounded w-[100%] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default User;
