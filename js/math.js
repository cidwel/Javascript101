//Calculate the radio of a circle
/*var radio = prompt("Insert the radio of the circle");
 var area=2*Math.PI*radio;
 document.write("<h3>El area del circulo es </h3>" + area);
 */

document.getElementById('rollDice').addEventListener("click",getDiceRoll);
document.getElementById('saveRoll').addEventListener("click",saveRoll);

var rollResult;
var savedRollResult;

function getDiceRoll(){
    var random = Math.random();
    var result = Math.floor(random * (Math.max(201) - Math.min(1)) + Math.min(1));
    document.getElementById('result').innerHTML = result.toString();
    rollResult = result;
    return result;

}
function saveRoll(){
    var savedRoll = rollResult;
    document.getElementById('savedResult').innerHTML = savedRoll;
    savedRollResult = savedRoll;
    return savedRoll;
}
