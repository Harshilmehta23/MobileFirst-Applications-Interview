import React from "react";
import BlockUi from "react-block-ui";

import { classNames } from "../../../utils";

import classes from "./Login.module.scss";

const Login = ({
  isSignUpPage,
  setIsSignUpPage,
  loading,
  loginInputs,
  loginInputChangeHandler,
  onLoginFormSubmit,
  signUpInputs,
  signUpInputChangeHandler,
  onSignUpFormSubmit,
  error,
}) => (
  <BlockUi
    tag="div"
    blocking={loading}
    className={classNames(
      classes.container,
      `${isSignUpPage ? classes.rightPanelActive : ""}`
    )}
  >
    {!isSignUpPage && (
      <div
        className={classNames(classes.formContainer, classes.loginContainer)}
      >
        <form onSubmit={onLoginFormSubmit} className={classes.form}>
          <h1 className={classes.title}>Login</h1>
          <input
            name="userName"
            type="text"
            placeholder="User name"
            className={classes.input}
            value={loginInputs.userName}
            onChange={loginInputChangeHandler}
          />
          {error.userName.length > 0 && (
            <span className={classes.error}>{error.userName}</span>
          )}
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={classes.input}
            value={loginInputs.password}
            onChange={loginInputChangeHandler}
          />
          {error.password.length > 0 && (
            <span className={classes.error}>{error.password}</span>
          )}
          <label className={classes.rememberMe}>
            <input
              name="rememberMe"
              type="checkbox"
              className={classes.rememberTitle}
              checked={loginInputs.rememberMe}
              onChange={loginInputChangeHandler}
            />{" "}
            Remember me
          </label>
          <button className={classes.button} type="submit">
            Login
          </button>
        </form>
      </div>
    )}
    {isSignUpPage && (
      <div
        className={classNames(classes.formContainer, classes.signUpContainer)}
      >
        <form onSubmit={onSignUpFormSubmit} className={classes.form}>
          <h1 className={classes.title}>Create Account</h1>
          <input
            name="userName"
            type="text"
            placeholder="User name"
            className={classes.input}
            value={signUpInputs.userName}
            onChange={signUpInputChangeHandler}
          />
          {error.userName.length > 0 && (
            <span className={classes.error}>{error.userName}</span>
          )}
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={classes.input}
            value={signUpInputs.password}
            onChange={signUpInputChangeHandler}
          />
          {error.password.length > 0 && (
            <span className={classes.error}>{error.password}</span>
          )}

          <button className={classes.button}>Sign Up</button>
        </form>
      </div>
    )}
    <div className={classes.overlayContainer}>
      <div className={classes.overlay}>
        {isSignUpPage && (
          <div
            className={classNames(classes.overlayPanel, classes.overlayLeft)}
          >
            <h1 className={classes.title}>Welcome Back!</h1>
            <p className={classes.para}>
              To keep connected with us please login with your personal info
            </p>
            <button
              className={classNames(classes.button, classes.ghost)}
              id="login"
              onClick={() => setIsSignUpPage(false)}
            >
              Login
            </button>
          </div>
        )}
        {!isSignUpPage && (
          <div
            className={classNames(classes.overlayPanel, classes.overlayRight)}
          >
            <h1 className={classes.title}>Hello, Friend!</h1>
            <p className={classes.para}>
              Enter your personal details and start journey with us
            </p>
            <button
              className={classNames(classes.button, classes.ghost)}
              id="signUp"
              onClick={() => setIsSignUpPage(true)}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  </BlockUi>
);

export default Login;
