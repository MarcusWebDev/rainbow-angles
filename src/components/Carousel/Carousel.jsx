import { connect } from "react-redux";
import { useOutletContext } from "react-router-dom";

import "./Carousel.scss";

import {
  lightBoxOff,
  lightBoxOn,
  nextSlide,
  prevSlide,
  toFloor,
  toTargetSlide,
} from "../../containers/actions";
import Scroll from "../Scroll";
import Arrow from "./Arrow.jsx";
import Dots from "./Dots.jsx";
import FloorTabs from "./FloorTabs.jsx";
import ImageBox from "./ImageBox.jsx";
import LightBox from "./LightBox.jsx";
import MobileFloorTabs from "./MobileFloorTabs.jsx";

const Carousel = ({
  images,
  slideIndex,
  text,
  floorStartingIndices,
  floorNames,
  lightBoxStatus,
  lightBoxImage,
  slideChangeNext,
  slideChangePrev,
  navigateToFloor,
  navigateToTargetSlide,
  turnOnLightBox,
  turnOffLightBox,
}) => {
  const { isDesktop } = useOutletContext();

  const shortToFull = {
    B: "Basement",
    "1st": "First Floor",
    "2nd": "Second Floor",
    "3rd": "Third Floor",
    "4th": "Fourth Floor",
  };
  const fullFloorNames = floorNames.map((name) => shortToFull[name]);

  return (
    <div className="Carousel">
      <h1 className="header">
        {fullFloorNames.map((_, i) => {
          if (i === 0) {
            if (slideIndex < floorStartingIndices[0]) {
              return fullFloorNames[0];
            }
          } else if (i === fullFloorNames.length - 1) {
            if (
              slideIndex >=
              floorStartingIndices[floorStartingIndices.length - 1]
            ) {
              return fullFloorNames[fullFloorNames.length - 1];
            }
          } else {
            if (
              slideIndex >= floorStartingIndices[i - 1] &&
              slideIndex < floorStartingIndices[i]
            ) {
              return fullFloorNames[i];
            }
          }
        })}
      </h1>
      {!isDesktop && (
        <MobileFloorTabs
          floorStartingIndices={floorStartingIndices}
          slideIndex={slideIndex}
          floorNames={floorNames}
          onClick={(floors) => navigateToFloor(floors)}
        />
      )}
      <div className="content-container">
        <div className="carousel-container">
          <div>
            <Arrow
              direction="left"
              onClick={() => {
                slideChangePrev(slideIndex, images);
              }}
            />
            <Scroll>
              <ImageBox
                images={images[slideIndex]}
                onClick={(image) => turnOnLightBox(image)}
              />
              <LightBox
                image={lightBoxImage}
                status={lightBoxStatus}
                onClick={() => turnOffLightBox()}
              />
            </Scroll>
            <Arrow
              direction="right"
              onClick={() => {
                slideChangeNext(slideIndex, images);
              }}
            />
          </div>
          <Dots
            images={images}
            index={slideIndex}
            navigateToTargetSlide={navigateToTargetSlide}
          />
        </div>
        <div className="text-container">
          {isDesktop ? (
            <>
              <FloorTabs
                floorStartingIndices={floorStartingIndices}
                slideIndex={slideIndex}
                floorNames={floorNames}
                onClick={(floors) => navigateToFloor(floors)}
              />
              <Scroll>
                <p className="angles-text">{text[slideIndex]}</p>
              </Scroll>
            </>
          ) : (
            <div className="angles-text phone">
              <p>{text[slideIndex]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    slideIndex: state.controlCarousel.slideIndex,
    lightBoxStatus: state.controlCarousel.lightBoxStatus,
    lightBoxImage: state.controlCarousel.lightBoxImage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    slideChangeNext: (slideIndex, images) => {
      dispatch(nextSlide(slideIndex, images));
    },
    slideChangePrev: (slideIndex, images) => {
      dispatch(prevSlide(slideIndex, images));
    },
    navigateToFloor: (floorStartingIndices) => {
      dispatch(toFloor(floorStartingIndices));
    },
    navigateToTargetSlide: (targetSlide) => {
      dispatch(toTargetSlide(targetSlide));
    },
    turnOnLightBox: (lightBoxImage) => {
      dispatch(lightBoxOn(lightBoxImage));
    },
    turnOffLightBox: () => {
      dispatch(lightBoxOff());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
