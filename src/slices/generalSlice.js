import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    isDesktop: true,
  },
  reducers: {
    determineIsDesktop: (state) => {
      state.isDesktop = window.innerWidth >= 1060;
    },
  },
});

export const { determineIsDesktop } = generalSlice.actions;

export default generalSlice.reducer;
