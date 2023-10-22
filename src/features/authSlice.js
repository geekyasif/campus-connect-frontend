import { createSlice } from "@reduxjs/toolkit";
import { db } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const initialState = {
  user: null,
  loading: false,
  error: null,
  authToken: null,
  isSideNavbarOpen: false,
  isChatOpen: false,
  userChat: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
    },
    closeSideNavbar: (state, action) => {
      state.isSideNavbarOpen = action.payload;
    },
    handleIsSideNavbarOpen: (state) => {
      state.isSideNavbarOpen = !state.isSideNavbarOpen;
    },
    setOpenChatBox: (state) => {
      state.isChatOpen = true;
    },
    setCloseChatBox: (state) => {
      state.isChatOpen = false;
    },
    setUserChat: (state, action) => {
      state.userChat = action.payload;
    },
  },
});

export const {
  setUser,
  setLoading,
  setError,
  clearError,
  logout,
  setAuthToken,
  handleIsSideNavbarOpen,
  closeSideNavbar,
  setOpenChatBox,
  setCloseChatBox,
  setUserChat
} = authSlice.actions;

export const updateUserData = (username) => async (dispatch) => {
  try {
    const docRef = collection(db, "users");
    const q = query(docRef, where("__name__", "==", username));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      dispatch(setUser(doc.data()));
    });
  } catch (error) {
    console.log(error);
  }
};
export default authSlice.reducer;
