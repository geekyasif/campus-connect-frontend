import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DevDetailsSidebar from "../../components/DevDetails/DevDetailsSidebar";
import DevDetailsContainer from "../../components/DevDetails/DevDetailsContainer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import DevDetailShimmer from "../../components/Shimmer/DevDetailShimmer";

function DevDetails() {
  const { username } = useParams();
  const [devData, setDevData] = useState({});

  const fetchUserData = async () => {
    const docRef = doc(db, "users", username);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDevData(docSnap.data());
      console.log("Document data", docSnap.data());
    } else {
      console.log("Not found !");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [username]);

  return (
    <div className="container mx-auto my-4">
      {Object.keys(devData).length === 0 ? (
        <DevDetailShimmer />
      ) : (
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 p-2 lg:p-0">
          <DevDetailsSidebar user={devData} />
          <DevDetailsContainer user={devData} />
        </div>
      )}
    </div>
  );
}

export default DevDetails;
