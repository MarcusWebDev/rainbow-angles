import "./App.css";
import { Outlet } from "react-router-dom";
import { Banner } from "./components/Banner/Banner";

const App = () => {
  return (
    <div className="App">
      <Banner />
      <div className="contentContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
