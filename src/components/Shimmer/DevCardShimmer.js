import React from "react";

function DevCardShimmer() {
  return (
    <div className="border shadow m-2 p-4 rounded bg-white lg:w-[48%] md:w-full">
      <div className="bg-gray-200 h-[150px] animate-none"></div>
      <div className="bg-gray-200 h-[20px] rounded-sm my-4"></div>
      <div className="bg-gray-200 h-[20px] rounded-sm my-4"></div>
      <div className="bg-gray-200 h-[30px] rounded-sm w-[100px] float-right mx-2"></div>
      <div className="bg-gray-200 h-[30px] rounded-sm w-[100px] float-right"></div>
    </div>
  );
}

export default DevCardShimmer;
