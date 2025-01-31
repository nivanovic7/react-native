import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
