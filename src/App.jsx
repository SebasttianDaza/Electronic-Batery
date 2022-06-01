import "./App.scss";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./Errors/handleError";
import useBackOne from "./Hooks/useBackOne";
import Button from "./Components/Button/button";
import Switch from "./Components/Swicth/switch";
import Volume from "./Components/Volume/volume";
import Card from "./Components/Card/card";

const ABCButton = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

const App = () => {
  const [song, setSong] = useState("");
  const [backOne, setBackOne] = useBackOne();

  console.log(backOne);

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
          <Volume />
          <Switch title="Bank" />
        </article>
      </main>
    </ErrorBoundary>
  );
};

export default App;
