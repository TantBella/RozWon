import CookieInfo from "../components/CookieInfo";
import PrivacyInfo from "../components/PrivacyInfo";

const PrivacyCookiePage = () => {
  return (
    <>
      <div>
        <div className="div-odd">
          <h1>Privacy & Cookies</h1>
        </div>
        <div>
          <PrivacyInfo />
        </div>
        <div className="div-odd">
          <CookieInfo />
        </div>
      </div>
    </>
  );
};

export default PrivacyCookiePage;
