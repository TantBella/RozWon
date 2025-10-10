import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <>
      <div id="ContactUs">
        <h3>Contact Us </h3>
        <form>
          <label>
            Enter your name:
            <input type="text" />
            <button type="submit">Send</button>
          </label>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
