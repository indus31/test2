import * as classModule from "./class.js";
import {moveLeft, moveRight, moveTitle} from "./anim.js";
import {Pokemon} from "./class.js";
import {randomizer,masquer,afficherDans,afficherApp,sourceURL,bonFormat,bonFormatPr,formatBouton,defPos,afficher} from "./utils.js";

let pokemonIntro = new Pokemon;
let red = document.querySelector("#red");

let titre = document.querySelector("#titre");

let imgPoke = document.querySelector("#imgPoke");

async function getSpriteById(nbr){
    let urlApi = 'https://pokeapi.co/api/v2/pokemon/'+ nbr;
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();  
    console.log(dataTransformed);
    imgPoke.src = dataTransformed.sprites.versions["generation-i"]["red-blue"].front_default;
    return dataTransformed;
};
getSpriteById(7);
console.log(pokemonIntro);



moveTitle(titre);
moveRight(imgPoke);
// moveLeft(imgPoke);

