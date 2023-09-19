import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { comment } from "postcss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../services/firebase";

const post = {
  postId: 1,
  // user: {
  //   username: "",
  //   profile_pic: "",
  //   fullName: "",
  // },
  title: "thi sis title",
  tags: "React, hook, nextjs",
  description: "THi sis descripito",
  category: "Frontend Development",
  date: "",
  comments: [
    {
      commentId: 1,
      comment: "this is comment",
      user: {},
      replies: [
        {
          repId: "",
          rep: "",
          comment: "",
          user: {},
        },
      ],
    },
  ],
};

const QueryBox = ({ handleIsModalOpen }) => {
  const { user } = useSelector((state) => state.auth);
  const { username, fullName, profile_url } = user?.personal_details;

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const _query = {
      user: {
        username,
        fullName,
        profile_url,
      },
      title: query.title,
      description: query.description,
      tags: query.tags,
      category: query.category,
      comments: [],
    };

    console.log(_query);
  };

  return (
    <div className="mx-auto p-6 bg-white rounded shadow ">
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
            <option value="">Select a Category</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="CSS">CSS</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-xs"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QueryBox;
