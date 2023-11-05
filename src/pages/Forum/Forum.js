import React, { useEffect } from "react";
import ForumSidebar from "../../components/Forum/ForumSidebar";
import { Outlet } from "react-router-dom";
import QueryCategories from "../../components/Forum/QueryCategories";
import { useDispatch } from "react-redux";
import { closeSideNavbar } from "../../features/authSlice";

function Forum() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideNavbar(false));
  }, []);

  return (
    <div className="container mx-auto h-screen">
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
