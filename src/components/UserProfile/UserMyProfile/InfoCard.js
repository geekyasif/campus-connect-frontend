import React, { useState } from "react";

function InfoCard({ title, element, button }) {
  const [isReadMore, setIsReadMore] = useState(false);

  console.log(element);

  return (
    <div className="my-2 rounded bg-white border" id={`#about`}>
      <div className="p-4 flex justify-between items-center border-b-2">
        <p className="font-semibold">{title}</p>
        {button && button}
      </div>

      <div className="px-4 py-2 mt-2">
        {/* <p
          className={
            isReadMore
              ? "line-clamp-none h-full"
              : "line-clamp-3 h-[100px] overflow-hidden"
          }
        >
          
          <span>{isReadMore ? "" : "..."}</span>
        </p>
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="text-blue-500 text-sm"
        >
          {isReadMore ? "Read less" : "Read more"}
        </button> */}

        {element}
      </div>
    </div>
  );
}

export default InfoCard;
