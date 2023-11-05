import { faClock, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import Avatar from "react-avatar";
import { Link, useLocation } from "react-router-dom";
import { db } from "../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { updateUserData } from "../../features/authSlice";
import useUser from "../../hooks/user/useUser";
import { BiDotsVerticalRounded } from "react-icons/bi";

function QueryCard({ query, user, id }) {
  const { user: userQueries } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const user_id = pathname?.split("/")[2];
  const { user_id: current_user_id } = useUser();

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
    <div className="border rounded p-2">
      {current_user_id === user_id && (
        <div className="flex justify-end relative mb-2">
          <BiDotsVerticalRounded
            size={20}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
          {isMenuOpen && (
            <div className="flex flex-col justify-end bg-white border transition-all ease-in absolute top-5 right-2 rounded">
              <p className="mb-2 border-b-2 px-4 py-2 flex gap-2 items-center text-xs">
                <FontAwesomeIcon icon={faPen} />
                Edit
              </p>
              <p className="px-4 py-2 flex gap-2 items-center text-xs">
                <FontAwesomeIcon icon={faTrash} /> Delete
              </p>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between p-2">
        <Link
          to={`/forum/${query?.category.split(" ").join("-").toLowerCase()}/${
            user.username
          }/${query?.id}`}
          className="font-semibold text-sm lg:text-base"
        >
          {query.title} |{" "}
          <span>{query?.category.split("-").join(" ").toUpperCase()}</span>{" "}
        </Link>
      </div>
      <div className="flex px-2">
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
        className="text-xs lg:text-sm text-gray-500 mb-2 px-2"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: 2,
        }}
      >
        {query.description}
      </p>
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center">
          <Link to={`/profile/${user?.username}`} className="flex items-center">
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
