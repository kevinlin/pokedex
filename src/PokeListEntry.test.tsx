import { render, screen } from '@testing-library/react';
import { Pokemon } from './PokeList';
import PokeListEntry from './PokeListEntry';

describe('PokeListEntry.tsx', () => {
  const bulbasaur: Pokemon = {
    "dex": 1,
    "name": "Bulbasaur",
    "id": "BULBASAUR",
  };
  const ivysaur: Pokemon = {
    "dex": 2,
    "name": "Ivysaur",
    "id": "IVYSAUR",
  }
  const venusaur: Pokemon = {
    "dex": 3,
    "name": "Venusaur",
    "id": "VENUSAUR",
  }

  test.each([bulbasaur, ivysaur, venusaur])('PokeListEntry.tsx should render pokemon: %s', (pokemon) => {
    render(<PokeListEntry pokemon={pokemon}/>);
    expect(screen.getByText(pokemon.name, { exact: false })).toBeInTheDocument();
  });

});