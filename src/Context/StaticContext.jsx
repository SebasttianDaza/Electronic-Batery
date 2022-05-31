import React, { useState } from "react";
import PropTypes from "prop-types";

const DataBackOne = [
  {
    keyCode: 81,
    key: "q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater-1",
  },
  {
    keyCode: 87,
    key: "w",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater-2",
  },
  {
    keyCode: 69,
    key: "e",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater-3",
  },
  {
    keyCode: 65,
    key: "a",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater-4",
  },
  {
    keyCode: 83,
    key: "s",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Heater-6",
  },
  {
    keyCode: 68,
    key: "d",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Dsc-Oh",
  },
  {
    keyCode: 90,
    key: "z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick-n-Hat",
  },
  {
    keyCode: 88,
    key: "x",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Kick-n-Hat",
  },
  {
    keyCode: 67,
    key: "c",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Cev-H2",
  },
];

const Context = React.createContext({
  keyCode: "withoutKeyCode",
  key: "withoutKey",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
});

export const BackOneContextProvider = ({ children }) => {
  const [backOne, setBackOne] = useState({
    DataBackOne,
  });

  return <Context.Provider value={{ backOne, setBackOne }}>{children}</Context.Provider>;
};

BackOneContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
