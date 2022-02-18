import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NobelContext } from "./context/NobelPriceContext";

ReactDOM.render(
  <React.StrictMode>
    <NobelContext>
      <App />
    </NobelContext>
  </React.StrictMode>,
  document.getElementById("root")
);
