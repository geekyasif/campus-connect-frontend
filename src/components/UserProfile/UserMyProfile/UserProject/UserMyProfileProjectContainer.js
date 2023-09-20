import React from "react";
import { useSelector } from "react-redux";
import UserProjectCard from "./UserProjectCard";

function UserMyProfileProjectContainer() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user?.projects?.map((project) => (
        <div key={project?.project_id}>
          <UserProjectCard project={project} />
        </div>
      ))}
    </>
  );
}

export default UserMyProfileProjectContainer;
