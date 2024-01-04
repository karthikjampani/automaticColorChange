




function randomColor(){
    let hex = "0123456789ABCDEF";
    let rcolor = "#"

    for(let i = 0; i < 6; i++){
        let pos = Math.floor(Math.random() * 16);
        rcolor = rcolor + hex[pos];
    }
    return rcolor;
};

let setID
let startChangeColor = function(){
    if(!setID){
        let setBgColor = function (){document.body.style.backgroundColor = randomColor();}
        setID = setInterval(setBgColor, 1000);
    }
   
    
}


let stopChangeColor = function(){
    clearInterval(setID);
    setID = null;
}

document.getElementById("start").addEventListener("click",startChangeColor)

document.getElementById("stop").addEventListener("click",stopChangeColor)

