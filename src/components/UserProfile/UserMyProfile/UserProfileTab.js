import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserProfileTab({ handleActiveTab, activeTab }) {
  return (
    <div className="border-b-2  mb-4 flex flex-row flex-wrap gap-1">
      <p
        onClick={() => handleActiveTab("About")}
        className={
          activeTab === "About"
            ? "bg-indigo-500 text-xs lg:text-sm text-white cursor-pointer p-1 lg:p-2 rounded my-1 lg:my-2"
            : "cursor-pointer p-1 lg:p-2 rounded my-1 lg:my-2 text-xs lg:text-sm border"
        }
      >
        About
      </p>

      <p
        onClick={() => handleActiveTab("Academics")}
        className={
          activeTab === "Academics"
            ? "bg-indigo-500 text-xs lg:text-sm text-white cursor-pointer p-1 lg:p-2 rounded my-1 lg:my-2"
            : "cursor-pointer p-1 lg:p-2 rounded my-1 lg:my-2 text-xs lg:text-sm border"
        }
      >
        Academics
      </p>

      <p
        onClick={() => handleActiveTab("Projects")}
        className={
          activeTab === "Projects"
            ? "bg-indigo-500 text-xs lg:text-sm text-white cursor-pointer p-1 lg:p-2 rounded my-1 lg:my-2"
            : "cursor-pointer p-1 lg:p-2 rounded my-1 lg:my-2 text-xs lg:text-sm border"
        }
      >
        Projects
      </p>

      <p
        onClick={() => handleActiveTab("Certificates")}
        className={
          activeTab === "Certificates"
            ? "bg-indigo-500 text-xs lg:text-sm text-white cursor-pointer p-1 lg:p-2 rounded my-1 lg:my-2"
            : "cursor-pointer p-1 lg:p-2 rounded my-1 lg:my-2 text-xs lg:text-sm border"
        }
      >
        Certificates
      </p>

      <Link
        // to={`/profile/${user?.personal_details.username}`}
        onClick={() => handleActiveTab("My Queries")}
        className={
          activeTab === "My Queries"
            ? "bg-indigo-500 text-xs lg:text-sm text-white cursor-pointer p-1 lg:p-2 rounded my-1 lg:my-2"
            : "cursor-pointer p-1 lg:p-2 rounded my-1 lg:my-2 text-xs lg:text-sm border"
        }
      >
        My Queries
      </Link>
    </div>
  );
}

export default UserProfileTab;
