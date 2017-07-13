//While
/*var i = 0;
 while(i<5){
 alert("Durum durum" + i);
 i++
 }
 alert("Du dah dah dah " +i)

//For
for(var i=0;i< 5; i++){
    alert("El numero es "+ i );
}
 */
var num = 11 //prompt user to enter the number
var num = parseInt(num); //parse the num to number
document.getElementById('btnInfo').addEventListener("click",writteboard);

function writteboard() {
    document.write('<table border="2" cellspacing="0">');
    for (var i = 1; i <= 10; i++) {
        document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
    }
    document.write("</table>");
    document.write('<br><button type="button"class="btn btn-default btn-lg" id="btnRefresh" onclick="history.go(0)" value="Refresh">Reload Page</button>');
}

