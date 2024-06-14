import headshot from './media/headshot.png';
import headshotOutline1 from './media/headshotOutline1.png';
import headshotOutline2 from './media/headshotOutline2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Elizabeth Mercer's Portfolio</h1>
        <div className='row'>
          <img src={headshot} className="headshot" alt="logo" />
          <img src={headshotOutline1} className="headshot-outline-1" alt="logo" />
          <img src={headshotOutline2} className="headshot-outline-2" alt="logo" />
          <p className='intro-text'>
            Welcome to my first portfolio ever!
            Also my first time using react. That is some pretty exciting stuff right there. Soon I will have different projects here to show off the cool things I am capable of.
          </p>
        </div>
        <div>
          <button className='basic-button'>Contact Me</button>
          <button disabled className='basic-button'>Portfolio Prijects</button>

        </div>
      </header>
    </div>
  );
}

export default App;
