import './App.css';
import React, {useState, useEffect} from 'react';
import PokemonList from "./components/pokemonList";
import axios from 'axios'
import Pagination from "./components/pagination";
import Navbar from "./components/navbar";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=12'
    const [pokemonsData, setPokemonsData] = useState(['']);
    const [currentPageUrl, setCurrentPageUrl] = useState(url);
    const [nextPageUrl, setNextPageUrl] = useState(url);
    const [prevPageUrl, setPrevPageUrl] = useState(url);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(currentPageUrl).then(res => {
            setNextPageUrl(res.data.next)
            setPokemonsData(res.data.results.map(pokemon => pokemon))
            setPrevPageUrl(res.data.previous)
            setLoading(false);
        })
    }, [currentPageUrl]);


    const gotoNextPage = () => setCurrentPageUrl(nextPageUrl)
    const gotoPrevPage = () => setCurrentPageUrl(prevPageUrl)

    return (
        <Provider store={store}>
            <div className="App">
                <Navbar/>
                {!isLoading && <PokemonList pokemons={pokemonsData}/>}
                <Pagination gotoPrevPage={gotoPrevPage}
                            gotoNextPage={gotoNextPage}
                />
            </div>
        </Provider>

    );
}

export default App;
