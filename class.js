// export * from "./main.js";
// console.log("class");


export class Pokemon{
    constructor(nom,numero,type1,type2,movePool,stat,sprite,backSprite){
        this.nom = nom;
        this.numero = numero;
        this.type1 = type1;
        this.type2 = type2;
        // this.stat = new Stat;
        // this.movePool = new movePool;
        this.sprite = sprite;
        this.backSprite = backSprite;
    }
    showSprite(){
        console.log(this.sprite);
    }

}