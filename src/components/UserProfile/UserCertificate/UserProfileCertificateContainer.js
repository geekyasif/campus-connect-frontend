import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserCertificateCard from "./UserCertificateCard";
import { db } from "../../../services/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

function UserProfileCertificateContainer({ user }) {
  const [certificates, setCertificates] = useState([]);

  const fetchUserCertificates = () => {
    try {
      const unsubscribe = onSnapshot(
        query(collection(db, "users", `${user?.id}`, "certificates")),
        (querySnapshot) => {
          const _certificates = [];
          querySnapshot.forEach((doc) => {
            _certificates.push({ id: doc.id, data: doc.data() });
          });

          setCertificates(_certificates);
        },
        (error) => {
          console.error("Error getting document: ", error);
        }
      );
      return unsubscribe;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = fetchUserCertificates();

    return () => unsubscribe();
  }, [user]);
  return (
    <div className="min-h-[140px]">
      {certificates?.length === 0 ||
        (certificates?.length === undefined && (
          <p className="text-center">No certificates found!</p>
        ))}
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2">
        {certificates?.map(({ id, data }) => (
          <UserCertificateCard certificate={data} key={id} />
        ))}
      </div>
    </div>
  );
}

export default UserProfileCertificateContainer;
