import { useEffect, useState } from 'react';

export type usePokemonResult = {
  pokemon?: Pokemon;
  error?: Error;
}

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
}

export default function usePokemon(name: string): usePokemonResult {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async function () {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name, { signal });
        if (!response.ok) {
          setError(new Error('Could not fetch Pokemon data with status: ' + response.status));
        } else {
          setPokemon(await response.json() as Pokemon);
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

  return { pokemon, error };
}