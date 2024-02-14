import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";

import App from "./App.tsx";
import "./index.css";

// initialize google analytics
ReactGA.initialize("G-SM2T6YE4VT");

// Send pageview with a custom path
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
