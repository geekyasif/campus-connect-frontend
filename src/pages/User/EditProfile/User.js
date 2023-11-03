import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserSidebarLinks from "../../../components/UserProfile/EditProfile/UserSidebarLinks";
import { handleIsSideNavbarOpen } from "../../../features/authSlice";

function User() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIsSideNavbarOpen());
  }, []);

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
