import { Link } from "react-router-dom";

const DigitalStatementInfo = () => {
  return (
    <div className="max-width">
      <p>
        In the spirit of this commitment, we have ongoing efforts to meet WCAG
        version 2.1 level AA criteria.
      </p>
      <p>
        If you need additional assistance, please{" "}
        <Link
          to="/contactUs"
          style={{ textDecoration: "none", textTransform: "lowercase" }}
        >
          contact us
        </Link>
        .
      </p>
    </div>
  );
};

export default DigitalStatementInfo;
