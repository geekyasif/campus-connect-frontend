import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setAuthToken, setUser } from "../features/authSlice";

function useFirebaseLogin() {
  const dispatch = useDispatch();

  const firebaseLogin = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const docRef = collection(db, "users");
      const q = query(
        docRef,
        where("__name__", "==", user?.email.split("@")[0])
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        dispatch(setUser(doc.data()));
      });

      dispatch(setAuthToken(user?.accessToken));
    } catch (error) {
      return error.code;
    }
  };

  return { firebaseLogin };
}

export default useFirebaseLogin;
