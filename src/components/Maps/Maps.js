import React from "react";
import "./Maps.css";

const Maps = ({ title, picture }) => {
  return (
    <div className="map">
      <img src={picture} />
      <p>{title}</p>
    </div>
  );
};

export default Maps;
