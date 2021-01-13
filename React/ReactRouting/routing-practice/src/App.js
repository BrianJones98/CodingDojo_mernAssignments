import './App.css';
import {Router} from '@reach/router';
import Home from './components/Home';
import DisplayParam from './components/DisplayParam';
import DynamicStyle from './components/DynamicStyle';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Home path="/home"/>
        <DisplayParam path="/:param"/>
        <DynamicStyle path="/:param/:color/:background"/>
      </Router>
    </div>
  );
}

export default App;
