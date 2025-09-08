import React from "react";
import { useDispatch } from "react-redux";

import "./MapGuide.scss";

import { navigateToSlide } from "../../slices/carouselSlice";
import scrollTo from "../../utils/scrollTo";
import Carousel from "../Carousel";

const MapGuide = ({
  header,
  headerImage,
  floorStartingIndices,
  floorNames,
  images,
  descriptions,
}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Not using react-scroll's delay here because it will scroll the page to where it was when the scroll call first occurred and do the scroll
    // animation from there. This approach will allow us to scroll to the header from the current position when the time to scroll comes.
    const scrollTimeoutId = setTimeout(
      () => scrollTo({ target: "header" }),
      1000,
    );

    window.scrollTo(0, 0);
    dispatch(navigateToSlide({ slideIndex: 0 }));

    return () => clearTimeout(scrollTimeoutId);
  }, [dispatch]);

  return (
    <div className="MapGuide">
      <div
        className="header-container"
        style={{
          background: `url(${headerImage}) center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <h1>{header.toUpperCase()}</h1>
      </div>
      <Carousel
        images={images}
        descriptions={descriptions}
        floorStartingIndices={floorStartingIndices}
        floorNames={floorNames}
      />
    </div>
  );
};

export default MapGuide;
