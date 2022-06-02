import React from 'react';

import './App.css';
import PokeListNew from './PokeListNew';

export default function Home() {
  return (
    <>
      <PokeListNew/>
      {/*<DynamicGreeting />*/}
      {/*<PokeList pokemons={pokemons.slice(0, 10)}/>*/}
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      {/*<p>*/}
      {/*  Edit <b>this</b> <code>src/App.tsx</code> and save to reload.*/}
      {/*</p>*/}
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </>
  );
}
