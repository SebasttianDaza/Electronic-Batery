import "./App.scss";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./Errors/handleError";
import StaticContext from "./Context/StaticContext";
import Button from "./Components/Button/button";

const ABCButton = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

const App = ({}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StaticContext.Provider value={{ test: "test" }}>
        <main className="App">
          <header className="App-header">
            {ABCButton.map((word) => {
              return <Button key={word} content={word} />;
            })}
          </header>
          <article className="App-article" />
        </main>
      </StaticContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
