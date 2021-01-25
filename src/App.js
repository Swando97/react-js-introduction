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
          Friends Collage
        </h1>
        <p> A collection of <b>Adam Swanson's</b> special friends.</p>
      </header>
      <body>
      <div class="row">
          <div class="column">
            <img class="collapse" src={yuliia} alt="Yuliia Kasapska" />
          </div>
          <div class="column">
            <img class="collapse" src={trevor} alt="Trevor Henits" />
          </div>
          <div class="column">
            <img class="collapse" src={koffi} alt="Koffi" />
          </div>
          <div class="column">
            <img class="collapse" src={chris} alt="Chris Butler" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
