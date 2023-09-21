import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

// FormComponent Import
import AuthInput from "../../components/AuthenticationForm/AuthInput";
import AuthButton from "../../components/AuthenticationForm/AuthButton";

// custom hook import
import useFirebaseLogin from "../../hooks/useFirebaseLogin";
import useLoading from "../../hooks/useLoading";
import useSideNavbar from "../../hooks/navbar/useSideNavbar";
import { handleIsSideNavbarOpen } from "../../features/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  // custom hooks
  const { startLoading, stopLoading, loading } = useLoading();
  const { firebaseLogin } = useFirebaseLogin();

  const handleUserCredential = (e) => {
    const { name, value } = e.target;
    setUserCredential({
      ...userCredential,
      [name]: value,
    });
  };

  // Handling Login Form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    startLoading();
    const res = await firebaseLogin(
      userCredential.email,
      userCredential.password
    );
    if (res) {
      toast.error(res);
    }
    stopLoading();
  };

  useEffect(() => {
    dispatch(handleIsSideNavbarOpen());
  }, []);

  // Redirect to login page if token is null
  if (authToken) {
    return navigate("/find-dev");
  }

  return (
    <div className="container mx-auto p-8 m-8 h-full lg:h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-gray-100 flex flex-col justify-center md:w-1/3 mx-auto p-4 rounded">
        <h2 className="text-center font-bold text-base lg:text-xl  text-indigo-600">
          Login
        </h2>
        <form onSubmit={handleFormSubmit} autoComplete="on">
          <div className="form-group">
            <AuthInput
              label="Email"
              type="email"
              name="email"
              value={userCredential.email}
              onChange={handleUserCredential}
            />
          </div>
          <div className="form-group">
            <AuthInput
              label="Password"
              type="password"
              name="password"
              value={userCredential.password}
              onChange={handleUserCredential}
            />
          </div>
          <AuthButton loading={loading} title="Login" />
        </form>
        <Link
          to="/forgot-password"
          className="text-right text-xs lg:text-sm text-indigo-500 my-2"
        >
          Forgot Password?
        </Link>
        <p className="text-center mt-1 text-sm lg:text-base">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-500 ">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
