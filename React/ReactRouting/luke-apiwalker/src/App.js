import './App.css';
import {Router, navigate} from '@reach/router';
import Person from './components/Person';
import Planet from './components/Planet';
import Vehicle from './components/Vehicle';
import Starship from './components/Starship';
import Default from './components/Default';

function App() {
  
  const makeRequest = event =>{
    event.preventDefault();
    navigate(`/${event.target.entity.value}/${event.target.id.value}`);
  }
  
  return (
    <div className="App">
      <form onSubmit={makeRequest}>
        <select name="entity" defaultValue={'default'}>
          <option disabled hidden value="default">--Please Select--</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="vehicles">Vehicles</option>
          <option value="starships">Starships</option>
        </select>
        <input type="number" name="id" placeholder="ID"/>
        <button>Search</button>
      </form>
      <Router>
        <Default path="/default"/>
        <Person path="/people/:id"/>
        <Planet path="/planets/:id"/>
        <Vehicle path="/vehicles/:id"/>
        <Starship path="/starships/:id"/>
      </Router>
    </div>
  );
}

export default App;