'use strict';
const fs = require('fs');
let player = {};
//UPDATE PLAYER
function updatePlayer(){
    let data = JSON.stringify(player);
    fs.writeFileSync(`${player.name}.json`, data);
}



//CREATE PLAYER

function createPlayer(x){
    player.name = x;
    player.level = 1;
    player.attack = randomNumber(20);
    player.defense = randomNumber(20);
    player.health = 10;
    updatePlayer();
    return player;
}

//LEVEL UP
function levelUp(){
    player.level += 1;
    player.attack += 2;
    player.defense += 2;
    player.health += 2;
    updatePlayer();
}


 
