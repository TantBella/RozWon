import React from "react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <>
      <div id="AboutUs">
        <h2>About Us</h2>
        <p>
          Rozwon Consultants LLC is a minority-owned health services provider,
          registered in Massachusetts on August 25, 2022. We focus on improving
          health outcomes for marginalized and underserved populations.
        </p>
        <h3>Our Approach</h3>
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

        <h4>Need healthcare staffing support in Boston?</h4>
        <p>📍 138 Pleasants St, Pembroke, MA 02359</p>
        <p>📞 Call us at 857-237-8782 or</p>
        <p>📩 Email us at info@rozwon.com</p>
      </div>
    </>
  );
};

export default AboutUsPage;
