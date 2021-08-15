import React from "react";

import Footer from "../../shared/Footer/Footer";
import "./LoginPageTemplate.scss";

const LoginPageTemplate = ({ children }) => (
  <div className="template login-page-template">
    <div className="login-page-template-content">{children}</div>
    <Footer />
  </div>
);

export default LoginPageTemplate;
