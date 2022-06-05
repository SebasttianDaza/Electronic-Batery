import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./Style/Switch.scss";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleError";
import useBackOne from "../../Hooks/useBackOne";
import { DataBackTwo, DataBackOne } from "../../Context/StaticContext";

const Switch = ({ title }) => {
  const [changeState, setChangeState] = useState(false);
  const [backOne, setBackOne] = useBackOne();
  const [classNamePower, setClassNamePower] = useState("");
  const [classNameBank, setClassNameBank] = useState("");

  const handleClick = (validate) => {
    if (validate) {
      const active = backOne.isOn ? false : true;
      setBackOne({
        ...backOne,
        isOn: active,
      });
    } else {
      if (backOne.isOn) {
        const active = changeState ? false : true;
        if (active) {
          setBackOne((prevState) => {
            return {
              ...prevState,
              DataBackOne: DataBackTwo,
            };
          });
        } else {
          setBackOne((prevState) => {
            return {
              ...prevState,
              DataBackOne: DataBackOne,
            };
          });
        }
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
