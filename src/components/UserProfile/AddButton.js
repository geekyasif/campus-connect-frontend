import React from "react";
import { ImPlus } from "react-icons/im";

function AddButton({ callback, element, title }) {
  return (
    <button
      className="text-sm text-blue-600 font-medium flex items-center gap-2"
      onClick={() => {
        callback(element, title);
      }}
    >
     <ImPlus/> {title}
    </button>
  );
}

export default AddButton;
