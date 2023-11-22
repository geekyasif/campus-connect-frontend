import { auth } from "../services/firebase";

export const getUsername = (email) => {
  return email.split("@")[0];
};

export const getCurrentUser = () => {
  return auth.currentUser;
};
