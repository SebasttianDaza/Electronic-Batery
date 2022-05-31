import PropTypes from "prop-types";
import "./Style/Button.scss";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleError";

const Button = ({ content, event }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <button className="Btn" id={content} onClick={event}>
          {content}
        </button>
      </ErrorBoundary>
    </>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default Button;
