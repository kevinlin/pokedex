import PokeListEntry from './PokeListEntry';

export interface Pokemon {
  dex: number;
  name: string;
  id: string;
}

export type PokeListProps = {
  pokemons: Pokemon[];
};

export default function PokeList({ pokemons }: PokeListProps) {
  // const index = Math.floor(Math.random() * 100);

  return <>
    {/*<h3>Hello, {name}!</h3>*/}
    {/*<img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/0" + index + ".png"} width="200" alt="pokemon pic" />*/}
    <ul>
      {pokemons.map(
        (pokemon) => <PokeListEntry key={pokemon.id + pokemon.dex} pokemon={pokemon}/>
      )}
    </ul>
  </>;
}
