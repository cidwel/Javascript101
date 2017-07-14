var frase = prompt("Dime una frase");
var fraseStr = new String(frase);
var lowerFraseStr = fraseStr.toLowerCase();
var trimmedFraseStr = lowerFraseStr.replace(/\s/g, '');

document.getElementById("resultFrase").innerHTML = lowerFraseStr;
document.getElementById("numLetras").innerHTML = trimmedFraseStr.length.toString();
