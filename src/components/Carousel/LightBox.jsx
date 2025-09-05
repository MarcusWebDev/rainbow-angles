import "./LightBox.scss";

const LightBox = ({ image, onClick }) => {
  return (
    <div className={`LightBox ${image ? "active" : ""}`} onClick={onClick}>
      <div className="image-container">
        <img src={image} />
      </div>
    </div>
  );
};

export default LightBox;
