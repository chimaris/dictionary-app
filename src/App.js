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
        <footer> 
          <small>Coded by Stella Maris and is <a href="https://github.com/chimaris/dictionary-app" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a> and <a href="https://mi-dictionary.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
   </small>
   </footer>
      </div>
    </div>
  );
}

export default App;