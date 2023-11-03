import React from "react";

function TextInput({
  placeholderText,
  typeText,
  value,
  labelText,
  onChange,
  name,
}) {
  return (
    <div className="w-full">
      <label className="w-full text-sm lg:text-base">{labelText}</label>
      {typeText === "date" ? <br /> : <></>}
      <input
        className={
          typeText === "date"
            ? "bg-white p-2 my-2 w-full border rounded"
            : "border p-2 w-full my-2 rounded text-xs lg:text-sm"
        }
        type={typeText}
        placeholder={placeholderText}
        value={value}
        name={name}
        onChange={onChange}
        disabled={name === "email" || (name === "username" && true)}
      />
    </div>
  );
}

export default TextInput;
