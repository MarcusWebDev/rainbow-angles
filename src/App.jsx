import React from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import "./App.scss";

import Banner from "./components/Banner";
import { determineIsDesktop } from "./slices/generalSlice";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // This function is created so that the addEventListener and removeEventListener can reference the same function.
    const dispatchDetermineIsDesktop = () => {
      dispatch(determineIsDesktop());
    };

    dispatchDetermineIsDesktop();

    window.addEventListener("resize", dispatchDetermineIsDesktop);

    return () =>
      window.removeEventListener("resize", dispatchDetermineIsDesktop);
  }, []);

  return (
    <div className="App">
      <Banner />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
