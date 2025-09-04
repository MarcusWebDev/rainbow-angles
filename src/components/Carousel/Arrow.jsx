import "./Arrow.scss";

const Arrow = ({ direction, onClick }) => {
  return (
    <div className="Arrow" onClick={onClick}>
      <div className={`slide-arrow ${direction}`}></div>
    </div>
  );
};

export default Arrow;
