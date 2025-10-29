import "../styling/contactUs.css";

import ReCaptchaBadge from "../components/ReCaptchaBadge";
import EmailForm from "../components/EmailForm";

const ContactPage = () => {
  return (
    <>
      <div className="div-odd">
        <div className="max-width">
          <EmailForm />
          <ReCaptchaBadge />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
