
var p1Choice = "";
//cpu choose with a math,random() 1~3 both included
var cpuChoice ="";

var paper =1;
var rock =2;
var scissors=3;


function playerchoose(){

}

function resolution() {
// paper beats rocks
    if (p1Choice == paper && cpuChoice == rock) {
        //you win paper wins rock
    } else if (p1Choice == paper && cpuChoice == scissors) {
        //you lose scissors wins paper
    } else {
        //Tied no one win
    }

    if (p1Choice == rock && cpuChoice == scissors) {
        //you win rock wins scissors
    }else if(p1Choice == rock && cpuChoice == paper){
        //you lose paper wins rock
    }else{
        //Tied no one win
    }

    if (p1Choice == scissors && cpuChoice == paper) {
        //you win rock wins scissors
    }else if(p1Choice == scissors && cpuChoice == rock){
        //you lose paper wins rock
    }else{
        //Tied no one win
    }
}




