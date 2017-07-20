// let frase = prompt("Dime una frase");
// let fraseStr = new String(frase);
// let lowerFraseStr = fraseStr.toLowerCase();
// let trimmedFraseStr = lowerFraseStr.replace(/\s/g, '');
//
// document.getElementById("resultFrase").innerHTML = lowerFraseStr;
// document.getElementById("numLetras").innerHTML = trimmedFraseStr.length.toString();

function showMessage() {
    //Show message in alert()
    let textbox = document.getElementById('textForTest').value;
    let fraseStr = textbox.toString();
    let lowerFraseStr = fraseStr.toLowerCase();
    let trimmedFraseStr = fraseStr.replace(/\s/g, '');

    document.getElementById("resultFrase").innerHTML = lowerFraseStr;
    document.getElementById("numLetras").innerHTML = trimmedFraseStr.length.toString();
    document.getElementById('textForTest').value = ' ';
}