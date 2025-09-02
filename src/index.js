import { createRoot } from "react-dom/client";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { controlCarousel } from "./containers/reducers";
import "./index.css";
import App from "./App";
import Homepage from "./components/Homepage/Homepage.js";
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
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Homepage,
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

const rootReducer = combineReducers({ controlCarousel });
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
