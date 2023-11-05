import React, { useEffect, useState } from "react";
import UserProjectCard from "./UserProjectCard";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../services/firebase";

function UserMyProfileProjectContainer({ user }) {
  const [projects, setProjects] = useState([]);
  const fetchUserProjects = () => {
    try {
      const unsubscribe = onSnapshot(
        query(collection(db, "users", `${user?.id}`, "projects")),
        (querySnapshot) => {
          const _projects = [];
          querySnapshot.forEach((doc) => {
            _projects.push({ id: doc.id, data: doc.data() });
          });

          setProjects(_projects);
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
    const unsubscribe = fetchUserProjects();

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="min-h-[140px]">
      {projects?.length === 0 ||
        (projects.length === undefined && (
          <div className="w-full my-auto">
            <p className="text-center">No Project found!</p>
          </div>
        ))}
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2">
        {projects?.map(({ id, data }) => (
          <UserProjectCard project={data} key={id} />
        ))}
      </div>
    </div>
  );
}

export default UserMyProfileProjectContainer;
