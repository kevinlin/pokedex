import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import PokemonDetails from './PokemonDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/pokemon/:name" element={<PokemonDetails/>}/>
            <Route path="*" element={<Navigate to="/home" replace/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
