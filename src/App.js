import React from "react";
import { ToastContainer } from "react-toastify";

import Routes from "./Routes";

import "react-block-ui/style.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App = () => (
  <div className="App">
    <ToastContainer id="forToast" />
    <Routes />
  </div>
);

export default App;
