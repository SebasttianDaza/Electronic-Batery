import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./Style/Switch.scss";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleError";
import useBackOne from "../../Hooks/useBackOne";
import { DataBackTwo, DataBackOne } from "../../Context/StaticContext";

const Switch = ({ title }) => {
  //State to set state global about click how switch, if true is on, if false is off
  const [changeState, setChangeState] = useState(false);
  const [backOne, setBackOne] = useBackOne();
  //States to handle class about it's active or not
  const [classNamePower, setClassNamePower] = useState("");
  const [classNameBank, setClassNameBank] = useState("");

  const handleClick = (validate) => {
    //Set state about to generate of the click
    if (validate) {
      //If it's true, set state to false, and if it's false, set state to true
      const active = backOne.isOn ? false : true;
      setBackOne({
        ...backOne,
        isOn: active,
      });
    } else {
      if (backOne.isOn) {
        //If it's true, set state to false, and if it's false, set state to true
        const active = changeState ? false : true;
        if (active) {
          //Set change data about music
          setBackOne((prevState) => {
            return {
              ...prevState,
              DataBackOne: DataBackTwo,
            };
          });
        } else {
          //Set change data about music original
          setBackOne((prevState) => {
            return {
              ...prevState,
              DataBackOne: DataBackOne,
            };
          });
        }
        //Set to change class on useEffect
        setChangeState(active);
      }
    }
  };

  useEffect(() => {
    if (backOne.isOn) {
      setClassNamePower("Switch__switch__btn_active");
    } else {
      setClassNamePower("");
    }

    if (changeState) {
      setClassNameBank("Switch__switch__btn_actives");
    } else {
      setClassNameBank("");
    }
  }, [backOne.isOn, changeState]);

  const ifClass = title.toLowerCase() === "power" ? classNamePower : classNameBank;

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="Switch">
          <article className="Switch__title">{title}</article>
          <article className="Switch__switch">
            <aside
              className={"Switch__switch__btn" + " " + ifClass}
              onClick={
                title.toLowerCase() === "power" ? () => handleClick(true) : () => handleClick(false)
              }
            />
          </article>
        </section>
      </ErrorBoundary>
    </>
  );
};

Switch.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Switch;
