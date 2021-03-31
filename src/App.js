import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        Dictionary</header>
        <main>
          <Dictionary/>
        </main>
        <footer className="App-footer">coded by <a href="https://github.com/bushrawaheed/dictionary-project" target="_blank" rel="noreferrer">Bushra Waheed</a></footer>
    </div>
  );
}

export default App;
