import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DevDetailsSidebar from "../../components/DevDetails/DevDetailsSidebar";
import DevDetailsContainer from "../../components/DevDetails/DevDetailsContainer";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import DevDetailShimmer from "../../components/Shimmer/DevDetailShimmer";
import Chat from "../../components/chat/Chat";
import { useSelector } from "react-redux";

function DevDetails() {
  const { isChatOpen } = useSelector((state) => state.auth);
  const location = useLocation();
  const user = location?.state?.user;
  const [devData, setDevData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      setLoading(true);

      // Assuming 'users' is the name of your collection
      const userRef = collection(db, "users");
      const q = query(
        userRef,
        where("personal_details.username", "==", user.personal_details.username)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setDevData(doc.data());
        });
      } else {
        setDevData({});
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = fetchUserData();
    return () => unsubscribe;
  }, [user]);

  return (
    <div className="container mx-auto my-4">
      {loading && <DevDetailShimmer />}
      {Object.keys(devData).length === 0 ? (
        <p>No Data Found !</p>
      ) : (
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 p-2 lg:p-0">
          <DevDetailsSidebar user={devData} />
          <DevDetailsContainer user={devData} />
        </div>
      )}
      {isChatOpen && <Chat user={user} />}
    </div>
  );
}

export default DevDetails;
