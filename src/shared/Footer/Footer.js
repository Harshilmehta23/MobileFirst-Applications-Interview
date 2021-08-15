import React from "react";
import "./Footer.scss";

const Footer = ({ className }) => (
  <footer className={`footer ${className || ""}`}>
    <p>Copyright MobileFirst Applications © 2021 | All Rights Reserved </p>
  </footer>
);

export default Footer;
