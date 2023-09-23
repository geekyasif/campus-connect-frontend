import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DevDetailsSidebar from "../../components/DevDetails/DevDetailsSidebar";
import DevDetailsContainer from "../../components/DevDetails/DevDetailsContainer";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebase";
import DevDetailShimmer from "../../components/Shimmer/DevDetailShimmer";

function DevDetails() {
  const { username } = useParams();
  const [devData, setDevData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const unsubscribe = onSnapshot(doc(db, "users", username), (doc) => {
        if (doc.exists()) {
          setDevData(doc.data());
        } else {
          setDevData({});
        }
      });
      return unsubscribe;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = fetchUserData();

    return () => unsubscribe;
  }, [username]);

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
    </div>
  );
}

export default DevDetails;
