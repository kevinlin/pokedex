import React from 'react';
import { useParams } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import usePokemon from './usePokemon';

const PokemonDetails = () => {
  const { name } = useParams();
  if (!name) throw new Error("pokemonName is not set");

  const { pokemon, error } = usePokemon(name);

  const pad = (num: number, numOfDigits: number) => {
    let result = num.toString();
    while (result.length < numOfDigits) result = "0" + result;
    return result;
  };

  return pokemon ?
    <div>
      <h1>{pokemon.name}</h1>
      <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pad(pokemon.id, 3) + ".png"} width="200" alt="pokemon pic"/>
      <div>
        <span>height</span><br/>
        <strong>{pokemon.height}</strong>
      </div>
      <div>
        <span>weight</span><br/>
        <strong>{pokemon.weight}</strong>
      </div>
    </div>
    : <ClipLoader color="white"/>
}

export default PokemonDetails;