import React, {useState} from 'react';
import "./App.css";
import HookForm from './components/HookForm.jsx';
import FormData from './components/FormData.jsx';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passConfirmation: ""
  });

  return (
    <div className="App">
      <HookForm inputs={state} setInputs={setState}/>
      <FormData data={state}/>
    </div>
  );
}

export default App;