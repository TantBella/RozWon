import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logos/prel_logo.png";

const Header = () => {
  return (
    <>
      <div id="header">
        <div id="header-logo">
          <Link to="/">
            <img src={logo} id="header-logo" alt="RozWon logo" />
          </Link>
        </div>
        <div class="navbar">
          <Link to="/"> Home</Link>
          <Link to="/aboutRozWon">About us</Link>
          <Link to="/contactUs">Connect with us </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
