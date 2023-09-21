import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import uuid4 from "uuid4";
import useCategories from "../../hooks/forum/useCategories";
import { Link } from "react-router-dom";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { updateUserData } from "../../features/authSlice";
import toast, { Toaster } from "react-hot-toast";
import { db } from "../../services/firebase";

const QueryBox = ({ handleIsModalOpen }) => {
  const dispatch = useDispatch();
  const { authToken, user } = useSelector((state) => state.auth);
  const { categories } = useCategories();

  const [query, setQuery] = useState({
    title: "",
    description: "",
    tags: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuery({
      ...query,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (query.category === "") {
        toast.error("Category field is required!");
      } else {
        const _query = {
          id: uuid4(),
          title: query.title,
          description: query.description,
          tags: query.tags,
          category: query.category === "" ? "other" : query.category,
          datetime: `${new Date()}`,
          comments: [],
        };
        const userDocRef = doc(
          db,
          "users",
          user?.personal_details.email.split("@")[0]
        );
        await updateDoc(
          userDocRef,
          {
            queries: arrayUnion(_query),
          },
          { merge: true }
        );

        dispatch(updateUserData(user?.personal_details.email.split("@")[0]));
        toast.success("Query added successfully!");

        setQuery({
          title: "",
          description: "",
          tags: "",
          category: "",
        });
        handleIsModalOpen();
      }
    } catch (error) {
      toast.error("Something went wrong. Try again!");
    }
  };

  return (
    <div className="mx-auto p-6 bg-white rounded shadow ">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4">Ask a Question</h2>
        <button onClick={handleIsModalOpen}>
          <FontAwesomeIcon icon={faMultiply} />
        </button>
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
            value={query.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="body"
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
            value={query.description}
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
            value={query.tags}
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
            value={query.category}
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
          {authToken ? (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-xs items-center"
            >
              Submit
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-xs "
            >
              Login
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default QueryBox;
