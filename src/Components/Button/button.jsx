import PropTypes from "prop-types";
import "./Style/Button.scss";
import { ErrorBoundary } from "react-error-boundary";
import { useContext } from "react";

import useBackOne from "../../Hooks/useBackOne";
import ContextVolume from "../../Context/volumeData";
import ErrorFallback from "../../Errors/handleError";

const Button = ({ content, objectAudio }) => {
  const [backOne, setBackOne] = useBackOne();
  //Handle state volume of the music, it's context provider
  const { volume } = useContext(ContextVolume);

  const handleClick = (e) => {
    //Set to state if it's battery is on
    if (backOne.isOn) {
      //Look for song about the clicked button
      const urlAudio = backOne.DataBackOne.find((item) => item.key === e.target.id);
      setBackOne((prevState) => {
        return {
          ...prevState,
          isWork: urlAudio,
          isCurrentSong: urlAudio.name,
        };
      });
      //Play audio
      objectAudio.volume = volume.isVolume;
      objectAudio.src = urlAudio.url;
      objectAudio.play();
      //Put focus on the button
      e.target.focus();
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
