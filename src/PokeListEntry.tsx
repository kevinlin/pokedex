import { Pokemon } from './PokeList';

type PokeListEntryProps = {
  pokemon: Pokemon;
};

const PokeListEntry = ({ pokemon }: PokeListEntryProps) => <li data-testid="pokeList-entry">{pokemon.dex} - {pokemon.name}</li>;

export default PokeListEntry;