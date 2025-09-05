import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    slideIndex: 0,
    lightBoxImage: null,
  },
  reducers: {
    nextSlide: (state, action) => {
      let currentIndex = action.payload.slideIndex;
      const newIndex =
        currentIndex === action.payload.slides.length - 1 ? 0 : ++currentIndex;

      state.slideIndex = newIndex;
    },
    prevSlide: (state, action) => {
      let currentIndex = action.payload.slideIndex;
      const newIndex =
        currentIndex === 0 ? action.payload.slides.length - 1 : --currentIndex;

      state.slideIndex = newIndex;
    },
    navigateToSlide: (state, action) => {
      state.slideIndex = action.payload.slideIndex;
    },
    turnOnLightBox: (state, action) => {
      state.lightBoxImage = action.payload.image;
    },
    turnOffLightBox: (state) => {
      state.lightBoxImage = null;
    },
  },
});

export const {
  nextSlide,
  prevSlide,
  navigateToSlide,
  turnOnLightBox,
  turnOffLightBox,
} = carouselSlice.actions;

export default carouselSlice.reducer;
