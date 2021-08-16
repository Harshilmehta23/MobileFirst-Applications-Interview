import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { setToken, removeToken } from "../../../utils";
import api from "../../../utils/api";

export const userLogin = createAsyncThunk("userLogin", (loginInputs) =>
  api.post("/login", {
    // Email because json-server-auth requires email and password as key
    userName: loginInputs.userName,
    email: loginInputs.userName.replace(/\s+/g, "").concat("@mobilefirst.com"),
    password: loginInputs.password,
  })
);

export const userSignUp = createAsyncThunk("userSignUp", (signUpInputs) =>
  api.post("/register", {
    // Email because json-server-auth requires email and password as key
    userName: signUpInputs.userName,
    email: signUpInputs.userName.replace(/\s+/g, "").concat("@mobilefirst.com"),
    password: signUpInputs.password,
  })
);

const initialState = {
  loading: false,
  error: null,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout(state) {
      removeToken();
      localStorage.removeItem("userName");
      return {
        ...state,
        loading: false,
        user: {},
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(userLogin.fulfilled, (state, action) => {
        const data = action.payload && action.payload.data;
        const arg = action.meta && action.meta.arg;
        console.log(data, arg);
        setToken(data && data.accessToken);
        localStorage.setItem("rememberMe", arg.rememberMe);
        return {
          ...state,
          loading: false,
          user: {
            ...data,
            ...arg,
          },
          error: null,
        };
      })
      .addCase(userLogin.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
      .addCase(userSignUp.pending, (state, action) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(userSignUp.fulfilled, (state, action) => {
        const data = action.payload && action.payload.data;
        const arg = action.meta && action.meta.arg;
        setToken(data && data.accessToken);
        localStorage.setItem("userName", arg.userName);
        localStorage.setItem("rememberMe", false);
        return {
          ...state,
          loading: false,
          user: {
            ...data,
            ...arg,
          },
          error: null,
        };
      })
      .addCase(userSignUp.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export const { userLogout } = authSlice.actions;

export default authSlice.reducer;
