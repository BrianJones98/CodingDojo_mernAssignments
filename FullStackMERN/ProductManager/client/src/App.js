import './App.css';
import React from 'react';
import Main from './views/Main.jsx';
import Update from './views/Update.jsx';
import {Router} from '@reach/router';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Main default/>
        <Update path="/products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
