//If Structure
var hora=12;
var sayHora = "hora";
if(hora <= 12){
    sayHora = "Buenos días"
}else if((hora<=17)&&(hora>12)) {
    sayHora = "Buenas tardes"
}else {
    sayHora = "Buenas noches"
}

//Switch
var diaSemana=1
switch (diaSemana){
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    default:
        alert("Sabado");
        break;
}