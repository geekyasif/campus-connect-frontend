import React, { useState } from "react";
import AuthInput from "../../components/AuthenticationForm/AuthInput";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../services/firebase";
import { Toaster, toast } from "react-hot-toast";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = async () => {
    try {
      if (email) {
        await sendPasswordResetEmail(auth, email);
        toast.success("Password reset link is sent to your email!");
        setEmail("");
      } else {
        toast.error("Email is required!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="container mx-auto p-8 m-8 flex items-center justify-center lg:h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-gray-100 flex flex-col justify-center md:w-1/3 mx-auto p-4 rounded">
        <AuthInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <button
          className="bg-indigo-600 text-white  p-2 rounded my-2"
          onClick={handleSendEmail}
        >
          Send Email
        </button>
        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
