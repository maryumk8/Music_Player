import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/navBar";
import Artist from "./components/artistCard";
import Carousel from "./components/categoryTabs";

function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Artist />
    </div>
  );
}

export default App;
