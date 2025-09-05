import React from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";

const App = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const determineIfDesktop = () => {
      if (window.innerWidth < 1060) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };

    determineIfDesktop();

    window.addEventListener("resize", determineIfDesktop);

    return () => window.removeEventListener("resize", determineIfDesktop);
  }, []);

  return (
    <div className="App">
      <Banner />
      <div className="content-container">
        <Outlet context={{ isDesktop }} />
      </div>
    </div>
  );
};

export default App;
