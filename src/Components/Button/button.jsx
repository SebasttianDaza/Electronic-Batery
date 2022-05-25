import PropTypes from "prop-types";
import "./Style/Button.scss";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleError";

const Button = ({ content }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <button className="Btn">{content}</button>
      </ErrorBoundary>
    </>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
