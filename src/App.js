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
        <div class="w3-row">
        <img class="w3-col w3-container m4 l3" src={picture} alt="NardwuarPic"></img>
        <img class="w3-col w3-container m4 l3" src={AdamPicture} alt="AdamPic" />
        <img class="w3-col w3-container m4 l3" src={LoopiPicture} alt="LoopilassoPic" />
        </div>
      </header>
    </div>
  );
}

export default App;
