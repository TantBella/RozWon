import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <hr className="line"></hr>
        <p>LOGO HERE</p>
        <Link>Contact Us</Link>
        <Link>Privacy & Cookies</Link>
        <Link>Contact Us</Link>
        <hr className="line"></hr>
        <p>© TB Tech & Design</p>
      </div>
    </>
  );
};

export default Footer;
