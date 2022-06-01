import PropTypes from "prop-types";
import "./Style/Button.scss";
import { ErrorBoundary } from "react-error-boundary";

import useBackOne from "../../Hooks/useBackOne";
import ErrorFallback from "../../Errors/handleError";

const Button = ({ content }) => {
  const [backOne, setBackOne] = useBackOne();

  const handleClick = (e) => {
    const urlAudio = backOne.DataBackOne.find((item) => item.key === e.target.id);
    const audio = new Audio(urlAudio.url);

    audio.play();
    setBackOne((prevState) => {
      return {
        ...prevState,
        isWork: urlAudio,
        isCurrentSong: urlAudio.name,
      };
    });
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <button className="Btn" id={content} onClick={handleClick}>
          {content}
        </button>
      </ErrorBoundary>
    </>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
