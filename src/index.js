import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./fonts/OmTeloletOm.ttf";
import "./fonts/OmTeloletOm.otf";
import "./css/index.css";
import 'font-awesome/css/font-awesome.min.css';
import { CartProvider } from "react-use-cart";

ReactDOM.render(
  <CartProvider>{/* render app/cart here */}
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </CartProvider>,
  document.getElementById("root")
);
