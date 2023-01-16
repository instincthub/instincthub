import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TimeAgo from 'javascript-time-ago'

// Time Since dependencies
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
// End Time Since dependencies

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);