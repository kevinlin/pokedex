import { render, screen } from '@testing-library/react';
import PokeList, { Pokemon } from './PokeList';

describe('PokeList.tsx', () => {
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

  it('should render the name from props.pokemons', () => {
    render(<PokeList pokemons={[bulbasaur, ivysaur]}/>);

    expect(screen.getAllByTestId('pokeList-entry').length).toEqual(2);
    expect(screen.getByText('Bulbasaur', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Ivysaur', { exact: false })).toBeInTheDocument();
  });

  test.each([bulbasaur.name, ivysaur.name, venusaur.name])('PokeListEntry.tsx should render pokemon: %s', (name) => {
    render(<PokeList pokemons={[bulbasaur, ivysaur, venusaur]}/>);

    expect(screen.getAllByTestId('pokeList-entry').length).toEqual(3);
    expect(screen.getByText(name, { exact: false })).toBeInTheDocument();
  });

});