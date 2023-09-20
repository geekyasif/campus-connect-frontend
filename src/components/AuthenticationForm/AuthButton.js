import React from "react";

function AuthButton({ loading, title }) {
  return (
    <button
      className={`${
        loading ? "bg-indigo-400" : "bg-indigo-500"
      } text-white border rounded p-1 lg:p-2 w-full text-sm lg:text-base mt-3 cursor-pointer relative h-10`}
      disabled={loading}
    >
      {loading ? (
        <div className="w-5 h-5 border-t-2 border-b-2 border-blue-100 rounded-full animate-spin absolute inset-0 m-auto "></div>
      ) : (
        title
      )}
    </button>
  );
}

export default AuthButton;
