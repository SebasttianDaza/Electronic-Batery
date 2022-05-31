import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BackOneContextProvider } from "./Context/StaticContext";
import "./index.scss";

const GlobalApp = ({}) => {
  return (
    <>
      <BackOneContextProvider>
        <App />
      </BackOneContextProvider>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalApp />
  </React.StrictMode>,
);
