import { useContext, useEffect } from "react";

import Context from "../Context/StaticContext";

const useBackOne = () => {
  const { backOne, setBackOne } = useContext(Context);

  return [backOne, setBackOne];
};

export default useBackOne;
