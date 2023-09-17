import React from "react";
import { useSelector } from "react-redux";
import UserProjectCard from "./UserProjectCard";

function UserMyProfileProjectContainer() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {user?.projects?.map((project) => (
        <UserProjectCard project={project} />
      ))}
    </div>
  );
}

export default UserMyProfileProjectContainer;
