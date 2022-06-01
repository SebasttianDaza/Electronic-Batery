import { useContext, useEffect } from "react";

import Context from "../Context/StaticContext";

import useKeyBoard from "./useKeyBoard";

const useBackOne = () => {
  const { backOne, setBackOne } = useContext(Context);
  const [keyCode] = useKeyBoard();

  //Cancion actual
  //Estado para saber si esta prendido o apagado
  //Estado para el volumen
  //Estado para el cambio de musica

  useEffect(() => {
    setBackOne((prevState) => {
      return {
        ...prevState,
        isOn: true,
        isWork: keyCode,
        isCurrentSong: keyCode.name,
      };
    });
  }, [keyCode, setBackOne]);

  return [backOne, setBackOne];
};

export default useBackOne;
