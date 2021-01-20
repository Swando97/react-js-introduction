import picture from './img/nardwuar.png';
import AdamPicture from './img/adamswanson.png';
import LoopiPicture from './img/loopilasso.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Adam Swanson
        </h1>
        <p> A gallery of Adam Swanson's Photoshop skills.</p>
        <img src={picture} alt="NardwuarPic" />
        <img src={AdamPicture} alt="AdamPic" />
        <img src={LoopiPicture} alt="LoopilassoPic" />
        
      </header>
    </div>
  );
}

export default App;
