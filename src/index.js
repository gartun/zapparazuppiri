import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./ErrorBoundary";

import App from "./App";

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <ScrollToTop />
      <App />
     </Router>
  </ErrorBoundary>,
  document.getElementById("root")
);

