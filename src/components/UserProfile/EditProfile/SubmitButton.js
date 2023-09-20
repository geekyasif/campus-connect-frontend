import React from "react";

function SubmitButton({ loading }) {
  return (
    <div className="flex justify-center">
      <button
        className={` ${
          loading ? "bg-indigo-400" : "bg-indigo-500"
        } border  px-6 py-2 rounded text-white hover:bg-indigo-600 transition-all`}
        type="submit"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
}

export default SubmitButton;
