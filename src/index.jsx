import { configureStore } from "@reduxjs/toolkit";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { combineReducers } from "redux";

import "./index.scss";

import App from "./App.jsx";
import HomePage from "./components/HomePage";
import Bank from "./mapGuides/Bank.jsx";
import Border from "./mapGuides/Border.jsx";
import Chalet from "./mapGuides/Chalet.jsx";
import ClubHouse from "./mapGuides/ClubHouse.jsx";
import Coastline from "./mapGuides/Coastline.jsx";
import Consulate from "./mapGuides/Consulate.jsx";
import Hereford from "./mapGuides/Hereford.jsx";
import KafeDostoyevsky from "./mapGuides/KafeDostoyevsky.jsx";
import Oregon from "./mapGuides/Oregon.jsx";
import Skyscraper from "./mapGuides/Skyscraper.jsx";
import ThemePark from "./mapGuides/ThemePark.jsx";
import Villa from "./mapGuides/Villa.jsx";
import carouselReducer from "./slices/carouselSlice.js";
import generalReducer from "./slices/generalSlice.js";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/bank/",
        Component: Bank,
      },
      {
        path: "/border/",
        Component: Border,
      },
      {
        path: "/chalet/",
        Component: Chalet,
      },
      {
        path: "/club_house/",
        Component: ClubHouse,
      },
      {
        path: "coastline",
        Component: Coastline,
      },
      {
        path: "/consulate/",
        Component: Consulate,
      },
      {
        path: "/hereford/",
        Component: Hereford,
      },
      {
        path: "/kafe_dostoyevsky/",
        Component: KafeDostoyevsky,
      },
      {
        path: "/oregon/",
        Component: Oregon,
      },
      {
        path: "/skyscraper/",
        Component: Skyscraper,
      },
      {
        path: "/theme_park/",
        Component: ThemePark,
      },
      {
        path: "/villa/",
        Component: Villa,
      },
    ],
  },
]);

const rootReducer = combineReducers({
  general: generalReducer,
  carousel: carouselReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,

  document.getElementById("root"),
);
