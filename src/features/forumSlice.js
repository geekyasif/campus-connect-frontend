import { createSlice } from "@reduxjs/toolkit";

export const forumSlice = createSlice({
  name: "dev",
  initialState: {
    devs: [],
  },
  reducers: {
    setDevs(state, action) {
      state.devs = action.payload;
    },
    getDevs(state) {
      return state.devs;
    },
  },
});

export const { setDevs, getDevs } = forumSlice.actions;
export default forumSlice.reducer;
