import React from "react";
import QueryCard from "./QueryCard";
import { interviewData } from "../../services/InterviewData";
import QueryBox from "./QueryBox";

function ForumContainer() {
  return (
    <div className="w-full lg:w-[70%] flex-grow bg-white rounded">
      <QueryBox/>
      <div className="bg-gray-100  flex justify-end py-2 border">
        <input
          type="text"
          placeholder="Search topics..."
          className="p-1 rounded placeholder:text-sm focus:outline-none mr-3 px-2 bg-white"
        />
        {/* <button className="bg-red-500 rounded px-2 text-white text-sm">
          New +
        </button> */}
      </div>
      <div>
        {interviewData.map((data) => (
          <QueryCard {...data} />
        ))}{" "}
      </div>
    </div>
  );
}

export default ForumContainer;
