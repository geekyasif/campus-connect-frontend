import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CommentBox from "../../components/Forum/CommentBox";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faClock,
  faComment,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import CommentContainer from "../../components/Forum/CommentContainer";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import Avatar from "react-avatar";
import { updateUserData } from "../../features/authSlice";
import toast from "react-hot-toast";

function QueryDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { user, authToken } = useSelector((state) => state.auth);
  const { category, username, id } = useParams();
  const [query, setQuery] = useState({});

  const fetchQueryDetails = async (category, username, id) => {
    const docRef = doc(db, "users", username);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let _data = {};
      docSnap.data().queries.forEach((query) => {
        if (id === query.id) {
          _data = {
            user: docSnap.data().personal_details,
            query: query,
          };
        }
      });
      setQuery(_data);
      setLoading(false);
    }
  };

  const handleDeleteQuery = async () => {
    try {
      const filteredQueries = user?.queries.filter((q) => q.id !== id);

      const userDocRef = doc(
        db,
        "users",
        user?.personal_details.email.split("@")[0]
      );

      await updateDoc(userDocRef, {
        queries: filteredQueries,
      });

      dispatch(updateUserData(user?.personal_details.email.split("@")[0]));
      toast.success("Query Deleted Successfully");
      navigate(-1);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchQueryDetails(category, username, id);
  }, [category, username, id]);

  return (
    <div className="w-full lg:w-[70%] md:w-[70%] flex-grow bg-white rounded shadow h-full">
      {loading && (
        <>
          <div className="bg-white  p-4 mb-4 rounded-lg animate-pulse">
            <div className="w-full h-12 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-[200px] bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
          </div>

          <div className="bg-white  p-4 mb-4 rounded-lg animate-pulse">
            <div className="w-full h-[200px] bg-gray-300 rounded mb-2"></div>
          </div>

          <div className="bg-white  p-4 mb-4 rounded-lg animate-pulse">
            <div className="w-full h-[100px] bg-gray-300 rounded mb-2"></div>
          </div>
          <div className="bg-white  p-4 mb-4 rounded-lg animate-pulse">
            <div className="w-full h-[100px] bg-gray-300 rounded mb-2"></div>
          </div>
        </>
      )}

      {!loading && (
        <>
          <div className="px-4 mt-4 flex justify-between">
            <button onClick={() => navigate(-1)}>
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="text-gray-500 text-xl"
              />
            </button>

            {query?.user?.username === user?.personal_details?.username && (
              <div className="flex justify-end items-center">
                <FontAwesomeIcon
                  onClick={handleDeleteQuery}
                  icon={faTrash}
                  width={12}
                  className="mx-2 text-red-600 cursor-pointer"
                />
                <Link
                  to={`/forum/edit/${query?.user?.username}/${query?.query?.id}`}
                >
                  <FontAwesomeIcon
                    icon={faPen}
                    width={12}
                    className="mx-2 text-indigo-500 cursor-pointer"
                  />
                </Link>
              </div>
            )}
          </div>
          <div className="p-4">
            <p className="font-semibold text-base lg:text-2xl">
              {query?.query?.title} |{" "}
              <span>
                {query?.query?.category.split("-").join(" ").toUpperCase()}
              </span>{" "}
            </p>
            <div className="flex">
              {query?.query?.tags?.split(",").map((tag, i) => (
                <Link
                  to={`/forum/tag/${tag}`}
                  className="px-2 text-xs border mr-2 rounded my-2"
                  key={i}
                >
                  {tag}
                </Link>
              ))}
            </div>
            <p className="text-sm lg:text-base text-gray-500 mb-2">
              {query?.query?.description}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center ">
                <Link
                  to={`/profile/${query?.user?.username}`}
                  className="flex items-center"
                >
                  {query?.user?.profile_url ? (
                    <img
                      alt="profile"
                      src={query?.user?.profile_url}
                      className="w-[20px] h-[20px] rounded-full"
                    />
                  ) : (
                    <Avatar
                      name={query?.user?.fullName}
                      round={true}
                      size={20}
                    />
                  )}
                  <p className="text-xs my-2 mx-2"> {query?.user?.username} </p>
                </Link>
                <FontAwesomeIcon icon={faClock} className="w-3 text-gray-600" />
                <p className="text-xs my-2 mx-2">
                  {query?.query?.datetime.slice(0, 24)}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-50 border p-2 px-4 mt-4">
              <p className="text-sm">
                {" "}
                <FontAwesomeIcon icon={faComment} /> Comments (
                {query?.query?.comments.length})
              </p>
            </div>
            {authToken ? (
              <CommentBox query={query} />
            ) : (
              <div className="text-center p-4">
                <Link
                  to="/login"
                  className="my-4 text-xs lg:text-sm rounded bg-indigo-500 text-white p-2 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  Login to comment
                </Link>
              </div>
            )}

            <CommentContainer comments={query?.comments} />
          </div>
        </>
      )}
    </div>
  );
}

export default QueryDetails;
