import React, { useEffect, useState } from "react";
import ForumSidebar from "../../components/Forum/ForumSidebar";
import { Outlet } from "react-router-dom";
import QueryCategories from "../../components/Forum/QueryCategories";
import { useDispatch, useSelector } from "react-redux";
import { handleIsSideNavbarOpen } from "../../features/authSlice";

function Forum() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIsSideNavbarOpen());
  }, []);

  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col-reverse lg:flex-row lg:flex-wrap gap-4 m-4 h-full">
        <div className="flex flex-col h-full w-full lg:w-[20%] gap-2">
          <QueryCategories />
          <ForumSidebar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Forum;

{
  /* <div className="w-full lg:w-[78%] bg-white rounded h-full ">
<div className="bg-gray-100  flex justify-between border items-center p-2 flex-wrap lg:flex-nowrap">
  <p className="px-1 lg:px-2 font-bold lg:mb-0 mb-2 w-full">
    Recent Queries
  </p>
  <div className="flex justify-between w-full lg:justify-end">
    <input
      type="text"
      placeholder="Search topics..."
      className="p-1 rounded placeholder:text-sm focus:outline-none mr-3 px-2 bg-white"
    />
    <button className="bg-red-500 rounded px-4 py-1 text-white text-sm">
      New +
    </button>
  </div>
</div>
<Outlet />
</div> */
}
