import React, {useEffect, useState} from 'react'
import axios from "axios";

export default function PokemonImage(data) {
    const [pokemonImg, setPokemonImg] = useState('');
    const [pokemonName, setPokemonName] = useState('');

    useEffect(() => {
        axios.get(data.url).then(res => {
            setPokemonName(res.data.name);
            setPokemonImg(res.data.sprites.other['official-artwork']['front_default']);
        })
    }, [data]);


    return (
        <div>
            <p>{pokemonName}</p>
            {<img className={'pokemonImg'} alt={'pokemon'} src={pokemonImg}/>}
        </div>
    )
}