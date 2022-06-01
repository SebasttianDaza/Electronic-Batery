import { useState, useEffect, useCallback, useContext } from "react";

import Context from "../Context/StaticContext";

const playAudio = (url) => {
  const audio = new Audio(url);
  audio.play();
};

const useKeyBoard = () => {
  const [keyCode, setKeyCode] = useState(0);
  const { backOne } = useContext(Context);

  const handleKeyCodeDown = useCallback(
    (e) => {
      if (e.type === "keydown") {
        const result = backOne.DataBackOne.find((item) => item.keyCode === e.keyCode);
        if (result) {
          //Si es el mismo no actualizare el estado
          if (keyCode !== e.keyCode) {
            setKeyCode(result);
            playAudio(result.url);
          }
        }
      }
    },
    [backOne, keyCode, setKeyCode],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyCodeDown);

    return () => {
      window.removeEventListener("keydown", handleKeyCodeDown);
    };
  }, [handleKeyCodeDown]);

  return [keyCode];
};

export default useKeyBoard;
