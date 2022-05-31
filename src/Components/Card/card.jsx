import "./Styles/Card.scss";
import { ErrorBoundary } from "react-error-boundary";
import { useContext } from "react";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleError";

const Card = ({ content }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="Card">
          <article className="Card-article">{content}</article>
        </section>
      </ErrorBoundary>
    </>
  );
};

Card.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Card;
