import React from 'react';
import { ClipLoader } from 'react-spinners';
import usePokemon from './usePokemon';

export default function PokeListNew() {
  const { pokemons, error } = usePokemon();

  return (
    <>
      {pokemons ?
        <ul>
          {pokemons.map(
            (pokemon) => <li key={pokemon.name} data-testid="pokeList-entry">{pokemon.name}</li>
          )}
        </ul>
        : <ClipLoader color="white"/>}
      {error && <span color="red">{error.message}</span>}
    </>
  );
}
