import picture from './img/nardwuar.png';
import chris from './img/chris.jpg';
import koffi from './img/koffi.jpg';
import yuliia from './img/yuliia.png';
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
            <img src={koffi} alt="Koffi" />
            
          </div>
          <div class="column">
            <img src={yuliia} alt="Yuliia Kasapska" />
           
          </div>
          <div class="column">
         
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
