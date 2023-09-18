import React from "react";
import Loader from "react-js-loader";

function AuthButton({ loading, title }) {
  return (
    <div>
      <br />
      <button
        className={`${
          loading ? "bg-indigo-400" : "bg-indigo-500"
        } text-white border rounded p-1 lg:p-2 w-full text-sm lg:text-base`}
        disabled={loading}
      >
        {loading ? <Loader size={25} /> : title}
      </button>
    </div>
  );
}

export default AuthButton;
