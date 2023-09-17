import React from "react";
import ForumSidebarTag from "./ForumSidebarTag";

function ForumSidebar() {
  return (
    <div className="w-[20%] bg-white border rounded p-2 h-full">
      <p className="font-semibold border-b-2  mb-4 pb-2 ">Tags</p>
      <div className="mb-4">
        <input
          type="text"
          className="border bg-gray-50 placeholder:text-sm w-full px-4 py-1 rounded focus:outline-none"
          placeholder="Search for tags..."
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <ForumSidebarTag text="React" />
        <ForumSidebarTag text="Javascript" />
        <ForumSidebarTag text="Java" />
        <ForumSidebarTag text="Python" />
        <ForumSidebarTag text="Array" />
        <ForumSidebarTag text="Django" />
        <ForumSidebarTag text="Node" />
        <ForumSidebarTag text="Express" />
        <ForumSidebarTag text="Next" />
        <ForumSidebarTag text="Graphql" />
        <ForumSidebarTag text="Sql" />
        <ForumSidebarTag text="Mongodb" />
        <ForumSidebarTag text="Python" />
        <ForumSidebarTag text="Array" />
        <ForumSidebarTag text="Django" />
        <ForumSidebarTag text="Node" />
        <ForumSidebarTag text="Express" />
        <ForumSidebarTag text="Next" />
        <ForumSidebarTag text="Graphql" />
        <ForumSidebarTag text="Sql" />
        <ForumSidebarTag text="Mongodb" />
        <ForumSidebarTag text="Python" />
        <ForumSidebarTag text="Array" />
        <ForumSidebarTag text="Django" />
        <ForumSidebarTag text="Node" />
        <ForumSidebarTag text="Express" />
        <ForumSidebarTag text="Next" />
        <ForumSidebarTag text="Graphql" />
        <ForumSidebarTag text="Sql" />
        <ForumSidebarTag text="Mongodb" />
        <ForumSidebarTag text="Python" />
        <ForumSidebarTag text="Array" />
        <ForumSidebarTag text="Django" />
        <ForumSidebarTag text="Node" />
        <ForumSidebarTag text="Express" />
        <ForumSidebarTag text="Next" />
        <ForumSidebarTag text="Graphql" />
        <ForumSidebarTag text="Sql" />
        <ForumSidebarTag text="Mongodb" />
        
      </div>
    </div>
  );
}

export default ForumSidebar;
