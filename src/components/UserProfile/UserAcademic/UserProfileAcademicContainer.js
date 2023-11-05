import React from "react";
import UserAcademicCard from "./UserAcademicCard";

function UserProfileAcademicContainer({ user }) {
  return <UserAcademicCard academics={user?.user?.academics} />;
}

export default UserProfileAcademicContainer;
