import headshot from './media/headshot.png';
import headshotOutline1 from './media/headshotOutline1.png';
import headshotOutline2 from './media/headshotOutline2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Elizabeth Mercer's Portfolio</h1>
        <img src={headshot} className="headshot" alt="logo" />
        <img src={headshotOutline1} className="headshot-outline-1" alt="logo" />
        <img src={headshotOutline2} className="headshot-outline-2" alt="logo" />
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
}

export default App;
