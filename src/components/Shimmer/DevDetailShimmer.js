import React from "react";

function DevDetailShimmer() {
  return (
    <div className="w-full flex flex-row animate-pulse flex-grow gap-4 p-4" >
      <div className="rounded border w-[30%] h-[400px] bg-white pt-4">
        <div className=" flex flex-col items-center">
          <div className="bg-gray-200 w-[150px] h-[150px] rounded-full"></div>
          <div className="bg-gray-200 w-[200px] h-[20px] rounded-sm mt-2"></div>
          <div className="bg-gray-200 w-[200px] h-[20px] rounded-sm my-1"></div>
        </div>
      </div>
      <div className="w-full border bg-white flex-grow">
        <div className="h-[30]  inline-block w-full p-4">
          <div className="bg-gray-200 w-full h-[30px] rounded-sm my-2"></div>
          <div className="bg-gray-200 w-full h-[30px] rounded-sm my-2"></div>
          <div className="bg-gray-200 w-full h-[30px] rounded-sm my-2"></div>
          <div className="bg-gray-200 w-full h-[30px] rounded-sm my-2"></div>
          <div className="bg-gray-200 w-full h-[150px] rounded-sm my-2"></div>
          <div className="bg-gray-200 w-full h-[150px] rounded-sm my-2"></div>
        </div>
      </div>
    </div>
  );
}

export default DevDetailShimmer;
