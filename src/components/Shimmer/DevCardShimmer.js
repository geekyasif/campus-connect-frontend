import React from "react";

function DevCardShimmer() {
  return (
    <div >
      <div className="bg-gray-200 h-[150px] animate-none"></div>
      <div className="bg-gray-200 h-[20px] rounded-sm my-2"></div>
      <div className="bg-gray-200 h-[20px] rounded-sm my-2"></div>
      <div className="bg-gray-200 h-[30px] rounded-sm lg:w-[100px] lg:float-right lg:mx-2 mx-0 mb-2 lg:mb-0"></div>
      <div className="bg-gray-200 h-[30px] rounded-sm lg:w-[100px] lg:float-right"></div>
    </div>
  );
}

export default DevCardShimmer;
