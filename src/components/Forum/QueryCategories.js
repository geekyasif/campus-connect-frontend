import React, { useEffect, useState } from "react";
import { queryCategory } from "../../services/queryData";
import QueryCategory from "./QueryCategory";

function QueryCategories() {
  const [categories, setCategories] = useState([]);

  const fetchQueryCategories = () => {
    setCategories(queryCategory);
  };

  useEffect(() => {
    fetchQueryCategories();
  }, []);

  return (
    <div className=" p-2 bg-white border">
         <p className="font-semibold border-b-2  mb-4 pb-2 ">Categories</p>
      {categories?.map((cat) => (
        <QueryCategory cat={cat} key={cat.id} />
      ))}
    </div>
  );
}

export default QueryCategories;
