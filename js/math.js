//Calculate the radio of a circle
/*var radio = prompt("Insert the radio of the circle");
var area=2*Math.PI*radio;
document.write("<h3>El area del circulo es </h3>" + area);
*/

document.getElementById('rollDice').addEventListener("click",getDiceRoll);

function getDiceRoll(){
    var random = Math.random();
    var result = Math.floor(random * (Math.max(21) - Math.min(1)) + Math.min(1));
    
    document.getElementById("result").innerHTML = result.toString();

}
