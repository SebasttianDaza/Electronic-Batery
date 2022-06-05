import React, { useState } from "react";
import PropTypes from "prop-types";

const ContextVolume = React.createContext({
  isVolume: 5,
});

//ContextVolume.Provider is a component that provides the data to the rest of the application
export const ContextVolumeProvider = ({ children }) => {
  const [volume, setVolume] = useState({
    isVolume: 5,
  });

  return <ContextVolume.Provider value={{ volume, setVolume }}>{children}</ContextVolume.Provider>;
};

ContextVolumeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextVolume;
