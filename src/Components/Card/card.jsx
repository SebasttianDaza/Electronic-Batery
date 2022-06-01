import "./Styles/Card.scss";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import useBackOne from "../../Hooks/useBackOne";
import ErrorFallback from "../../Errors/handleError";

const Card = ({}) => {
  const [backOne] = useBackOne();
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="Card">
          <article className="Card-article">{backOne.isCurrentSong}</article>
        </section>
      </ErrorBoundary>
    </>
  );
};

export default Card;
