import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Login from "./Login";
import * as authActions from "../redux";
import { showNotification } from "../../../utils/notifications";
import { userNameValidation, passwordValidation } from "../../../utils";
import { removeToken } from "../../../utils";

const LoginContainer = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const [error, setError] = useState({ userName: "", password: "" });

  const dispatch = useDispatch();
  const history = useHistory();

  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    if (!rememberMe) {
      removeToken();
    }
  }, []);

  const [loginInputs, setLoginInputs] = useState({
    userName: "",
    password: "",
    rememberMe: false,
  });

  const [signUpInputs, setSignUpInputs] = useState({
    userName: "MobileFirstA",
    password: "Test1234",
  });

  const loginInputChangeHandler = (e) => {
    const input = e.target;
    const value = input.type === "checkbox" ? input.checked : input.value;
    setLoginInputs({
      ...loginInputs,
      [input.name]: value,
    });
  };

  const onLoginFormSubmit = (e) => {
    const { userName, password, rememberMe } = loginInputs;
    userValidation(
      e,
      userName,
      password,
      authActions.userLogin,
      "Login Successful",
      "Login Failed",
      rememberMe
    );
  };

  const signUpInputChangeHandler = (e) => {
    setSignUpInputs({
      ...signUpInputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSignUpFormSubmit = (e) => {
    const { userName, password } = signUpInputs;
    userValidation(
      e,
      userName,
      password,
      authActions.userSignUp,
      "SignUp Successful",
      "SignUp Failed"
    );
  };

  const userValidation = (
    event,
    userName,
    password,
    callback,
    successMessage,
    errorMessage,
    rememberMe
  ) => {
    event.preventDefault();

    if (!userNameValidation(userName)) {
      setError((prevState) => ({
        ...prevState,
        userName: "Name must be in alphabets only no spaces allowed",
      }));
      return;
    } else if (password.length !== 8 || !passwordValidation(password)) {
      setError((prevState) => ({
        ...prevState,
        password: "Password must be alphanumeric and 8 characters only",
      }));
      return;
    } else {
      setError({ userName: "", password: "" });
      dispatch(callback({ userName, password, rememberMe })).then((res) => {
        if (res.error) {
          return showNotification(errorMessage, "error", 3000, "top-right");
        }
        showNotification(successMessage, "success", 3000, "top-right");
        history.push("/dashboard");
      });
    }
  };

  return (
    <Login
      isSignUpPage={isSignUpPage}
      setIsSignUpPage={setIsSignUpPage}
      loginInputs={loginInputs}
      loginInputChangeHandler={loginInputChangeHandler}
      onLoginFormSubmit={onLoginFormSubmit}
      signUpInputs={signUpInputs}
      signUpInputChangeHandler={signUpInputChangeHandler}
      onSignUpFormSubmit={onSignUpFormSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default LoginContainer;
