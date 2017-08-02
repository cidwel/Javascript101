/**
 Se deberá crear un objeto que permita instanciar edificios, para ello crearemos un constructor llamado Edificio al que se le pasará como parámetros la calle, el número y el código postal.
 Se crearán los siguientes métodos asociados al constructor Edificio:
 •       agregarPlantasyPuertas(numplantas,puertas): Se le pasará el número de plantas que queremos crear en el piso y el número de puertas por planta. Cada vez que se llame a este método,
 añadirá el número de puertas y plantas indicadas en los parámetros, a las que ya están creadas previamente en el edificio.
 •       modificarNumero(nuevoNumero): Se permitirá modificar el número del edificio, para ello se le pasará como parámetro el nuevo número.
 •       modificarCalle(nuevaCalle): Se permitirá modificar la calle, para ello se le pasará el nombre de la nueva calle a modificar.
 •       modificarCodigoPostal(nuevoCP): Se permitirá la modificación del código postal, para ello se proporcionará como parámetro el nuevo código postal.
 •       mostrarCalle(): Método que devolverá el nombre de la calle donde está situado el edificio.
 •       mostrarNumero(): Método que devolverá el número donde está situado el edificio.
 •       mostrarCodigoPostal(): Método que mostrará el código postal asociado a la población o ciudad donde está situado el edificio
 •       agregarPropietario(nombre,planta,puerta): Se permitirá añadir un nuevo propietario donde se le pasará el nombre del propietario, el número de planta y el número de puerta. Se le asignará dicho propietario al piso en cuestión.
 •       mostrarPlantas(): Método que permitirá mostrar todos los propietarios de cada puerta del edificio.
 Cada vez que se cree un edificio se mostrará un mensaje similar al siguiente:
 Nuevo Edificio construido en calle: XXXXXXXX, nº: XX, CP: XXXXX
 */


var building ={
    street:'Juan Llorens',
    number:18,
    postalCode:46008,
}

var owner={
    name:'',
    floor:'',
    door:''
}
var owners = [owner];

    function addFloorsandDoors(numFloors, numDoors){
        numFloors=null,
        numDoors= null
    }
    function modifNumber(newNumber){
        number = newNumber;
    }
    function modifyStreet(newStreet){
        street = newStreet;
    }
    function modifyPC(newPC){
        postalCode = newPC;
    }

    function showStreet(){
        this.street = building.street;
        return street;
    }
    function showNumber(){
        this.number = building.number;
        return number;
    }
    function showPostalCode(){
        this.postalCode = building.postalCode;
        return postalCode;
    }

    function addOwner(){
        var ownerName = document.getElementById('newOwnerName').value;
        var floor = document.getElementById('newOwnerFloor').value;
        var door = document.getElementById('newOwnerDoor').value;
        this.owner.name = ownerName;
        this.owner.floor = floor;
        this.owner.door = door;
        document.getElementById('ownerFloor').innerHTML ="In " + owner.floor + " floor ";
        document.getElementById('ownerDoor').innerHTML = " ,door :" + owner.door;
        document.getElementById('ownerName').innerHTML = "Lives " + owner.name;
        owners.push(ownerName,floor,door);
        console.log(owners);
    }

    function showFloors(ownerName, floor){

    }
    function changeOwnerName() {
        var newOwnerName = document.getElementById('newOwnerName').value;
        this.owner.name = newOwnerName.toString;
        document.getElementById('ownerName').innerHTML = newOwnerName;
    }

document.getElementById('buildingStreet').innerHTML = showStreet();
document.getElementById('buildingNumber').innerHTML = showNumber();
document.getElementById('buildingPostalcode').innerHTML = showPostalCode();





