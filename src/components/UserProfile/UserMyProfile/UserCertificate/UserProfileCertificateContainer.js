import React from "react";
import { useSelector } from "react-redux";
import UserCertificateCard from "./UserCertificateCard";

function UserProfileCertificateContainer() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      {user?.certificates?.map((certificate) => (
        <UserCertificateCard certificate={certificate}/>
      ))}
    </div>
  );
}

export default UserProfileCertificateContainer;
