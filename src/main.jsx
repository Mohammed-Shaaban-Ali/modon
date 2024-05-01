import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n/i18n.js";
import "./index.css";
import Loading from "./components/Loading.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Suspense fallback={<Loading />}>
    <App />
  </React.Suspense>
);
