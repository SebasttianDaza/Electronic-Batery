import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./Style/Switch.scss";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleError";
import useBackOne from "../../Hooks/useBackOne";

const Switch = ({ title }) => {
  const [backOne, setBackOne] = useBackOne();
  const [classNamePower, setClassNamePower] = useState("");

  const handleClick = () => {
    const active = backOne.isOn ? false : true;
    setBackOne({
      ...backOne,
      isOn: active,
    });
  };

  useEffect(() => {
    if (backOne.isOn) {
      setClassNamePower("Switch__switch__btn_active");
    } else {
      setClassNamePower("");
    }
  }, [backOne.isOn]);

  const ifClass = title.toLowerCase() === "power" ? classNamePower : "";

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="Switch">
          <article className="Switch__title">{title}</article>
          <article className="Switch__switch">
            <aside
              className={"Switch__switch__btn" + " " + ifClass}
              onClick={title.toLowerCase() === "power" ? handleClick : null}
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
