import React, { useEffect, useState } from "react";
import QueryCard from "./QueryCard";
import { interviewData } from "../../services/InterviewData";
import QueryBox from "./QueryBox";
import { queryData } from "../../services/queryData";
import AddQueryModal from "./AddQueryModal";

function ForumContainer() {
  const [queries, setQueries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleIsModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  const fetchQueries = () => {
    setQueries(queryData);
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  return (
    <div className="w-full lg:w-[78%] bg-white rounded h-full">
      <div className="bg-gray-100  flex justify-between border items-center p-2 flex-wrap lg:flex-nowrap">
        <p className="px-1 lg:px-2 font-bold lg:mb-0 mb-2 w-full">
          Recent Queries
        </p>
        <div className="flex justify-between w-full lg:justify-end">
          <input
            type="text"
            placeholder="Search topics..."
            className="p-1 rounded placeholder:text-sm focus:outline-none mr-3 px-2 bg-white"
          />
          <button
            className="bg-red-500 rounded px-4 py-1 text-white text-sm"
            onClick={handleIsModalOpen}
          >
            New +
          </button>
        </div>
      </div>
      {queries?.map((data) => (
        <div key={data.queryId}>
          <QueryCard {...data} />
        </div>
      ))}{" "}
      {isModalOpen && <AddQueryModal handleIsModalOpen={handleIsModalOpen} />}
    </div>
  );
}

export default ForumContainer;
