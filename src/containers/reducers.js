import {
  NEXT_SLIDE,
  PREV_SLIDE,
  TO_FLOOR,
  TO_TARGET_SLIDE,
  TURN_ON_LIGHT_BOX,
  TURN_OFF_LIGHT_BOX,
} from "./constants";

const initialStateCarousel = {
  slideIndex: 0,
  lightBoxStatus: "off",
};

export const controlCarousel = (state = initialStateCarousel, action = {}) => {
  switch (action.type) {
    case NEXT_SLIDE: {
      let currentIndex = action.slideIndex;
      const index =
        currentIndex === action.slides.length - 1 ? 0 : ++currentIndex;
      return Object.assign({}, state, {
        slideIndex: index,
      });
    }
    case PREV_SLIDE: {
      let currentIndex = action.slideIndex;
      const index =
        currentIndex === 0 ? action.slides.length - 1 : --currentIndex;
      return Object.assign({}, state, {
        slideIndex: index,
      });
    }
    case TO_FLOOR: {
      return Object.assign({}, state, {
        slideIndex: action.floorStartingIndices,
      });
    }
    case TO_TARGET_SLIDE: {
      return Object.assign({}, state, {
        slideIndex: action.targetSlide,
      });
    }
    case TURN_ON_LIGHT_BOX: {
      return Object.assign({}, state, {
        lightBoxStatus: action.status,
        lightBoxImage: action.image,
      });
    }
    case TURN_OFF_LIGHT_BOX: {
      return Object.assign({}, state, {
        lightBoxStatus: action.status,
      });
    }
    default:
      return state;
  }
};
