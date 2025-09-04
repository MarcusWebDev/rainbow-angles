import "./LightBox.scss";

const LightBox = ({ image, status, onClick }) => {
  return (
    <div
      className={`LightBox ${status === "on" ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="image-container">
        <img src={image} />
      </div>
    </div>
  );
};

export default LightBox;
