import React from "react";

function Thumbnail({ thumbnail, onChange }) {
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <div className="w-[350px] h-[200px] bg-gray-100 flex justify-center items-center rounded-sm cursor-pointer">
        <input
          type="file"
          className="opacity-0 absolute w-[350px] h-[200px] cursor-pointer"
          onChange={onChange}
        />
        {!thumbnail && "choose image*"}
        {thumbnail && (
          <img
            alt="profile"
            src={thumbnail}
            className="w-[350px] h-[200px] object-contain"
          />
        )}
      </div>
    </div>
  );
}

export default Thumbnail;
