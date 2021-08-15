import React from "react";
import { Link } from "react-router-dom";

import MainTemplate from "../../template/MainTemplate/MainTemplate";

import classes from "./NotFoundPage.module.scss";

const NotFoundPage = () => (
  <MainTemplate>
    <div className={classes.container}>
      <h1>404</h1>
      <p>
        The link you are trying to visit may be broken or the <br /> page may
        have been removed.
      </p>
      <small>
        Visit the <Link to="/dashboard">home page</Link>
      </small>
    </div>
  </MainTemplate>
);

export default NotFoundPage;
