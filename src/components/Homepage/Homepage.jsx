import React from "react";
import Carousel from "react-multi-carousel";

import "./HomePage.scss";
import "react-multi-carousel/lib/styles.css";

import scrollTo from "../../utils/scrollTo";
import MapLink from "../MapLink";

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const HomePage = () => {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="HomePage">
      <div className="multi-carousel-container">
        <Carousel
          className="multi-carousel"
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={7000}
        >
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/Bank.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/Border.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/Chalet.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/ClubHouse.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/Coastline.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/Consulate.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/Hereford.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/KafeDostoyevsky.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/Oregon.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/Skyscraper.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/ThemePark.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
          <div
            className="multi-carousel-image"
            style={{
              background: `url(${require("../../images/Villa.jpg")}) center no-repeat`,
              backgroundSize: "cover",
            }}
          />
        </Carousel>
        <h1 className="multi-carousel-text">GAIN THE EDGE ON YOUR OPPONENTS</h1>
      </div>
      <div className="about-text">
        <h2>ABOUT</h2>
        <p>
          Rainbow Angles is a website designed to feature angles you can create
          and hold to watch over vital parts of the maps and catch your
          opponents off guard.
        </p>
      </div>
      <div className="map-list-container">
        <h1>Current Ranked Maps</h1>
        <div className="map-list">
          <MapLink
            to="/bank/"
            title="Bank"
            image={require("../../images/Bank.jpg")}
          />
          <MapLink
            to="/border/"
            title="Border"
            image={require("../../images/Border.jpg")}
          />
          <MapLink
            to="/chalet/"
            title="Chalet"
            image={require("../../images/Chalet.jpg")}
          />
          <MapLink
            to="/club_house/"
            title="Club House"
            image={require("../../images/ClubHouse.jpg")}
          />
          <MapLink
            to="/coastline/"
            title="Coastline"
            image={require("../../images/Coastline.jpg")}
          />
          <MapLink
            to="/consulate/"
            title="Consulate"
            image={require("../../images/Consulate.jpg")}
          />
          <MapLink
            to="/hereford/"
            title="Hereford"
            image={require("../../images/Hereford.jpg")}
          />
          <MapLink
            to="/kafe_dostoyevsky/"
            title="Kafe Dostoyevsky"
            image={require("../../images/KafeDostoyevsky.jpg")}
          />
          <MapLink
            to="/oregon/"
            title="Oregon"
            image={require("../../images/Oregon.jpg")}
          />
          <MapLink
            to="/skyscraper/"
            title="Skyscraper"
            image={require("../../images/Skyscraper.jpg")}
          />
          <MapLink
            to="/theme_park/"
            title="Theme Park"
            image={require("../../images/ThemePark.jpg")}
          />
          <MapLink
            to="/villa/"
            title="Villa"
            image={require("../../images/Villa.jpg")}
          />
        </div>
      </div>
      <div className="branding">
        <h1>MarcusWebDev</h1>
        <ul>
          <a href="mailto:RainbowAnglesOfficial@gmail.com">Contact</a>
          <a href="https://github.com/MarcusWebDev">Github</a>
        </ul>
        <a
          className="back-to-top"
          onClick={() => scrollTo({ target: "multi-carousel-container" })}
        >
          Back to the Top
        </a>
      </div>
    </div>
  );
};

export default HomePage;
