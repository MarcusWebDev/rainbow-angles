import {
  NEXT_SLIDE,
  PREV_SLIDE,
  TO_FLOOR,
  TO_TARGET_SLIDE,
  TURN_ON_LIGHT_BOX,
  TURN_OFF_LIGHT_BOX,
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
export const toFloor = (floorStart) => ({
  type: TO_FLOOR,
  floorStart: floorStart,
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
