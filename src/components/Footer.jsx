import React from "react";
import { Link } from "react-router-dom";
import TbtbLogo from "../images/logos/tbtd_logo.png";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <hr className="line"></hr>
        <div id="footer-links" className=" footer-grid">
          <Link>Contact Us</Link>
          <Link>Privacy & Cookies</Link>
          <Link>Contact Us</Link>
        </div>
        <div className="footer-grid">
          <p>
            Rozwon Consultants LLC is a minority-owned health services provider,
            registered in Massachusetts on August 25, 2022.{" "}
          </p>{" "}
          <p>
            We focus on improving health outcomes for marginalized and
            underserved populations.
          </p>
        </div>
        {/* <hr className="line"></hr> */}
        <h3>LOGO HERE?</h3>
        <span id="copyright">
          <p>
            © TBTD <br></br>2025
          </p>
          <img alt="webdev logo" src={TbtbLogo} />
        </span>
      </div>
    </>
  );
};

export default Footer;
