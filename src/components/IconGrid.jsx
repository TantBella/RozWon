import React from "react";
import icon1 from "../images/icons/icons8-find-user-male-50.png";
import icon2 from "../images/icons/icons8-health-50.png";
import icon3 from "../images/icons/icons8-pass-fail-50.png";
import icon4 from "../images/icons/icons8-phlebotomy-50.png";
import icon5 from "../images/icons/icons8-housing-50.png";
import icon6 from "../images/icons/icons8-distribution-50.png";
import icon7 from "../images/icons/icons8-mental-health-50.png";
import icon8 from "../images/icons/icons8-urina-analysis-50.png";
import icon9 from "../images/icons/icons8-vaccine-50.png";
import icon10 from "../images/icons/icons8-trust-50.png";
import icon11 from "../images/icons/icons8-emergency-50(1).png";

const IconGrid = () => {
  return (
    <>
      <div id="icon-grid">
        <img src={icon1} alt="contact tracing Icon" />
        <img src={icon2} alt="Local health initiative Icon" />
        <img src={icon3} alt="STI testing Icon" />
        <img src={icon4} alt="Phlebotomy Icon" />
        <img src={icon5} alt="Housing Icon" />
        <img src={icon6} alt="Narcan- Access and Distribution Icon" />
        <img src={icon7} alt="Mental Health Icon" />
        <img src={icon8} alt="Urine Analysis Icon" />
        <img src={icon9} alt="Vaccinations Icon" />
        <img src={icon10} alt="Substance abuse treatment Icon" />
        <img src={icon11} alt="Emergency response Icon" />
      </div>
    </>
  );
};

export default IconGrid;
