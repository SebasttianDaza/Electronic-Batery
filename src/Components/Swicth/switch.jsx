import PropTypes from "prop-types";
import "./Style/Switch.scss";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleError";

const Switch = ({ title }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="Switch">
          <article className="Switch__title">{title}</article>
          <article className="Switch__switch">
            <aside className="Switch__switch__btn" />
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
