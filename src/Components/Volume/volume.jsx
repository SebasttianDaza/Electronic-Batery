import "./Style/Volume.scss";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../Errors/handleError";

const Volume = ({}) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="Volume">
          <input type="range" className="inputRange-volume" />
        </section>
      </ErrorBoundary>
    </>
  );
};

export default Volume;
