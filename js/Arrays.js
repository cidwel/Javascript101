
var arrayRolls = new Array();

function paintSavedRolls() {
    if(arrayRolls.length <= 5){
        document.getElementById('arrayRolls').innerHTML = arrayRolls;
    }else{
        console.log("Max saved rolls");
    }
}