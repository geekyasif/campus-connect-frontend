import React, { useEffect, useState } from "react";
import UserAcademicCard from "./UserAcademicCard";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../services/firebase";

function UserProfileAcademicContainer({ user }) {
  const [academics, setAcademics] = useState([]);

  console.log(academics);

  const fetchUserAcademics = () => {
    try {
      const unsubscribe = onSnapshot(
        query(collection(db, "users", `${user?.id}`, "academics")),
        (querySnapshot) => {
          const _academics = [];
          querySnapshot.forEach((doc) => {
            _academics.push({ id: doc.id, data: doc.data() });
          });

          setAcademics(_academics);
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
    const unsubscribe = fetchUserAcademics();
    return () => unsubscribe();
  }, [user]);

  return (
    <>
      {academics?.length === 0 ? (
        <div className="flex justify-center items-center min-h-[150px]">
          <p>No Academic Details Found!</p>
        </div>
      ) : (
        academics?.map(({ id, data }) => (
          <UserAcademicCard academic={data} id={id} key={id} />
        ))
      )}
    </>
  );
}

export default UserProfileAcademicContainer;
