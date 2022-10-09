import "./App.css";
import Dictionary from "./Dictionary";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="love" />
        </main>
        <footer className="App-footer">
          <small>Coded by Stella Maris</small>
        </footer>
      </div>
    </div>
  );
}

export default App;