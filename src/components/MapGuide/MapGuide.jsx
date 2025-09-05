import React from "react";
import { connect } from "react-redux";
import "./MapGuide.scss";
import Carousel from "../Carousel";
import { toTargetSlide } from "../../containers/actions";
import scrollTo from "../../utils/scrollTo";

const mapStateToProps = (state) => {
  return {
    slideIndex: state.controlCarousel.slideIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToTargetSlide: (targetSlide) => {
      dispatch(toTargetSlide(targetSlide));
    },
  };
};

const MapGuide = ({
  navigateToTargetSlide,
  headerImage,
  header,
  text,
  images,
  floorStartingIndices,
  floorNames,
}) => {
  const [hasScrolled, setHasScrolled] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    if (!hasScrolled) {
      setHasScrolled(true);
    }
  }, [hasScrolled]);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    navigateToTargetSlide(0);
  }, []);

  React.useEffect(() => {
    let scrollTimeoutId;

    if (!hasScrolled) {
      scrollTimeoutId = setTimeout(
        () => scrollTo({ target: "anglesHeader" }),
        1000,
      );
    }

    return () => {
      clearTimeout(scrollTimeoutId);
    };
  }, [hasScrolled]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
        text={text}
        floorStartingIndices={floorStartingIndices}
        floorNames={floorNames}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MapGuide);
