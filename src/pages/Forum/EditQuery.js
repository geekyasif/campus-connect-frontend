import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import useCategories from "../../hooks/forum/useCategories";
import toast from "react-hot-toast";
import { updateUserData } from "../../features/authSlice";

function EditQuery() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authToken, user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const { username, id } = useParams();
  const { categories } = useCategories();
  const [query, setQuery] = useState({});
  const [updatedQuery, setUpdatedQuery] = useState({
    title: "",
    description: "",
    tags: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedQuery({
      ...updatedQuery,
      [name]: value,
    });
  };

  const fetchQueryDetails = async () => {
    try {
      const docRef = doc(db, "users", username);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let _data = {};
        docSnap.data().queries.forEach((q) => {
          if (id === q.id) {
            _data = {
              user: docSnap.data().personal_details,
              query: q,
            };
          }
        });

        setUpdatedQuery(_data.query);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Someting went wrong!");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchQueryDetails();
  }, [username, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const oldQueries = user?.queries?.filter((q) => q.id !== id);
      const newUpdatedQueries = [...oldQueries, updatedQuery];

      const userDocRef = doc(
        db,
        "users",
        user?.personal_details.email.split("@")[0]
      );

      await updateDoc(userDocRef, {
        queries: newUpdatedQueries,
      });

      dispatch(updateUserData(user?.personal_details.email.split("@")[0]));

      toast.success("Query updated successfully!");
      navigate(-1);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full lg:w-[78%] bg-white rounded p-4">
      <div className="mb-4 border-b-2 pb-2 flex justify-between">
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            className="text-gray-500 text-xl"
          />
        </button>
        <p className="font-bold text-base lg:text-xl">Edit Your Query</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-bold text-sm"
          >
            Title
          </label>
          <small>
            Be specific and imagine you’re asking a question to another person
          </small>
          <input
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            type="text"
            id="title"
            name="title"
            className="w-full border rounded px-3 py-2 placeholder:text-xs"
            value={updatedQuery?.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold text-sm"
          >
            Description
          </label>
          <small>
            Include all the information someone would need to answer your
            question
          </small>
          <textarea
            id="description"
            name="description"
            className="w-full border rounded px-3 py-2"
            rows="5"
            value={updatedQuery?.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-gray-700 font-bold text-sm"
          >
            Tags
          </label>
          <small>
            Add up to 5 tags to describe what your question is about
          </small>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="e.g. (xml typescript wordpress)"
            className="w-full border rounded px-3 py-2 placeholder:text-xs"
            value={updatedQuery?.tags}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold text-sm mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full border rounded px-3 py-2 text-xs"
            value={updatedQuery?.category}
            onChange={handleInputChange}
            required
          >
            <option value="others">-- select category --</option>
            {categories?.map((cat) => (
              <option key={cat.id} value={cat.slug}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-xs items-center"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditQuery;
