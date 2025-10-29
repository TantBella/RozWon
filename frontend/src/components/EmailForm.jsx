import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ReCaptchaBadge from "../components/ReCaptchaBadge";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const EmailForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!executeRecaptcha) {
      alert("reCAPTCHA not ready, please try again later.");
      return;
    }
    const token = await executeRecaptcha("contact_form");

    const response = await fetch(`${API_URL}/api/send-mail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, captchaResponse: token }),
    });

    if (response.ok) {
      alert("Thank's for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again later.");
    }
  }

  return (
    <div id="ContactUs">
      <h2>Contact Us </h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="contact-form">
          <label>
            Your e-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="contact-form">
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" className="contactform-button">
          Send message
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
