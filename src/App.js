import picture from './img/nardwuar.png';
import AdamPicture from './img/adamswanson.png';
import LoopiPicture from './img/loopilasso.png';
import CoffeePicture from './img/coffee.png';
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
            <img src={AdamPicture} alt="AdamPic" />
          </div>
          <div class="column">
            <img src={LoopiPicture} alt="LoopiPic" />
          </div>
          <div class="column">
            <img src={CoffeePicture} alt="CoffeePic" />
          </div>
          <div class="column">
            <img src={picture} alt="NardwuarPic" />
          </div>
        </div>
            
            
      </header>
    </div>
  );
}

export default App;
