import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import DevCard from "../../components/DevCard/DevCard";
// import Users from '../../services/Data';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import Loader from "react-js-loader";
import DevCardShimmer from "../../components/Shimmer/DevCardShimmer";

function FindDev() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const _users = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      _users.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    setUsers(_users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto md:flex md:flex-row md:flex-wrap">
      {users.length === 0 &&
        Array(6)
          .fill(0)
          .map(() => <DevCardShimmer />)}
      {users.map(({ data }) => (
        <DevCard user={data} />
      ))}
    </div>
  );
}

export default FindDev;
