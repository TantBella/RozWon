import React from "react";
import MedicalPic1 from "../images/medicine-uniform-healthcare.jpg";
import MedicalPic2 from "../images/medical07.png";
import MedicalPic3 from "../images/medical01.jpg";
import Arrow from "../images/icons/arrow02.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div id="hero">
        <div id="hero-container">
          <h1>Medical Staffing Agency in Massachusetts </h1>
          {/* <p>Nurses & Doctors on Demand / Hire Nurses & Doctors </p> */}
          {/* <p> We provide highly
            qualified nurses and doctors for hospitals and clinics in Boston and
            Massachusetts. Flexible healthcare staffing solutions.
          </p>
           */}
          <p>
            Looking for qualified healthcare professionals in the Massachusetts
            area? We provide experienced nurses, doctors, and medical staff for
            hospitals, clinics, and healthcare facilities across Massachusetts.
            Whether you need short-term coverage, locum tenens, or long-term
            staffing solutions, our team ensures reliable, professional care for
            your patients.
          </p>
          <div id="herolink">
            <Link to="/">
              Find out more <img id="arrow" alt="arrowbutton" src={Arrow} />
            </Link>
          </div>
        </div>
      </div>

      <div id="main">
        <p>
          Rozwon Health advances public health through outreach, direct care,
          and strategic support for underserved and minority communities. We
          deliver culturally respectful, community-based services—focused on
          disease prevention, behavioral health, substance use support, and
          personalized care planning—to improve health outcomes and reduce
          barriers to care.
        </p>

        <hr className="line"></hr>
        {/* <div container="images"> */}
        <div id="image-container">
          <div class="image-wrapper">
            <img alt="stetoscope" src={MedicalPic3} />
            <div className="hov_text"> Community-first </div>
          </div>
          <div class="image-wrapper">
            <img alt="stetoscope" src={MedicalPic1} />{" "}
            <div className="hov_text"> Low-barrier access </div>
          </div>
          <div class="image-wrapper">
            <img alt="stetoscope" src={MedicalPic2} />{" "}
            <div className="hov_text"> Integrated care</div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default LandingPage;
