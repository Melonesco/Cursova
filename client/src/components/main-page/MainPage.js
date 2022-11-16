import React from "react";
import Wave from "../../images/backgrounds/wave5.svg";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main">
      <img src={Wave} alt="" />
      <div className="main__block">
        <div className="main__block-link">
          <h2>Розклад факультетів</h2>
          <Link to="/schedule">Подивитися розклад</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
