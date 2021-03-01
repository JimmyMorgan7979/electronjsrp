'use strict';

const fs = require('fs');
var player = {};
//UPDATE and SAVE PLAYER
function updatePlayer(){
    let data = JSON.stringify(player);
    fs.writeFileSync(`${player.name}.json`, data);
}
//LOAD PLAYER FROM FILE
// TODO::::::::::::::::::: CHANGE THE LOAD FILE TO INCLUDE ALL CHARACTERS SAVED


function loadPlayer(){
    let rawdata = fs.readFileSync('Jimmy.json');
    player = JSON.parse(rawdata); 
    console.log(player)
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


 
