import PropTypes from "prop-types";
import "./Style/ErrorFallback.scss";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p className="text-danger">Something went wrong:</p>
      <pre className="text-white">{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
