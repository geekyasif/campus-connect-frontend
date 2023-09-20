import React, { useState } from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
import toast, { Toaster } from "react-hot-toast";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput"

function UserChangePassword() {
  const [password, setPassword] = useState("");

  const handleChangePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordFormData = async (e) => {
    e.preventDefault();

    try {
      if (password) {
        await updatePassword(auth.currentUser, password);
        setPassword("");
        toast.success("Password updated Successfully");
      } else {
        toast.error("Password field is required!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Password field is required!", error.message.toString());
    }
  };

  return (
    <div className="bg-white shadow p-2">
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleChangePasswordFormData}>
        <TextInput
          labelText="New Password"
          textType="password"
          placeholderText="New password"
          value={password}
          onChange={handleChangePasswordInput}
        />
        <SubmitButton />
      </form>
    </div>
  );
}

export default UserChangePassword;
