var rollResult;
var savedRollResult;

function getDiceRoll(min, max){
    min = 9;
    max = 20;
    var result = Math.floor(Math.random() * (max - min )) + min;
    document.getElementById('result').innerHTML = result.toString();
    rollResult = result;
}

function saveRoll(){
    var savedRoll = rollResult;
    document.getElementById('savedResult').innerHTML = savedRoll;
    savedRollResult = savedRoll;
    arrayRolls.push(savedRollResult);
    return savedRoll;
}

function evaluar() {
    let operation = document.getElementById('numberForEvaluate').value;
    let result = eval(operation);
    document.getElementById('evaluateResult').innerHTML = result;
}

function isNumber() {
    let input = document.getElementById('numberForCheck').value;
    if(isNaN(input)){
        document.getElementById('checkingResult').innerHTML = "It's not a number";
    }else{
        document.getElementById('checkingResult').innerHTML = "Its a number";
    }
}

function convert() {
    let input = document.getElementById('numberToConvert').value;
    if(isNaN(input)){
        document.getElementById('conversionResult').innerHTML = "Please insert a float number";
    }else{
        let parsedInput = parseInt(input);
        document.getElementById('conversionResult').innerHTML = "Input number " + input + " has been parsed to " + parsedInput;
    }
}