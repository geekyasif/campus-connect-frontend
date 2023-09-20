import React from "react";
import { useSelector } from "react-redux";
import QueryCard from "../../Forum/QueryCard";

function MyQueriesContainer() {
  const { user } = useSelector((state) => state.auth);

  console.log("queryes");

  return (
    <div>
      {!user?.queries && (
        <p className="text-center text-xs lg:text-base">No Queries Found!</p>
      )}
      {user?.queries?.map((data) => (
        <div key={data.id}>
          <QueryCard query={data} user={user.personal_details} />
        </div>
      ))}
    </div>
  );
}

export default MyQueriesContainer;
