import React, {useState} from 'react'
import axios from "axios";
import {PokemonTile} from "./styled/pokemonTile";
import {PokemonImg} from "./styled/pokemonImage";
import {PokemonName} from "./styled/PokemonTileName";
import PokemonPopup from "./popup/pokemonPopup";
import {imgFromURL} from "../helpers/pokemonHelper";
import {PokemonWrapper} from "./styled/pokemonWrapper";

export default function PokemonList({pokemons}) {
    const [pokemonData, selectPokemonData] = useState('');
    const [open, setOpen] = useState(false);

    const handlePopup = (url) => {
        axios.get(url).then(response => selectPokemonData(response.data))
        setOpen(true);
    }

    const closePopup = () => {
        selectPokemonData('');
        setOpen(false);
    }

    return (
        <PokemonWrapper>
            {pokemons.map(({name, url}) => (
                <PokemonTile key={name} onClick={() => handlePopup(url)}>
                    <PokemonName> {name} </PokemonName>
                    <PokemonImg alt={'pokemon'} src={imgFromURL(url)}/>
                </PokemonTile>
            ))}

            {pokemonData && <PokemonPopup open={open}
                                          data={pokemonData}
                                          closePopup={closePopup}/>}
        </PokemonWrapper>
    )
}