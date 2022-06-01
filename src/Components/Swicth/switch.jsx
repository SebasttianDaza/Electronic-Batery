import PropTypes from "prop-types";
import "./Style/Switch.scss";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleError";
import useBackOne from "../../Hooks/useBackOne";

const Switch = ({ title }) => {
  const [backOne, setBackOne] = useBackOne();

  const handleClick = () => {
    const active = backOne.isOn === true ? false : true;
    setBackOne({
      ...backOne,
      isOn: active,
    });
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="Switch">
          <article className="Switch__title">{title}</article>
          <article className="Switch__switch">
            <aside className="Switch__switch__btn" onClick={handleClick} />
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
