import {Box, Modal} from "@material-ui/core";
import React from "react";
import {FavPokemon} from "./styled/favourites/favPokemon";
import {ShrugFace} from "./styled/favourites/shrugFace";
import {RemovePokemon} from "./styled/favourites/removePokemon";
import {useDispatch, useSelector} from "react-redux";
import {getID, getImg, getName, getType} from "../helpers/pokemonHelper";
import {PopupHeader} from "./styled/favourites/popupHeader";


export default function FavoritesPopup({closePopup, open}) {
    const dispatch = useDispatch();
    const {favorites} = useSelector(state => ({
        favorites: state.reducer.favorites
    }));


    const removePokemonHandler = (data) => {
        return dispatch({type: "REMOVE", product: data});
    }

    return (
        <Modal onClose={closePopup} open={open} className={"modal"}>
            <Box className="favPokemons" display={"flex"} flexDirection={"column"}>
                <PopupHeader>Your Favourites Pokemons</PopupHeader>
                {favorites.map((value) => {
                    return <FavPokemon key={value.name}>
                        <p>{getName(value)} {getID(value)}</p>
                        <p>{getType(value)}</p>
                        <img src={getImg(value)} alt={'img'}/>
                        <RemovePokemon onClick={() => removePokemonHandler(value)}>Remove</RemovePokemon>
                    </FavPokemon>
                })}

                {favorites.length === 0 &&
                <Box display={"flex"} flexDirection={"column"}
                     justifyContent={"center"} alignItems={"center"}
                     className={"noFavourites"}
                     width={"100%"}
                     height={"100%"}>
                    <p>No favourites Pokemons!</p>
                    <ShrugFace>¯\_(ツ)_/¯</ShrugFace>
                    <p>Pick them!</p>
                </Box>}
            </Box>
        </Modal>

    )
}