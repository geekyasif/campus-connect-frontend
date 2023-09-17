import React from "react";
import ForumTags from "../../components/Forum/ForumTags";
import ForumSidebar from "../../components/Forum/ForumSidebar";
import ForumContainer from "../../components/Forum/ForumContainer";
import { Outlet } from "react-router-dom";

function Forum() {
  return (
    <div className="container mx-auto m-4">
      <ForumTags />
      <div className="flex gap-4 flex-wrap">
        <ForumSidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Forum;
