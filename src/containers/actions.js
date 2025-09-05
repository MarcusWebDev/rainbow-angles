import {
  NEXT_SLIDE,
  PREV_SLIDE,
  TO_FLOOR,
  TO_TARGET_SLIDE,
  TURN_OFF_LIGHT_BOX,
  TURN_ON_LIGHT_BOX,
} from "./constants";

export const nextSlide = (slideIndex, images) => ({
  type: NEXT_SLIDE,
  slideIndex: slideIndex,
  slides: images,
});

export const prevSlide = (slideIndex, images) => ({
  type: PREV_SLIDE,
  slideIndex: slideIndex,
  slides: images,
});
export const toFloor = (floorStartingIndices) => ({
  type: TO_FLOOR,
  floorStartingIndices: floorStartingIndices,
});

export const toTargetSlide = (targetSlide) => ({
  type: TO_TARGET_SLIDE,
  targetSlide: targetSlide,
});
export const lightBoxOn = (lightBoxImage) => ({
  type: TURN_ON_LIGHT_BOX,
  status: "on",
  image: lightBoxImage,
});
export const lightBoxOff = () => ({
  type: TURN_OFF_LIGHT_BOX,
  status: "off",
});
