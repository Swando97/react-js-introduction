import picture from './img/nardwuar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Adam Swanson
        </h1>
        <p> A gallery of Adam Swanson's Photoshop skills.</p>
        <img src={picture} alt="profilePic" />
      </header>
    </div>
  );
}

export default App;
