import React, { useEffect, useState } from "react";
import UserProfileTopContainer from "../../../components/UserProfile/UserProfileTopContainer";
import UserProfileBottomContainer from "../../../components/UserProfile/UserProfileBottomContainer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useLocation } from "react-router-dom";

function MyProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const username = location?.pathname?.split("/")[2];

  const fetchUserData = async () => {
    try {
      setLoading(true);

      // Assuming 'users' is the name of your collection
      const userRef = collection(db, "users");
      const q = query(
        userRef,
        where("personal_details.username", "==", username)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setUser({ id: doc.id, user: doc.data() });
        });
      } else {
        setUser({});
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <div className="container mx-auto lg:my-2 lg:p-0 p-2 relative">
      <UserProfileTopContainer user={user} />
      <UserProfileBottomContainer user={user} />
    </div>
  );
}

export default MyProfile;
