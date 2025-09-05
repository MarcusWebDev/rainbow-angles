import "./Dots.scss";

const Dots = ({ images, index, onClick }) => {
  return (
    <div className="Dots">
      {images.map((_, i) => {
        return (
          <div
            className={`dot ${index === i ? "active" : ""}`}
            key={i}
            onClick={() => {
              onClick(i);
            }}
          />
        );
      })}
    </div>
  );
};

export default Dots;
