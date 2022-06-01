import React from 'react';
import './App.css';
import PokeListEntry from './PokeListEntry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokeListEntry/>
        <PokeListEntry name="Bulbasaur"/>
        <PokeListEntry name="Pikachu"/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <b>this</b> <code>src/App.tsx</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a></header>
    </div>
  );
}

export default App;
