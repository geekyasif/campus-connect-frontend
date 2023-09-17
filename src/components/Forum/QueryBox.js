import React, { useState } from "react";

const QueryBox = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);

  const handleTagChange = (e) => {
    const selectedTags = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setTags(selectedTags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process the form submission here
    console.log({ title, body, category, tags });
  };

  return (
    <div className="mx-auto p-6 bg-white rounded shadow mb-4">
      <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
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
            className="w-full border rounded px-3 py-2 placeholder:text-xs"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-700 font-bold text-sm">
            Body
          </label>
          <small>
            Include all the information someone would need to answer your
            question
          </small>
          <textarea
            id="body"
            className="w-full border rounded px-3 py-2"
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-gray-700 font-bold text-sm">
            Tags
          </label>
          <small>
            Add up to 5 tags to describe what your question is about
          </small>
          <input
            type="text"
            id="title"
            placeholder="e.g. (xml typescript wordpress)"
            className="w-full border rounded px-3 py-2 placeholder:text-xs"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            className="w-full border rounded px-3 py-2 text-xs"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a Category</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="CSS">CSS</option>
            {/* Add more category options as needed */}
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
