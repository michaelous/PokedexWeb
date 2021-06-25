import React from 'react'
import {Box, Modal} from "@material-ui/core";
import FullWidthTabs from "./tabs";
import arrow from "../../images/svg/left-arrow.svg";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useDispatch, useSelector} from "react-redux";
import {getID, getImg, getName, getType} from "../../helpers/pokemonHelper";
import {LeftArrow} from "../styled/popup/leftArrow";
import {PokemonType} from "../styled/popup/pokemonType";
import {PokemonPopupImg} from "../styled/popup/pokemonPopupImg";

export default function PokemonPopup({data, closePopup, open}) {
    const dispatch = useDispatch();
    const pokemonType = getType(data);

    const addHandler = (data) => {
        return dispatch({type: "ADD", product: data});
    }

    const {favorites} = useSelector(state => ({
        favorites: state.reducer.favorites
    }));

    const isFavorite = (pokemon) => {
        return favorites.some(({name}) => name === pokemon.name);
    }

    return (
        <Modal onClose={closePopup} open={open} className={"modal"}>
            <Box className={`popupAdvView ${pokemonType}`} display="flex" flexDirection="column">
                <Box className={"topBar"} width="100%" display="flex" justifyContent="space-between">
                    <LeftArrow onClick={closePopup} alt={"arrow"} src={arrow}/>
                    <FavoriteBorderIcon onClick={() => addHandler(data)}
                                        className={`heartIcon ${isFavorite(data) ? `favorite` : ''}`}/>
                </Box>
                <Box className={"typeBar"} width="100%" display="flex" justifyContent="space-between">
                    <p>{getName(data)}</p>
                    <p>{getID(data)}</p>
                </Box>
                <PokemonType className={`${pokemonType}`}> {pokemonType} </PokemonType>
                <PokemonPopupImg src={getImg(data)} alt={'img'}/>
                <FullWidthTabs data={data}/>
            </Box>
        </Modal>
    )
}