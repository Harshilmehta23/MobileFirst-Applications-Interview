import React from "react";
import { Link } from "react-router-dom";

import MainTemplate from "../../template/MainTemplate/MainTemplate";
import classes from "./DashboardPage.module.scss";

const DashboardPage = () => (
  <MainTemplate>
    <div className={classes.container}>
      <h1>Why 🙁 </h1>
      <h1>
        Visit <Link to="jokes">Jokes</Link> page and 😀
      </h1>
    </div>
  </MainTemplate>
);

export default DashboardPage;
