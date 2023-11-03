import React from "react";
import { useSelector } from "react-redux";
import UserProjectCard from "./UserProjectCard";

function UserMyProfileProjectContainer() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-row bg-red-500">
      {user?.user?.projects.length === 0 && (
        <p className="text-center">No Project found!</p>
      )}
      <div className="flex flex-row">
        {user?.user?.projects?.map((project) => (
          <UserProjectCard project={project} key={project?.project_id} />
        ))}
      </div>
    </div>
  );
}

export default UserMyProfileProjectContainer;
