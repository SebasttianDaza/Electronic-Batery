import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BackOneContextProvider } from "./Context/StaticContext";
import { ContextVolumeProvider } from "./Context/volumeData";
import "./index.scss";

//Context Provider to handle state and data
const GlobalApp = ({}) => {
  return (
    <>
      <BackOneContextProvider>
        <ContextVolumeProvider>
          <App />
        </ContextVolumeProvider>
      </BackOneContextProvider>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalApp />
  </React.StrictMode>,
);
