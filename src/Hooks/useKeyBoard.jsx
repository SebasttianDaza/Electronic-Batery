import { useEffect, useCallback, useContext } from "react";

import Context from "../Context/StaticContext";

const useKeyBoard = (callback) => {
  const { backOne } = useContext(Context);

  const handleKeyCodeDown = useCallback(
    (e) => {
      if (backOne.DataBackOne.find((item) => item.keyCode === e.keyCode)) {
        callback(e);
      }
    },
    [backOne, callback],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyCodeDown);

    return () => {
      window.removeEventListener("keydown", handleKeyCodeDown);
    };
  }, [handleKeyCodeDown]);
};

export default useKeyBoard;
