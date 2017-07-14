
var num = 11 //prompt user to enter the number
var num = parseInt(num); //parse the num to number



function writteboard(){

    let tabla = '';

    tabla += '<br><table id="table11" border="2" cellspacing="0">';
    for (let i = 1; i <= 10; i++) {
        tabla += "<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>";
        // tabla += `<tr><td>${num} x ${i} = ${num*i} </td></tr>`;
    }
    tabla += '</tabla><br>';

    document.getElementById('table').innerHTML = tabla;
}
function eraseBoard(){

    let elemTable = document.getElementById('table11');
    elemTable.parentNode.removeChild(elemTable);
    return false;

}



