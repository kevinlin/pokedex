import { useEffect, useState } from 'react';

export type usePokemonResult = {
  pokemons?: Pokemon[];
  error?: Error;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export default function usePokemon(): usePokemonResult {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async function () {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50', { signal });
        if (!response.ok) {
          setError(new Error('Could not fetch Pokemon data with status: ' + response.status));
        } else {
          const responsePayload = await response.json() as PokemonListResponse;
          setPokemons(responsePayload.results);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('' + err));
        }
      }
    })();
    return () => controller.abort();
  }, []);

  return { pokemons, error };
}