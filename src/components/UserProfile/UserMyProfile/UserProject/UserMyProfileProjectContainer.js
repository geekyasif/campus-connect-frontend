import React from "react";
import { useSelector } from "react-redux";
import UserProjectCard from "./UserProjectCard";

function UserMyProfileProjectContainer() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
       {user?.user?.projects.length === 0 && (
          <p className="text-center">No Project found!</p>
        )}
      {user?.user?.projects?.map((project) => (
        <div key={project?.project_id}>
          <UserProjectCard project={project} />
        </div>
      ))}
    </>
  );
}

export default UserMyProfileProjectContainer;
