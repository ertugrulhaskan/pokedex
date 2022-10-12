import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./contexts/AppContext";

import "./assets/styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);

// React
// Contexts
// Helpers
// Components
// UI Elements
// ...
