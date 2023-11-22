import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeSideNavbar } from "../../features/authSlice";
import { Toaster, toast } from "react-hot-toast";
import AuthInput from "../../components/AuthenticationForm/AuthInput";
import AuthButton from "../../components/AuthenticationForm/AuthButton";
import useRegister from "../../hooks/authentication/registration/useRegister";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, RegisterApi } = useRegister();
  const [userRegistration, setUserRegistration] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleUserRegistration = (e) => {
    const { name, value } = e.target;
    setUserRegistration({
      ...userRegistration,
      [name]: value,
    });
  };

  const handleRegistrationFormData = async (e) => {
    e.preventDefault();
    const error = await RegisterApi(userRegistration);
    if (error) {
      console.log(error);
      toast.error(error.toString());
      return;
    }

    setUserRegistration({
      fullName: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  useEffect(() => {
    dispatch(closeSideNavbar(false));
  }, []);

  return (
    <div className=" container mx-auto p-8 m-8 h-full flex justify-center items-center lg:h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-gray-100 flex flex-col justify-center md:w-1/3 mx-auto p-4 rounded">
        <h2 className="text-center text-base lg:text-xl  text-indigo-600 font-bold">
          Register
        </h2>
        <form onSubmit={handleRegistrationFormData}>
          <div className="form-group">
            <AuthInput
              label="Full Name"
              type="text"
              name="fullName"
              value={userRegistration.fullName}
              onChange={handleUserRegistration}
            />
          </div>

          <div className="form-group">
            <AuthInput
              label="Email"
              type="email"
              name="email"
              value={userRegistration.email}
              onChange={handleUserRegistration}
            />
          </div>
          <div className="form-group">
            <AuthInput
              label="Password"
              type="password"
              name="password"
              value={userRegistration.password}
              onChange={handleUserRegistration}
            />
          </div>
          <br />
          <div className="form-group">
            <AuthInput
              label="Confirm Password"
              type="password"
              name="confirm_password"
              value={userRegistration.confirm_password}
              onChange={handleUserRegistration}
            />
          </div>
          <AuthButton loading={loading} title="Register" />
        </form>
        <p className="text-center mt-2 text-sm lg:text-base">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
