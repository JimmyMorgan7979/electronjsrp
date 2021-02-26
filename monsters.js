let monsters = [
    {},
    {
        name: 'Slime',
        attack: 1,
        defense: 1,
        health: 5,
        monsterId:1
    },
    {
        name: "Orc",
        attack:2,
        defense:2,
        health:5,
        monsterId:2
    }
    

];

let currentMonster = 0;
function randomEncounter(){
    let select = randomNumber(2);
    console.log(select)
    currentMonster = monsters[select];
    console.log(currentMonster.name);
}




