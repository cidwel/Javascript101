//Calculate the radio of a circle
/*var radio = prompt("Insert the radio of the circle");
 var area=2*Math.PI*radio;
 document.write("<h3>El area del circulo es </h3>" + area);
 */

document.getElementById('rollDice').addEventListener("click",getDiceRoll);
document.getElementById('saveRoll').addEventListener("click",saveRoll);
//document.getElementById('paintList').addEventListener("click",paintList);
var rollResult;
var savedRollResult;
//var arrayRolls = [];


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
    //arrayRolls.push(savedRoll);
    return savedRoll;

}
// function paintList(){
//
//     let tabla= '';
//     tabla += '<table id="tableRoll" border="2" cellspacing="0">';
//     for (let i = 0; i < arrayRolls.length; i++) {
//         tabla += "<tr><td>  "+arrayRolls[i] +"</td></tr>";
//     }
//     tabla += '</tabla><br>';
//
//     document.getElementById('tableRolls').innerHTML = tabla;
//
// }
//
// function eraseBoard(){
//
//     let elemTable = document.getElementById('tableRolls');
//     elemTable.parentNode.removeChild(elemTable);
//     return false;
//
// }
