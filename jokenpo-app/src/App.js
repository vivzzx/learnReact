import logo from './logo.svg';
import './App.css';

import Player1 from "./components/Player1/Player1";
import Player2 from "./components/Player2/Player2";

function App() {
  return (
    <div className="App">
      <h1>Jokenpo challenge</h1>
      <div className='playsContainer'>
        <Player1 />
        <Player2 />
        
      </div>
      <footer>
        <p>You dont know this game? Click here!</p>
        <p>Jokenpo challenge by <a href='https://vivzzx.github.io/'>@Viv Galati</a></p>
      </footer>

    </div>
  );
}

export default App;


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */