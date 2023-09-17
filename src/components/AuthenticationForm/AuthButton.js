import React from "react";
import Loader from "react-js-loader";

function AuthButton({ loading, title }) {
  return (
    <div>
      <br />
      <button
        className={`${
          loading ? "bg-indigo-400" : "bg-indigo-500"
        } text-white border rounded p-2 w-full`}
        disabled={loading}
      >
        {loading ? <Loader size={25} /> : title}
      </button>
    </div>
  );
}

export default AuthButton;
