import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/tailwind.css";
import AppContextProvider from "./contexts/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  // </React.StrictMode>
);
