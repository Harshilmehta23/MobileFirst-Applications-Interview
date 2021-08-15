import React from "react";

import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import "./MainTemplate.scss";

const MainTemplate = ({ children }) => (
  <div className="template main-template">
    <Header />
    <div className="main-template-content">{children}</div>
    <Footer className="main-template-footer" />
  </div>
);

export default MainTemplate;
