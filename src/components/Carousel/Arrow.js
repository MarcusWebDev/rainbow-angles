import React from "react";
import "./Arrow.css";

const Arrow = ({ direction, onClick }) => {
  return (
    <div
      className="arrowContainer"
      onClick={() => {
        onClick();
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
    >
      <div className={`slide-arrow ${direction}`}></div>
    </div>
  );
};

export default Arrow;
