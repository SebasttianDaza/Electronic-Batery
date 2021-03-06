import "./Styles/Card.scss";
import { ErrorBoundary } from "react-error-boundary";

import useBackOne from "../../Hooks/useBackOne";
import ErrorFallback from "../../Errors/handleError";

const Card = ({}) => {
  const [backOne] = useBackOne();
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="Card">
          {/* Show something if it's the battery working */}
          <article className="Card-article">{backOne.isOn ? backOne.isCurrentSong : "Off"}</article>
        </section>
      </ErrorBoundary>
    </>
  );
};

export default Card;
