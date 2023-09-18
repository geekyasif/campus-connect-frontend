import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/authSlice";
import devReducer from "./devSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dev: devReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
