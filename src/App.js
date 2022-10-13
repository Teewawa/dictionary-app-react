import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Dictionary default="search" />
        <footer className="App-footer">
          <span>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/tiaramendiola/"
              target="_blank"
              rel="noreferrer"
            >
              Tiara Mendiola
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Teewawa/react-weather"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced.
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
