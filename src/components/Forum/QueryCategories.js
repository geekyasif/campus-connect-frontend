import React from "react";
import QueryCategory from "./QueryCategory";
import useCategories from "../../hooks/forum/useCategories";
import { Link, useLocation } from "react-router-dom";

function QueryCategories() {
  const { categories } = useCategories();
  const { pathname } = useLocation();

  return (
    <div className=" p-2 bg-white border">
      <p className="font-semibold border-b-2  mb-4 pb-2 ">Categories</p>

      <div className="flex flex-wrap">
        {categories.length === 0 &&
          Array(25)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-[30%] h-8 bg-gray-200 rounded  animate-pulse m-1"
              ></div>
            ))}

        {categories.length !== 0 && (
          <Link
            className={
              pathname === "/forum"
                ? "bg-indigo-500 inline-block text-white hover:bg-indigo-600 rounded text-xs border transition-all ease-in mr-1 mb-1 p-2"
                : "p-2 bg-white  hover:bg-gray-100 rounded text-xs border transition-all ease-in mr-1 mb-1 inline-block"
            }
            to={`/forum`}
          >
            Recent Queries
          </Link>
        )}

        {categories?.map((cat) => (
          <div className="" key={cat?.slug}>
            <QueryCategory cat={cat} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QueryCategories;
