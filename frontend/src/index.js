import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
    >
      {console.log("Recaptcha key:", process.env.REACT_APP_RECAPTCHA_SITE_KEY)}
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
