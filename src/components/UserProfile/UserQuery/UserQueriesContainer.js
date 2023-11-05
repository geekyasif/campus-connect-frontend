import React from "react";
import QueryCard from "../../Forum/QueryCard";

function UserQueriesContainer({ user }) {
  return (
    <div>
      {!user?.user?.queries && (
        <p className="text-center text-xs lg:text-base">No Queries Found!</p>
      )}
      {user?.user?.queries?.map((data) => (
        <div key={data.id}>
          <QueryCard query={data} user={user?.user?.personal_details} />
        </div>
      ))}
    </div>
  );
}

export default UserQueriesContainer;
