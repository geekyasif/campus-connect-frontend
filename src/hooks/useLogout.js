import { useNavigate } from "react-router-dom";
import { auth, db } from "../services/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken, setUser } from "../features/authSlice";
import { doc, updateDoc } from "firebase/firestore";

function useLogout() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleUpdateUserOnlineStatus() {
    const username = user?.personal_details?.username;
    const docRef = doc(db, "users", username);
    await updateDoc(docRef, {
      is_online: false,
    });
  }

  const Logout = async () => {
    try {
      handleUpdateUserOnlineStatus();
      await signOut(auth);
      dispatch(setAuthToken(null));
      dispatch(setUser(null));
      navigate("/login");
    } catch (error) {
      throw new Error("Something went wrong!")
    }
  };

  return Logout;
}

export default useLogout;
