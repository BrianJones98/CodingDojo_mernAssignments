import './App.css';
import {useState} from 'react';
import Pokemon from './components/Pokemon'

function App() {
  const [isShown, setIsShown] = useState(false);
  
  return (
    <div className="App">
      <button onClick={() => setIsShown(!isShown)}>{isShown ? "Hide" : "Show"} Pokemon</button>
      {isShown ? <Pokemon/> : null}
    </div>
  );
}

export default App;