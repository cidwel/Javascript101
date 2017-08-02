//First mechanism of object creation
function Hero(job){
    this.job = job;
    this.race = "human";
    this.level = 1;
    this.healthPoints = 10;
}

let mage = new Hero("Mage");
mage.spell = "fireball";

console.log(mage.job + " Is walking trough the path");

//Literal definition of an object
let Monster ={
    job :"Brute",
    race:"Orc"
};

console.log("A monster appeared! It's an " + Monster.race);
Monster.race="Goblin";
console.log("Also a " + Monster.race + " appeared");
console.log(Monster.race + " Is attacking " + mage.job);
console.log(mage.job + " loses 2 HP ")
console.log((mage.healthPoints -2)+ " TOTAL HEALTH POINTS" );
console.log("Hero cast " + mage["spell"] + " killing " + Monster.race);
console.log(mage.job + " Has reach LVL: " + (mage.level + 1));

//parte de herencia

let guild={
    name:'Guild of Mages',
    num:35,
    whatsGuildName:function () {
       text = "Name of the guild is : "+this.name;
        console.log(text);
        return text;
    }
}


let division=Object.create(guild);
let character=Object.create(division);
let companion=Object.create(character);

let guildName = character.whatsGuildName();
console.log(guildName + " " + mage.job);
character.printCompanions=function () {
   text="Number of companions are "+companion.num;
    console.log(text);
    return text;
}
companion.printCompanions();