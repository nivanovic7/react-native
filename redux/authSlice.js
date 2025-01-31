import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
