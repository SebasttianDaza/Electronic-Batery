import "./Style/Volume.scss";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import { useState, useEffect, useContext } from "react";

import ContextVolume from "../../Context/volumeData";
import useBackOne from "../../Hooks/useBackOne";
import ErrorFallback from "../../Errors/handleError";

const Volume = ({ options }) => {
  const { min, max } = options;
  const [backOne, setBackOne] = useBackOne();
  const { setVolume } = useContext(ContextVolume);
  //Handle input
  const [volumeHandle, setVolumeHanlde] = useState(0);

  const handleVolume = (e) => {
    if (backOne.isOn) {
      setVolumeHanlde(e.target.value);
    }
  };

  useEffect(() => {
    if (backOne.isOn) {
      const volumeParse = volumeHandle / 10;
      setBackOne((prevState) => {
        return {
          ...prevState,
          isCurrentSong: volumeHandle,
        };
      });
      setVolume({
        isVolume: volumeParse,
      });
    }
  }, [volumeHandle, setBackOne, setVolume, backOne.isOn]);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section className="Volume">
          <input
            type="range"
            className="inputRange-volume"
            min={min}
            max={max}
            value={volumeHandle}
            onChange={handleVolume}
            disabled={!backOne.isOn}
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
