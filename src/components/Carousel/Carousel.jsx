import { useDispatch, useSelector } from "react-redux";

import "./Carousel.scss";

import {
  navigateToSlide,
  nextSlide,
  prevSlide,
  turnOffLightBox,
  turnOnLightBox,
} from "../../slices/carouselSlice";
import Scroll from "../Scroll";
import Arrow from "./Arrow.jsx";
import Dots from "./Dots.jsx";
import FloorTabs from "./FloorTabs.jsx";
import ImageBox from "./ImageBox.jsx";
import LightBox from "./LightBox.jsx";
import MobileFloorTabs from "./MobileFloorTabs.jsx";

const Carousel = ({ images, text, floorStartingIndices, floorNames }) => {
  const { slideIndex, lightBoxImage } = useSelector((state) => state.carousel);
  const { isDesktop } = useSelector((state) => state.general);
  const dispatch = useDispatch();

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
          onClick={(index) => dispatch(navigateToSlide({ slideIndex: index }))}
        />
      )}
      <div className="content-container">
        <div className="carousel-container">
          <div>
            <Arrow
              direction="left"
              onClick={() =>
                dispatch(prevSlide({ slideIndex, slides: images }))
              }
            />
            <Scroll>
              <ImageBox
                images={images[slideIndex]}
                onClick={(image) => dispatch(turnOnLightBox({ image }))}
              />
              <LightBox
                image={lightBoxImage}
                onClick={() => dispatch(turnOffLightBox())}
              />
            </Scroll>
            <Arrow
              direction="right"
              onClick={() =>
                dispatch(nextSlide({ slideIndex, slides: images }))
              }
            />
          </div>
          <Dots
            images={images}
            index={slideIndex}
            onClick={(index) =>
              dispatch(navigateToSlide({ slideIndex: index }))
            }
          />
        </div>
        <div className="text-container">
          {isDesktop ? (
            <>
              <FloorTabs
                floorStartingIndices={floorStartingIndices}
                slideIndex={slideIndex}
                floorNames={floorNames}
                onClick={(index) =>
                  dispatch(navigateToSlide({ slideIndex: index }))
                }
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

export default Carousel;
