import React from "react";
import { useSelector } from "react-redux";
import UserAcademicsCard from "../UserAcademicsCard";

function UserProfileAcademicContainer() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <p className="text-2xl font-bold mb-2">Academics</p>
      <UserAcademicsCard academics={user?.academics} />
    </div>
  );
}

export default UserProfileAcademicContainer;
