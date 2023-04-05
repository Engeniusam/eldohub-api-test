import React from "react";
import chuck__logo from "./chuck__logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__info">
        <img src={chuck__logo} alt="Chuck Norris API Logo" />
        <div className="header__right">
          <h1>Chuck Norris API Generator</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
