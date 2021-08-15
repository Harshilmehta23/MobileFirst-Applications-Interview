import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/dashboard" className="logo">
          😃
        </Link>
        <nav>
          <Link to="/jokes">Jokes</Link>
          <Link to="/logout">Logout</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
