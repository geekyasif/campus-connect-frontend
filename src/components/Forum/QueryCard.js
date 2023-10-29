import { faClock, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { updateUserData } from "../../features/authSlice";

function QueryCard({ query, user, id }) {
  const { user: userQueries } = useSelector((state) => state.auth);
  const { currentUser } = getAuth();
  const dispatch = useDispatch();

  const handleDeleteQuery = async () => {
    try {
      const filteredQueries = userQueries?.queries.filter(
        (q) => q.id !== query.id
      );

      const userDocRef = doc(
        db,
        "users",
        userQueries?.personal_details.email.split("@")[0]
      );

      await updateDoc(userDocRef, {
        queries: filteredQueries,
      });

      dispatch(
        updateUserData(userQueries?.personal_details.email.split("@")[0])
      );
      toast.success("Query Deleted Successfully");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="border-b-2 my-2 lg:px-4 py-2">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex justify-between">
        <Link
          to={`/forum/${query?.category.split(" ").join("-").toLowerCase()}/${
            user.username
          }/${query?.id}`}
          className="font-semibold text-sm lg:text-base"
        >
          {query.title} |{" "}
          <span>{query?.category.split("-").join(" ").toUpperCase()}</span>{" "}
        </Link>

        {user?.email === currentUser?.email && (
          <div className="flex justify-end items-center">
            <FontAwesomeIcon
              onClick={handleDeleteQuery}
              icon={faTrash}
              width={10}
              className="mx-2 text-red-600 cursor-pointer"
            />
            <Link to={`/forum/edit/${user?.username}/${query?.id}`}>
              <FontAwesomeIcon
                icon={faPen}
                width={10}
                className="mx-2 text-indigo-500 cursor-pointer"
              />
            </Link>
          </div>
        )}
      </div>
      <div className="flex">
        {query?.tags?.split(",").map((tag) => (
          <Link
            to={`/forum/tag/${tag}`}
            className="px-2 text-xs border mr-2 rounded my-2"
            key={tag}
          >
            {tag}
          </Link>
        ))}
      </div>
      <p
        className="text-xs lg:text-sm text-gray-500 mb-2"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: 2,
        }}
      >
        {query.description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to={`/find-dev/${user?.username}`}
            className="flex items-center"
          >
            {user?.profile_url ? (
              <img
                alt="profile"
                src={user?.profile_url}
                className="w-[20px] h-[20px] rounded-full"
              />
            ) : (
              <Avatar name={user?.fullName} round={true} size={20} />
            )}
            <p className="text-xs my-2 mx-2"> {user?.username} </p>
          </Link>
          <FontAwesomeIcon icon={faClock} className="w-3 text-gray-600" />
          {/* <p className="text-xs my-2 mx-2">{query?.datetime.slice(0, 24)}</p> */}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default QueryCard;
