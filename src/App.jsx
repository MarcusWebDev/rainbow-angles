import "./App.scss";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";

const App = () => {
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
