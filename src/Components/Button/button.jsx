import PropTypes from "prop-types";
import "./Style/Button.scss";
import { ErrorBoundary } from "react-error-boundary";
import { useContext } from "react";

import useBackOne from "../../Hooks/useBackOne";
import ContextVolume from "../../Context/volumeData";
import ErrorFallback from "../../Errors/handleError";

const Button = ({ content, objectAudio }) => {
  const [backOne, setBackOne] = useBackOne();
  const { volume } = useContext(ContextVolume);

  const handleClick = (e) => {
    if (backOne.isOn) {
      const urlAudio = backOne.DataBackOne.find((item) => item.key === e.target.id);
      objectAudio.volume = volume.isVolume;
      objectAudio.src = urlAudio.url;
      objectAudio.play();
      setBackOne((prevState) => {
        return {
          ...prevState,
          isWork: urlAudio,
          isCurrentSong: urlAudio.name,
        };
      });
    }
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <button className="Btn" id={content} onClick={handleClick} disabled={!backOne.isOn}>
          {content}
        </button>
      </ErrorBoundary>
    </>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  objectAudio: PropTypes.object.isRequired,
};

export default Button;
