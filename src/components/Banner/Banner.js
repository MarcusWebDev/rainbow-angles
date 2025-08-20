import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link as scrollLink,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const scrollTo = (target) => {
  scroller.scrollTo(target, {
    duration: 800,
    delay: 0,
    smooth: "easeInOut",
    offset: -72,
  });
  console.log("it worked");
};

const urlCheck = (location) => {
  if (window.location.href == "https://rainbowangles.com/#/") {
    scrollTo(location);
  } else {
    window.location.href = "https://rainbowangles.com/#/";
    scrollTo(location);
  }
};

const Banner = () => {
  return (
    <div className="bannerContainer">
      <Link to="/">
        <p>RAINBOW ANGLES</p>
      </Link>
      <nav>
        <a onClick={() => urlCheck("about")}>ABOUT</a>
        <a onClick={() => urlCheck("mapListContainer")}>MAPS</a>
        <a onClick={() => urlCheck("branding")}>CONTACT</a>
      </nav>
    </div>
  );
};

export { Banner, scrollTo };
