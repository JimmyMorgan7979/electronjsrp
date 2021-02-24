//Dice roll function, call it with randomNumber(what sided dice you want rolled)
function randomNumber(upper){
    return Math.floor(Math.random() * upper) + 1;
}

// Section for manipulating the DOM
function fillHealth(x){
    document.querySelector('.health').style.height=`${x}%`;
}
function fillMana(x){
    document.querySelector('.mana').style.height=`${x}%`;
}

fillMana(100);;
fillHealth(100);