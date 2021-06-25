export const getName = (data) => {
    return data.name;
}

export const getID = (data) => {
    return `#${data.id}`;
}

export const getType = (data) => {
    return data.types[0].type.name
}

export const getHeight = (data) => {
    return data.height;
}

export const getWeight = (data) => {
    return data.weight;
}

export const getImg = (data) => {
    return data.sprites.other['official-artwork']['front_default'];
}

export const getMove = (data, index) => {
    return data.moves[index].move.name;
}

export const getBaseExp = (data) => {
    return data.base_experience;
}

export const getAbility = (data) => {
    return data.abilities[0]?.ability.name;
}

export const getHPStats = (data) => {
    return data.stats[0].base_stat;
}

export const getSpeciesName = (data) => {
    return data.species.name
}

export const getAtkStats = (data) => {
    return data.stats[1].base_stat;
}

export const getDefStats = (data) => {
    return data.stats[2].base_stat;
}

export const getSpecialStats = (data) => {
    return data.stats[3].base_stat;
}


export const imgFromURL = (data) => {
    const ID = parseInt(data.split('https://pokeapi.co/api/v2/pokemon/')[1]);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png`
}