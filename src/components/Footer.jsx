import React from "react";
import "../styling/footer.css";
import { Link } from "react-router-dom";
import TbtbLogo from "../images/logos/tbtd_logo.png";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="footer-links" className=" footer-grid">
          <Link to="/privacypolicy">Privacy & Cookies</Link>
          <Link to="/contactUs">Contact Us</Link>
          <Link to="/digitalaccessibility">
            Digital Accessibility Statement
          </Link>
        </div>
        <div id="footer-text" className="footer-grid">
          <p>
            Rozwon Consultants LLC is a minority-owned health services provider,
            registered in Massachusetts on August 25, 2022.
          </p>
          <p>
            We focus on improving health outcomes for marginalized and
            underserved populations.
          </p>
        </div>

        <span id="copyright">
          <p>
            © TBTD <br></br>2025
          </p>
          <img style={{ padding: "1rem" }} alt="webdev logo" src={TbtbLogo} />
        </span>
      </div>
    </>
  );
};

export default Footer;
