import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
//import Parent from "./components/parent";

// <React.StrictMode> render component multiple times
// ReactDOM.render(
//   <React.StrictMode>
//     <Parent />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
