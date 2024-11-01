import logo from './logo.svg';
import './App.css';
import TextInput from './commponents/textInput/textInput';
import { useState } from 'react';

function App() {
  const cabusParameters = { "PGN": { "title": "PGN" }, "praority": { "title": "עדיפות" }, "sender": { "title": "שולח" } }
  const [parametes, setParameters] = useState({})


  return (
    <div className="App">
      {
      Object.keys(cabusParameters).map((parameter) => <TextInput updateFnction={() => setParameters[[...parametes], parameter]} title={cabusParameters[parameter].title}/>)}
      
    </div>
  );
}

export default App;
