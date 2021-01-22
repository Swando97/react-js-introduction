import chris from './img/chris.jpg';
import koffi from './img/koffi.jpg';
import trevor from './img/trevor.png';
import yuliia from './img/yuliia.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Friends Collage
        </h1>
        <p> A gallery of Adam Swanson's special friends.</p>
        <div class="row">
          <div class="column">
            <img src={yuliia} alt="Yuliia Kasapska" />
          </div>
          <div class="column">
            <img src={trevor} alt="Trevor Henits" />
            
            
          </div>
          <div class="column">
            <img src={koffi} alt="Koffi" />
        
          </div>
          <div class="column">
            <img src={chris} alt="Chris Butler" />
            
         
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
