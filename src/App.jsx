import "./App.scss";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./Errors/handleError";
import useBackOne from "./Hooks/useBackOne";
import Button from "./Components/Button/button";
import Switch from "./Components/Swicth/switch";
import Volume from "./Components/Volume/volume";
import Card from "./Components/Card/card";
import useKeyBoard from "./Hooks/useKeyBoard";

const ABCButton = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

const App = () => {
  const [backOne, setBackOne] = useBackOne();

  useKeyBoard((e) => {
    if (backOne.isOn) {
      const response = backOne.DataBackOne.find((item) => item.key === e.key);
      if (response) {
        setBackOne((prevState) => {
          return {
            ...prevState,
            isWork: response,
            isCurrentSong: response.name,
          };
        });
      }
      const urlAudio = backOne.DataBackOne.find((item) => item.key === e.key);
      const audio = new Audio(urlAudio.url);
      audio.play();
    }
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="App">
        <header className="App-header">
          {ABCButton.map((word) => {
            return <Button key={word} content={word} />;
          })}
        </header>
        <article className="App-article">
          <Switch title="Power" />
          <Card />
          <Volume options={{ min: 0, max: 10 }} />
          <Switch title="Bank" />
        </article>
      </main>
    </ErrorBoundary>
  );
};

export default App;
