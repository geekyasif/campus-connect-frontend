import React from "react";
import { useSelector } from "react-redux";
import UserAcademicsCard from "./UserAcademicsCard";

function UserProfileAcademicContainer() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <UserAcademicsCard academics={user?.user?.academics} />
    </div>
  );
}

export default UserProfileAcademicContainer;
