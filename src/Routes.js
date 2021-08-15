import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import JokesPage from "./pages/Jokes/JokesPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import LogoutPage from "./pages/Logout/LogoutPage";
import Auth from "./hoc/Auth";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={Auth(DashboardPage)} />
        <Route exact path="/jokes" component={Auth(JokesPage)} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route path="*" component={Auth(NotFoundPage)} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
