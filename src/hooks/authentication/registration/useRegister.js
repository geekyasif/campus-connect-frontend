import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import registrationSchema from "../../../validators/authentication/registration/registrationSchema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../services/firebase";
import { getCurrentUser, getUsername } from "../../../utils/functions";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { setAuthToken, setUser } from "../../../features/authSlice";

function useRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const RegisterApi = async (payload) => {
    try {
      setLoading(true);
      // destructuring the payload
      // Validating the Request
      const { error } = registrationSchema.validate(payload);
      if (error) {
        return error;
      }

      // registering the user
      const { user } = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );

      // extracting the username from email
      const username = getUsername(payload.email);
      const { email, photoURL, emailVerified, uid, phoneNumber } =
        getCurrentUser();

      // Initial State of user to store in firebase firestore
      const body = {
        uid: uid,
        fullName: payload.fullName,
        username: username,
        email: email,
        is_email_verified: emailVerified,
        profile_url: photoURL,
        phone: phoneNumber,
        city: "",
        resume: "",
        skills: "",
        expertise_in: "",
        about: "",
        is_online: true,
        open_for_collab: false,
        show_email: false,
        show_phone: false,
      };

      console.log(body);

      // storing the user data into firebase firestore
      await setDoc(doc(db, "users", username), body);
      dispatch(setAuthToken(user?.accessToken));
      dispatch(setUser({ id: username, user: body }));
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (getCurrentUser()) {
      navigate("/find-dev");
    }
  }, []);
  return { RegisterApi, loading };
}

export default useRegister;
