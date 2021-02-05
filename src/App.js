import chris from './img/chris.jpg';
import koffi from './img/koffi.jpg';
import trevor from './img/trevor.png';
import yuliia from './img/yuliia.png';
import lion from './img/lions.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          QRZones
        </h1>
        <p> A collection of <b>QR's</b> special friends.</p>
      </header>
      <body>
      <div class="row">
          <div class="column">
            <img class="collapse" src={yuliia} alt="Yuliia Kasapska" style={{width: "100%"}} />
          </div>
          <div class="column">
            <img class="collapse" src={trevor} alt="Trevor Henits" style={{width: "100%"}} />
          </div>
          <div class="column">
            <img class="collapse" src={koffi} alt="Koffi" style={{width: "100%"}} />
          </div>
          <div class="column">
            <img class="collapse" src={chris} alt="Chris Butler" style={{width: "100%"}} />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
