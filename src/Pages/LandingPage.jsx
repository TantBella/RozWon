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
          <h1>interesting headline</h1>
          <p>Write something here</p>
          <div id="herolink">
            <Link to="/">
              Find out more <img id="arrow" alt="arrowbutton" src={Arrow} />
            </Link>
          </div>
        </div>
      </div>

      <div id="main">
        <p>
          RozWon Health helps private and public healthcare leaders make
          healthcare better, more affordable, and more accessible for millions
          of people around the world.
        </p>
        <hr className="line"></hr>
        <div id="image-container">
          <div class="image-wrapper">
            <img alt="stetoscope" src={MedicalPic3} />
            <div className="hov_text">Här kan man ha värdeord eller nåt</div>
          </div>
          <div class="image-wrapper">
            <img alt="stetoscope" src={MedicalPic1} />{" "}
            <div className="hov_text">Här kan man ha värdeord eller nåt</div>
          </div>
          <div class="image-wrapper">
            <img alt="stetoscope" src={MedicalPic2} />{" "}
            <div className="hov_text">Här kan man ha värdeord eller nåt</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
