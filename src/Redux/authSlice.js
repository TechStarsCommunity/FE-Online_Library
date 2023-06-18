import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    message: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    logoutSuccess: (state, action) => {
      state.message = action.payload;
      state.currentUser = null;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginfailure, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;
