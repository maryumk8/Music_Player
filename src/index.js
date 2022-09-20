import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./state/store";
import { Provider } from "react-redux";
import Favourites from "./components/favourites";

export { default as Container } from "react-bootstrap/Container";
export { default as Dropdown } from "react-bootstrap/Dropdown";

export { default as Row } from "react-bootstrap/Row";

export { default as Col } from "react-bootstrap/Col";

export { default as Form } from "react-bootstrap/Form";

export { default as Button } from "react-bootstrap/Button";

export { default as Modal } from "react-bootstrap/Modal";

export { default as Navbar } from "react-bootstrap/Navbar";
export { default as Card } from "react-bootstrap/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
        />
        <Route
          path="/fav"
          element={
            <Provider store={store}>
              <Favourites />
            </Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
