import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const EmailForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  // const recaptchaRef = useRef(null);
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

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }
    // const token = recaptchaRef.current.getValue();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ ...formData, captchaResponse: captchaValue }),
    });
    // const response = await fetch(`${API_URL}/api/send-mail`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ...formData, captchaResponse: captchaValue }),
    // });

    if (response.ok) {
      alert("Thank's for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      // recaptchaRef.current.reset();
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
        {/* <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
        /> */}
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={(value) => setCaptchaValue(value)}
        />
        <button type="submit" className="contactform-button">
          Send message
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
