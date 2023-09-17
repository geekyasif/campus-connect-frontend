import React from "react";

function AuthInput({label, type, name, value, onChange}) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type={type}
        name={name}
        className="form-control w-full focus:outline-none rounded p-2 my-2"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default AuthInput;
