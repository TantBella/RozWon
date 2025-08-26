import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header">
        <div id="headerhome">
          <Link to="/">
            RozWon- Logo here
          </Link>
        </div>
        <div class="navbar">
          <Link to="/"> Home</Link>
          <Link to="/">About us</Link>
          <Link to="/">Connect with us </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
