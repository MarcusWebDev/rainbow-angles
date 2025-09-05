import { Link } from "react-router-dom";

import "./MapLink.scss";

const Maps = ({ to, title, image }) => {
  return (
    <Link className="MapLink" to={to}>
      <img src={image} />
      <p>{title}</p>
    </Link>
  );
};

export default Maps;
