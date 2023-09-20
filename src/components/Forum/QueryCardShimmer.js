import React from "react";

function QueryCardShimmer() {
  return (
    <div className="w-full block rounded p-2 border">
      <div className="h-[20px] w-full animate-pulse block bg-gray-200 my-2"></div>
      <div className="flex gap-2">
        <div className="animate-pulse bg-gray-200 block h-[20px] w-[10%]"></div>
        <div className="animate-pulse bg-gray-200 block h-[20px] w-[10%]"></div>
        <div className="animate-pulse bg-gray-200 block h-[20px] w-[10%]"></div>
      </div>

      <div className="animate-pulse bg-gray-200 block h-[60px] w-full my-2"></div>

      <div className="flex  gap-2">
        <div className="animate-pulse bg-gray-200 block h-[20px] w-[20%]"></div>
        <div className="animate-pulse bg-gray-200 block h-[20px] w-[20%]"></div>
      </div>
    </div>
  );
}

export default QueryCardShimmer;
