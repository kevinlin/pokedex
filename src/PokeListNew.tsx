import React from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import usePokemonList from './usePokemonList';

export default function PokeListNew() {
  const { pokemons, error } = usePokemonList();

  return (
    <>
      {pokemons ?
        <ul>
          {pokemons.map(
            (pokemon) => {
              return <li key={pokemon.name} data-testid="pokeList-entry">
                <Link to={"/pokemon/" + pokemon.name} className="App-link">{pokemon.name}</Link>
              </li>
            }
          )}
        </ul>
        : <ClipLoader color="white"/>}
      {error && <span color="red">{error.message}</span>}
    </>
  );
}
