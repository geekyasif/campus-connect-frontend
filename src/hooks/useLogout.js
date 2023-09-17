import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setAuthToken, setUser } from "../features/authSlice";

function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Logout = async () => {
    try {
      await signOut(auth);
      dispatch(setAuthToken(null));
      dispatch(setUser(null));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return Logout;
}

export default useLogout;
