import { FC } from "react";

type PokeListEntryProps = {
    name?: string;
};

const PokeListEntry: FC<PokeListEntryProps> = ({ name = "Bulbasaur" }) => {
    const index = Math.floor(Math.random() * 100);

    return (
        <>
            <h3>Hello, {name}!</h3>
            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/0" + index + ".png"} width="200" alt="pokemon pic" />
        </>
    );
};

export default PokeListEntry;