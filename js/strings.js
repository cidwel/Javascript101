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