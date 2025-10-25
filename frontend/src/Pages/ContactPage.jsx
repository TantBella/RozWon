import React, { useState } from "react";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL || "";

const ContactPage = () => {
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

    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank's for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again later.");
    }
  }

  return (
    <>
      <div id="ContactUs">
        <h3>Contact Us </h3>
        <form onSubmit={handleSubmit}>
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
          <br />
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
          <br />
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Send message</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
