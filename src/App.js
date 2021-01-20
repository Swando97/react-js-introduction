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
        <p> A gallery of Adam Swanson's recent Photoshop edits.</p>
        <div class="row">
          <div class="column">
            <img src={picture} alt="NardwuarPic" />
            <img src={AdamPicture} alt="AdamPic" />
            <img src={LoopiPicture} alt="LoopilassoPic" />
          </div>
          <div class="column">
            <img src={picture} alt="NardwuarPic" />
            <img src={AdamPicture} alt="AdamPic" />
            <img src={LoopiPicture} alt="LoopilassoPic" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
