import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { pairHashpack } from './hashconnect/connect';

function App() {
  const [pairingString, setPairingString]=useState('');

  const call = async () => {
    const saveData= await pairHashpack()
          setPairingString(saveData.pairingString)
  }
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p id='accountid'></p>
        {
          pairingString &&
          <>
          <h1>Pairing String</h1>
          <p>{pairingString}</p>
          </>
        }
        <button onClick={call}
        >Pair wallet</button>
      </header>
      
    </div>
  );
}

export default App;
