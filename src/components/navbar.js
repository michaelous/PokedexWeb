import React, {useState} from 'react'
import {NavBar} from "./styled/navbar";
import {Logo} from "./styled/logo";
import PokedexLogo from "../images/PokedexLogo.png"
import {useSelector} from "react-redux";
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import {FavoritesQty} from "./styled/quantity";
import {FavoriteWrapper} from "./styled/favouriteWrapper";
import FavoritesPopup from "./favouritesPopup";


export default function Navbar() {
    const [popup, setPopup] = useState(false);
    const closePopup = () => setPopup(false);
    const openPopup = () => setPopup(true)

    const {favorites} = useSelector(state => ({
        favorites: state.reducer.favorites
    }));

    return (
        <NavBar>
            <a href={'google.com'}>
                <Logo alt={'logo'} src={PokedexLogo}/>
            </a>

            <FavoriteWrapper>
                <GradeOutlinedIcon className={"favoritesIcon"}
                                   cursor="pointer"
                                   alt={"favouritesIcon"}
                                   onClick={openPopup}/>
                <FavoritesQty>{favorites.length}</FavoritesQty>
            </FavoriteWrapper>
            {popup && <FavoritesPopup open={popup} closePopup={closePopup}/>}
        </NavBar>
    )
}