import "../styling/imageGrid.css";
import MedicalPic1 from "../images/medicine-uniform-healthcare.jpg";
import MedicalPic2 from "../images/medical07.png";
import MedicalPic3 from "../images/medical01.jpg";

const ImageGrid = () => {
  return (
    <>
      <div id="image-container">
        <div className="image-wrapper">
          <img alt="stetoscope" src={MedicalPic3} />
          <div className="hov_text"> Community-first </div>
        </div>
        <div className="image-wrapper">
          <img alt="stetoscope" src={MedicalPic1} />
          <div className="hov_text"> Low-barrier access </div>
        </div>
        <div className="image-wrapper">
          <img alt="stetoscope" src={MedicalPic2} />
          <div className="hov_text"> Integrated care</div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
