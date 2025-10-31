import React from "react";
import "../styling/iconGrid.css";
import icon1 from "../images/icons/icons8-health-50.png";
import icon2 from "../images/icons/icons8-emergency-50(1).png";
import icon3 from "../images/icons/icons8-find-user-male-50.png";
import icon4 from "../images/icons/icons8-phlebotomy-50.png";
import icon5 from "../images/icons/icons8-pass-fail-50.png";
import icon6 from "../images/icons/icons8-vaccine-50.png";
import icon7 from "../images/icons/icons8-trust-50.png";
import icon8 from "../images/icons/icons8-housing-50.png";
import icon9 from "../images/icons/icons8-mental-health-50.png";
import icon10 from "../images/icons/icons8-distribution-50.png";
// import icon8 from "../images/icons/icons8-urina-analysis-50.png";

const icons = [
  {
    src: icon1,
    title: "Local Health Initiative",
    desc: "Community clinics, outreach events, and health education tailored to local needs.",
  },
  {
    src: icon2,
    title: "Emergency  Preparedness & Response",
    desc: " Rapid testing, logistics, PPE distribution, and outbreak planning.",
  },
  {
    src: icon3,
    title: "Contact Tracing",
    desc: "Confidential case investigation and exposure notification support.",
  },
  {
    src: icon4,
    title: "Phlebotomy",
    desc: "On-site bloodwork, nursing assessments, and medical assistant support.",
  },
  {
    src: icon5,
    title: "STI Testing & Counseling",
    desc: "Confidential testing, counseling and linkage to carefor HIV, Hep C, Syphilis, Gonorrhea and Chlamydia.",
  },
  {
    src: icon6,
    title: "Vaccinations",
    desc: "Flu, COVID-19, and mpox vaccination clinics and outreach.",
  },
  {
    src: icon7,
    title: "Substance Abuse Treatment & SSP or SAT",
    desc: " Medication management, counseling, and syringe services with harm-reduction focus.",
  },
  {
    src: icon8,
    title: "Housing Assistance & Shelter Support ",
    desc: "Referrals and short-term support to stabilize housing and access services.",
  },
  {
    src: icon9,
    title: "Crisis & Mental Health Management",
    desc: " Crisis intervention, brief stabilization, and referral to ongoing behavioral health care",
  },
  {
    src: icon10,
    title: "Narcan Access & Distribution",
    desc: "Free naloxone kits, training, and community distribution points.",
  },
  // {
  //   src: icon8,
  //   title: "Urine Analysis",
  //   desc: "Rapid tests that help monitor health conditions.",
  // },
];

const IconGrid = () => {
  return (
    <>
      <div id="icon-grid">
        {icons.map((icon, index) => (
          <div key={index} className="icon-container">
            <img src={icon.src} alt={icon.title} />
            <p className="icon-title">{icon.title}</p>
            <div className="hover-desc">{icon.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconGrid;
