import React from "react";
import HeroPic from "../images/medical011.jpg";
import LandingPagePic from "../images/medical02.jpg";
import Arrow from "../images/icons/arrow02.png";
import { Link } from "react-router-dom";
import IconGrid from "../components/IconGrid";
import "../styling/landingPage.css";

const LandingPage = () => {
  return (
    <>
      <img
        alt="healthcare professionals"
        id="landingpage-pic"
        src={LandingPagePic}
      />
      <div className="div-odd">

        <div className="max-width inner-odd">
          <h3 id="strong-p">
            Looking for qualified healthcare professionals in the Massachusetts
            area?
          </h3>
          <p style={{ marginTop: 0 }}>
            Rozwon Health is a premier provider of healthcare and laboratory
            support services, offering a comprehensive suite of solutions
            designed to optimize healthcare operations and enhance patient
            outcomes. Our expert team of clinical support consultants works
            diligently to deliver tailored solutions for hospitals, health
            systems, and healthcare facilities. Our focus is on improving
            operational efficiency, implementing clinical best practices, and
            ensuring the highest standards of care for both patients and staff.
            We are dedicated to helping healthcare organizations achieve optimal
            outcomes and elevate the quality of their services.
          </p>
          <p>
            We provide experienced nurses, doctors, and medical staff for
            hospitals, clinics, and healthcare facilities across Massachusetts.
            Whether you need short-term coverage, locum tenens, or long-term
            staffing solutions, our team ensures reliable, professional care for
            your patients.
          </p>
        </div>
      </div>
      <section id="hero-section">
        <span className="max-width" id="hero">
          <div id="hero-container">
            <h1>Medical Staffing Agency in Massachusetts </h1>
            <p>
              Rozwon Health advances public health through outreach, direct
              care, and strategic support for underserved and minority
              communities. We deliver culturally respectful, community-based
              services—focused on disease prevention, behavioral health,
              substance use support, and personalized care planning—to improve
              health outcomes and reduce barriers to care.
            </p>
            <div id="herolink">
              <Link to="/aboutRozWon" className="aboutus-button">
                Find out more <img id="arrow" alt="arrowbutton" src={Arrow} />
              </Link>
            </div>
          </div>
          <div id="hero-image">
            <img alt="3 healthcare professionals" src={HeroPic} />
          </div>
        </span>
      </section>
      <span className="max-width">
        {/* <hr className="line"></hr> */}
        <div className="div-odd ">
          <IconGrid />
        </div>
        {/* <hr className="line"></hr> */}
      </span>
    </>
  );
};

export default LandingPage;
