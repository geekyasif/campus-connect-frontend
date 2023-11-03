import React from "react";
import { useSelector } from "react-redux";
import UserAcademicCard from "./UserAcademicCard";

function UserProfileAcademicContainer() {
  const { user } = useSelector((state) => state.auth);

  return <UserAcademicCard academics={user?.user?.academics} />;
}

export default UserProfileAcademicContainer;
