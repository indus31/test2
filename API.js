
export async function getPokeByOne(nbr,pokemon){
    let urlApi = 'https://pokeapi.co/api/v2/pokemon/'+ nbr;
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();  
    console.log(dataTransformed);
    pokemon.nom = dataTransformed.name;
    pokemon.numero = dataTransformed.id;
    pokemon.type1 = dataTransformed.types[0].type.name;
    if(dataTransformed.types.length == 2){
            pokemon.type2 = dataTransformed.types[1].type.name;
    }else{
            pokemon.type2 = "none";
    }
    
    pokemon.sprite = dataTransformed.sprites.versions["generation-i"]["red-blue"].front_default,
    pokemon.backSprite = dataTransformed.sprites.versions["generation-i"]["red-blue"].back_default;
    console.log(pokemon);
    return pokemon;
}

export async function getAllPokeByGeneration(nbr){
    let urlApi = 'https://tyradex.vercel.app/api/v1/gen/'+ nbr;
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();
    return dataTransformed;
}
export async function getPokeById(nbr){
    let urlApi = 'https://tyradex.vercel.app/api/v1/pokemon/'+ nbr;
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();
    return dataTransformed;
}




