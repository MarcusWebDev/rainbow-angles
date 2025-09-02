import "./Dots.scss";

const Dots = ({ pictures, index, navigateToTargetSlide }) => {
  let className = "dot";
  const dotsArray = pictures.map((picture, i) => {
    index === i ? (className += " dot-active") : (className = "dot");
    return (
      <div
        className={className}
        key={i}
        onClick={() => {
          navigateToTargetSlide(i);
          for (
            let j = 0;
            j < document.getElementsByClassName("imageID").length;
            j++
          ) {
            document
              .getElementsByClassName("imageID")
              [j].setAttribute("style", "display: none;");
            document
              .getElementsByClassName("boxID")
              [j].setAttribute("style", "display: flex;");
          }
        }}
      ></div>
    );
  });
  return <div className="dotsContainer">{dotsArray}</div>;
};

export default Dots;
