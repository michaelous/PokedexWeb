import {createStore, combineReducers} from "redux";

const initalState = {
    favorites: []
};

export const add = (product, state) => {
    const updatedFav = [...state.favorites];
    if (!updatedFav.some(({name}) => name === product.name)) {
        updatedFav.push({...product});
    }
    return {...state, favorites: updatedFav};
};

export const remove = (product, state) => {
    const updatedFav = [...state.favorites];
    const updatedItemIndex = updatedFav.findIndex(item => item === product);
    updatedFav.splice(updatedItemIndex, 1);
    return {...state, favorites: updatedFav};
};

function reducer(state = initalState, action) {
    switch (action.type) {
        case "ADD":
            return add(action.product, state);
        case "REMOVE":
            return remove(action.product, state);
        default:
            return state;
    }
}

export const store = createStore(combineReducers({reducer}));
