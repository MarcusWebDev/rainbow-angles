import "./Banner.scss";
import { Link } from "react-router-dom";
import scrollTo from "../../utils/scrollTo";

const urlCheck = (location) => {
  if (window.location.href === "https://rainbowangles.com/#/") {
    scrollTo({ target: location });
  } else {
    window.location.href = "https://rainbowangles.com/#/";
    scrollTo({ target: location });
  }
};

const Banner = () => {
  return (
    <div className="Banner">
      <Link to="/">
        <p>RAINBOW ANGLES</p>
      </Link>
      <nav>
        <a onClick={() => urlCheck("aboutText")}>ABOUT</a>
        <a onClick={() => urlCheck("mapListContainer")}>MAPS</a>
        <a onClick={() => urlCheck("branding")}>CONTACT</a>
      </nav>
    </div>
  );
};

export default Banner;
