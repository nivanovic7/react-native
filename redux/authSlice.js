import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      console.log(action.payload.user);
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
