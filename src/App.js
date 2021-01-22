import picture from './img/nardwuar.png';
import chris from './img/chris.jpg';
import LoopiPicture from './img/loopilasso.png';
import CoffeePicture from './img/coffee.png';
import AtomikPicture from './img/atomik.png';
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
            <img src={chris} alt="Chris Butler" />
            
          </div>
          <div class="column">
            
          </div>
          <div class="column">
           
          </div>
          <div class="column">
         
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
