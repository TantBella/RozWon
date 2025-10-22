import React from "react";
import { Link } from "react-router-dom";
import "../styling/aboutUs.css";
import ImageGrid from "../components/ImageGrid";
import MedicalPic10 from "../images/medical010.jpg";

const AboutUsPage = () => {
  // const sections = [
  //   {
  //     title: "Who we are",
  //     text: `Rozwon Health advances public health through outreach, direct care, and strategic support
  //          for underserved and minority communities. Our services include disease prevention, behavioral health,
  //          substance abuse support, and personalized care planning—to improve health outcomes and reduce barriers to care.`,
  //   },
  //   {
  //     title: "What we do",
  //     text: `We provide practical, accessible services both in the community and at private care locations.
  //          Our programs include medication management, harm reduction, mental health and substance abuse support,
  //          disease prevention, environmental health response, and assistance for non-communicable conditions.`,
  //   },
  //   {
  //     title: "Our Mission Statement",
  //     text: `Rozwon Health is committed to providing accessible, high-quality laboratory support personnel,
  //          including phlebotomists, healthcare counselors, vaccinators, home health aids and visiting nurses.`,
  //   },
  //   {
  //     title: "Our Vision",
  //     text: `Rozwon Health aspires to become a respected, statewide leader known for pioneering solutions in healthcare.`,
  //   },
  // ];

  return (
    <>
      <div className=" about-us">
        <div className="div-odd">
          <ImageGrid />
        </div>
        {/* <h1>About Us</h1>
        <p>
          Rozwon Consultants LLC is a minority-owned health services provider,
          registered in Massachusetts on August 25, 2022. We focus on improving
          health outcomes for marginalized and underserved populations.
        </p> */}
        {/* <hr className="line" /> */}
        <div className="max-width">
          <h2>Who we are</h2>
          <p>
            Rozwon Health advances public health through outreach, direct care,
            and strategic support for underserved and minority communities. Our
            services include disease prevention, behavioral health, substance
            abuse support, and personalized care planning—to improve health
            outcomes and reduce barriers to care.
          </p>
        </div>
        <div className="div-odd">
          <div className="max-width">
            <h2>What we do</h2>
            <p>
              We provide practical, accessible services both in the community
              and at private care locations. Our programs include medication
              management, harm reduction, mental health and substance abuse
              support, disease prevention, environmental health response, and
              assistance for non-communicable conditions. Working closely with
              public health agencies and community partners, we create care
              plans that support long-term wellness
            </p>
          </div>
        </div>
        <div className="max-width">
          <h2>Our Mission Statement</h2>
          <p>
            Rozwon Health is committed to providing accessible, high-quality
            laboratory support personnel, including phlebotomists, healthcare
            counselors, vaccinators, home health aids and visiting nurses. We
            aim to assist healthcare organizations in enhancing patient care and
            operational efficiency.
          </p>
        </div>
        <div className="div-odd">
          <div className="max-width">
            <h2>Our Vision </h2>
            <p>
              Rozwon Health aspires to become a respected, statewide leader
              known for pioneering solutions in healthcare. We are committed to
              assembling the industry's top talent to create innovative,
              practical, and cost-effective outcomes, positioning Rozwon Health
              as the preferred partner for organizations seeking to streamline
              their operations and improve performance.
            </p>{" "}
          </div>
          {/* {sections.map((section, index) => (
          <div
            key={index}
            className={`text-block ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <h2 className="max-width">{section.title}</h2>
            <p className="max-width">{section.text}</p>
          </div>
        ))} */}
          {/* <hr className="line"></hr> */}
        </div>
        <div className="max-width"></div>
        <h2>Our Approach</h2>
        <ul>
          <li>
            Community-first: We design services with local input and cultural
            competence.
          </li>
          <li>
            Low-barrier access: Mobile outreach, flexible hours, and
            partnerships to reduce barriers.
          </li>
          <li>
            Integrated care: Behavioral, medical, and social supports
            coordinated in one plan.
          </li>
          <li>
            Data-driven & ethical: We use best practices to protect privacy and
            measure outcomes.
          </li>
        </ul>
      </div>
      <div className="div-odd">
        <div className="max-width">
          {/* <hr className="line"></hr> */}
          <h1> Health, Community, Care</h1>
        </div>
      </div>
      <div className="max-width about-flex">
        {/* <hr className="line"></hr> */}
        <span id="image-partners">
          <img alt="stetoscope" src={MedicalPic10} />
        </span>
        <span>
          <h2>Our Partners</h2>
          <p>Trusted partners include:</p>
          <ul>
            <li>CDC</li>
            <li>AIDS Project Worcester</li>
            <li>Worcester Department of Public Health</li>
            <li>Mass Health</li>
            {/* en bild bredvid listan */}
          </ul>
        </span>
      </div>
      <div className="div-odd">
        <div className="max-width">
          {/* <hr className="line" /> */}
          <div>
            {/* lägga dem i tre rutor med skugga */}
            <h2>Need healthcare staffing support in Boston?</h2>
            <p>📍 138 Pleasants St, Pembroke, MA 02359</p>
            <p>📞 Call us at 857-237-8782 or</p>
            <p>📩 Email us at info@rozwon.com</p>
          </div>{" "}
        </div>
        {/* <hr className="line"></hr> */}
      </div>
    </>
  );
};

export default AboutUsPage;
