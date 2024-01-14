export function randomizer(a){
    let choose = Math.floor((Math.random() * a)+1);
    return choose;         
}

export function afficherDans(element1,element2){
    element1.append(element2);
}
export function afficherApp(element){
    document.body.append(element);
}
export function sourceURL(element,url){
    element.src = url;   
}
export function bonFormat(img,width,height){
    img.style.width=`${width}px`;
    img.style.height =`${height}px`;
}
export function bonFormatPr(img,width,height){
    img.style.width=`${width}%`;
    img.style.height =`${height}%`;
}
export function formatBouton(button,width,height){
    button.style.width=`${width}px`;
    button.style.height =`${height}px`;
}
export function defPos(element,top,right){
    element.style.position = "absolute";
    element.style.top = `${top}px`;
    element.style.right = `${right}px`;
}
export function afficher(element){
    element.style.display = "block";
}
export function masquer(element){
    element.style.display = "none";
}
