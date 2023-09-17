import React from "react";
import ForumTags from "../../components/Forum/ForumTags";
import ForumSidebar from "../../components/Forum/ForumSidebar";
import { Outlet } from "react-router-dom";

function Forum() {
  return (
    <div className="container mx-auto m-4">
      <ForumTags />
      <div className="flex gap-4 flex-wrap lg:p-0 p-2 flex-col-reverse lg:flex-row">
        <ForumSidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Forum;
