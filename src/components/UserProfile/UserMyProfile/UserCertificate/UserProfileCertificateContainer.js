import React from "react";
import { useSelector } from "react-redux";
import UserCertificateCard from "./UserCertificateCard";

function UserProfileCertificateContainer() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      {user?.user?.certificates?.length === 0 && (
        <p className="text-center">No certificates found!</p>
      )}
      {user?.user?.certificates?.map((certificate) => (
        <div key={certificate?.certificate_id}>
          <UserCertificateCard certificate={certificate} />
        </div>
      ))}
    </div>
  );
}

export default UserProfileCertificateContainer;
