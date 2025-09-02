import React from "react";
import { connect } from "react-redux";
import "./MapGuide.css";
import Carousel from "../Carousel/Carousel";
import { toTargetSlide } from "../../containers/actions";
import { scroller } from "react-scroll";

const scrollTo = (target) => {
  scroller.scrollTo(target, {
    duration: 800,
    smooth: "easeInOut",
    offset: -72,
  });
};

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
  headerPicture,
  header,
  text,
  pictures,
  floorStart,
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
      scrollTimeoutId = setTimeout(() => scrollTo("anglesHeader"), 1000);
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
        className="headerContainer"
        style={{
          background: `url(${headerPicture}) center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <h1>{header.toUpperCase()}</h1>
      </div>
      <Carousel
        pictures={pictures}
        text={text}
        floorStart={floorStart}
        floorNames={floorNames}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MapGuide);
