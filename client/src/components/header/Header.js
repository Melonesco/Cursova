import React from "react";
import { Link } from "react-router-dom";
import Schedule from "../../images/icons/schedule.ico";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Schedule} alt="" />
      </Link>
      <div className="header-nav">
        <Link to="/">Увійти як адмін</Link>
      </div>
    </div>
  );
};

export default Header;
