import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../services/Data";
import DevDetailsSidebar from "../../components/DevDetails/DevDetailsSidebar";
import DevDetailsContainer from "../../components/DevDetails/DevDetailsContainer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import DevDetailShimmer from "../../components/Shimmer/DevDetailShimmer";

function DevDetails() {
  const { username } = useParams();
  const [devData, setDevData] = useState({});

  // const fetchUserData = () => {
  //   const data = Data.filter(
  //     (user) => user?.personal_details.username === username
  //   );
  //   console.log("user data", data)
  //   setDevData(data[0]);
  // }

  // useEffect(() => {
  //     try{
  //       fetchUserData()
  //     }catch(err){
  //       console.err(err)
  //     }
  // }, []);

  // const email = "mdasif08737@gmail.com"

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
  }, []);

  console.log(devData);

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
