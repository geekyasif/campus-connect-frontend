import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  handleIsSideNavbarOpen,
  setUser,
  signup,
} from "../../features/authSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebase";
import { Toaster, toast } from "react-hot-toast";
import Loader from "react-js-loader";
import { doc, setDoc } from "firebase/firestore";
import { setAuthToken } from "../../features/authSlice";
import { v4 as uuid4 } from "uuid";
import AuthInput from "../../components/AuthenticationForm/AuthInput";
import AuthButton from "../../components/AuthenticationForm/AuthButton";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authToken } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
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
    try {
      setLoading(true);
      const { fullName, email, password, confirm_password } = userRegistration;
      if (
        fullName !== "" ||
        email !== "" ||
        password !== "" ||
        confirm_password !== ""
      ) {
        if (password === confirm_password) {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          const data = {
            personal_details: {
              fullName: userRegistration.fullName,
              username: user?.email.split("@")[0],
              email: user?.email,
              phone: "",
              city: "",
              profile_url: "",
              skills: "",
              expertise_in: "",
              about: "",
            },
            academics: {
              university_name: "",
              location: "",
              enrol_in_branch_name: "",
              year_of_passing: "",
              current_semester: "",
              current_year: "",
              enrolment_number: "",
              university_email: "",
            },
            social_links: {
              github: "",
              linkedin: "",
              leetcode: "",
              portfolio: "",
              hackerrank: "",
              codechef: "",
              geeksforgeek: "",
            },
            certificates: [],
            projects: [],
          };

          console.log(data);

          await setDoc(doc(db, "users", user?.email.split("@")[0]), data);

          dispatch(setAuthToken(user?.accessToken));
          dispatch(setUser(data));

          setUserRegistration({
            fullName: "",
            email: "",
            password: "",
            confirm_password: "",
          });
          toast.success("User registered successfully! Login to continue.");
          setLoading(false);
          navigate("/login", {
            state: "User registered successfully! Login to continue.",
          });
        } else {
          setLoading(false);
          toast.error("Password doesn't matched!");
        }
      } else {
        setLoading(false);
        toast.error("All fields are required!");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.code);
      console.log(error.message);
      toast.error(error.code);
    }
  };

  useEffect(() => {
    dispatch(handleIsSideNavbarOpen());
  }, []);

  if (authToken) {
    return navigate("/");
  }

  return (
    <div className=" container mx-auto p-8 m-8 h-full lg:h-screen">
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
