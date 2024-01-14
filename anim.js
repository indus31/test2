export * from "./main.js";
import {randomizer,masquer,afficherDans,afficherApp,sourceURL,bonFormat,bonFormatPr,formatBouton,defPos,afficher} from "./utils.js";
console.log("anim");
export function moveTitle(img){
    let top = -25;
    img.style.top = top + `%`;
    for(let i = 0;i<10;i++){
        const countdown = setInterval(function(){
            if(top< 10){
            top += 0.1;
            img.style.top = top + `%`;
            }else{
             clearInterval(countdown);
            }
        },100);        
        
     }   
       
  }     
export function moveLeft(img){
    let left = 30;
    img.style.left = left + `%`;
    for(let i = 0;i<10;i++){
        const countdown = setInterval(function(){
            if(left>-10){
                // console.log(left);
                left -= 0.1;
                img.style.left = left + `%`;
            }else{
                clearInterval(countdown);
            }
        },50);        
        
     }   
}

export function moveRight(img){
    let left = 70;
    img.style.left = left + `%`;
    for(let i = 0;i<10;i++){
        const countdown = setInterval(function(){
            if(left>30){
                // console.log(left);
                left -= 0.1;
                img.style.left = left + `%`;
            }else{
                clearInterval(countdown);
            }
        },50);        
        
     }   
        
}   
// export function switchImgIntro(){
//     setTimeout(function(){

//     },5000)
//   }

    

