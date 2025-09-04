import "./Dots.scss";

const Dots = ({ images, index, navigateToTargetSlide }) => {
  return (
    <div className="Dots">
      {images.map((_, i) => {
        return (
          <div
            className={`dot ${index === i ? "active" : ""}`}
            key={i}
            onClick={() => {
              navigateToTargetSlide(i);
            }}
          />
        );
      })}
    </div>
  );
};

export default Dots;
