import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../../services/firebase";

function useDev() {
    
  const fetchDevs = async () => {
    const _users = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      _users.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return _users;
  };

  return { fetchDevs };
}

export default useDev;
