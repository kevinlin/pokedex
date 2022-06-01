import React from 'react';
import './App.css';
import PokeList from './PokeList';
const pokemons = require('pokemongo-json-pokedex/output/pokemon.json');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokeList pokemons={pokemons}/>

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
