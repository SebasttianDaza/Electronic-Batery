import StaticContext from "./Context/StaticContext";
import "./App.scss";

const App = ({}) => {
  return (
    <StaticContext.Provider value={{ test: "test" }}>
      <main className="App">
        <header className="App-header" />
        <article className="App-article" />
      </main>
    </StaticContext.Provider>
  );
};

export default App;
