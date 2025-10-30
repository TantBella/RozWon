import React, { useState } from "react";
import "../styling/header.css";
import { Link } from "react-router-dom";
import logo from "../images/logos/prel_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header">
      <div>
        <Link to="/" onClick={closeMenu}>
          <img id="header-logo" src={logo} alt="RozWon logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu} className="navbar-link">
          Home
        </Link>
        <Link to="/aboutRozWon" onClick={closeMenu} className="navbar-link">
          About us
        </Link>
        <Link to="/contactUs" onClick={closeMenu} className="navbar-link">
          Connect with us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
