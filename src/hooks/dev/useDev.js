import { collection,  onSnapshot, query } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../services/firebase";

function useDev() {
  const [devsData, setDevsData] = useState([])
    
  const fetchDevs = async () => {
    const devData = await query(collection(db, "users"));
    const unsubscribe = onSnapshot(devData, (snapshot) => {
      const _data = []
      snapshot.forEach((doc) => {
        _data.unshift({
          id: doc.id,
          data: doc.data(),
        })
      });

      setDevsData(_data)
    });
    
    return unsubscribe;
  };

  return { fetchDevs, devsData };
}

export default useDev;
