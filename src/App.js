import "./css/App.css";
import Search from "./component/Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Search default="words" />
        <footer className="App-footer">
          <section>
            <span>
              An{" "}
              <a
                href="https://github.com/Teewawa/react-weather"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced
              </a>{" "}
              project coded by{" "}
              <a
                href="https://www.linkedin.com/in/tiaramendiola/"
                target="_blank"
                rel="noreferrer"
              >
                Tiara Mendiola
              </a>
            </span>
          </section>
        </footer>
      </div>
    </div>
  );
}

export default App;
