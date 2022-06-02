import "./Style/Volume.scss";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import { useState } from "react";

import useBackOne from "../../Hooks/useBackOne";
import ErrorFallback from "../../Errors/handleError";

const Volume = ({ options }) => {
  const [backOne, setBackOne] = useBackOne();
  const [volume, setVolume] = useState();
  const { min, max } = options;

  const handleVolume = (e) => {
    setVolume(e.target.value);
    updateState();
  };

  const updateState = () => {
    if (backOne.isOn) {
      setBackOne((prevState) => {
        return {
          ...prevState,
          isCurrentSong: volume,
          isVolume: volume,
        };
      });
    }
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="Volume">
          <input
            type="range"
            className="inputRange-volume"
            min={min}
            max={max}
            value={volume}
            onChange={handleVolume}
          />
        </section>
      </ErrorBoundary>
    </>
  );
};

Volume.propTypes = {
  options: PropTypes.object.isRequired,
};

export default Volume;
