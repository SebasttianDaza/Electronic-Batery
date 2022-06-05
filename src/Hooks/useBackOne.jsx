import { useContext } from "react";

import Context from "../Context/StaticContext";

//custom hook to return the state that's all components, and only call context here
const useBackOne = () => {
  const { backOne, setBackOne } = useContext(Context);

  return [backOne, setBackOne];
};

export default useBackOne;
