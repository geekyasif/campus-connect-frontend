import React from "react";

function AuthInput({ label, type, name, value, onChange }) {
  return (
    <div>
      <label className="text-sm lg:text-base">{label}</label>
      <br />
      <input
        type={type}
        name={name}
        className="form-control w-full focus:outline-none rounded p-2 my-2 placeholder:text-xs placeholder:lg:text-sm text-xs lg:text-sm"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default AuthInput;
