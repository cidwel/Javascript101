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
 Cada vez que se cree un edificio se mostrará un mensaje similar al siguiente:
 Nuevo Edificio construido en calle: XXXXXXXX, nº: XX, CP: XXXXX
 */


//let occupiedClicks = 0;

var owners = [];
var buildings = [];

function addBuilding(){
    let street = document.getElementById('street').value;
    let number = document.getElementById('number').value;
    let postalCode = document.getElementById('postalCode').value;

    let floorsAndDoors = addFloorsandDoors();
    let numFloors = floorsAndDoors.numFloors;
    let numDoors = floorsAndDoors.numDoors;

    var building={
        street: street,
        number: number,
        postalCode: postalCode,
        numFloors : numFloors,
        numDoors: numDoors
    }

    if(street === ""){
        cleanTexts();
        document.getElementById('buildingStreet').innerHTML = "Please I need to know the name of the Street";
    }
    else if(number === ""){
        cleanTexts();
        document.getElementById('buildingNumber').innerHTML = "Please I need to know the number of the building";
    }else{
        if(buildings.find(x => {return x.number === number && x.street === street})){
            document.getElementById('usedBuildNumber').innerHTML = "That number is already in use";
        }else{
            buildings.push(building);
            buildingsManagement();
            console.log(buildings.length + " buildings into the array");
            cleanTexts();
            buildingsRetrieve();
            showStreet();
            showNumber();
            showPostalCode();
        }
    }

    function addFloorsandDoors(){
        let numFloors= document.getElementById('numFloors').value;
        let numDoors= document.getElementById('numDoors').value;
        return {
            numFloors: numFloors,
            numDoors: numDoors
        };
    }
    return building;
}
function cleanTexts(){
    document.getElementById('buildingStreet').innerHTML = "";
    document.getElementById('buildingNumber').innerHTML = "";
    document.getElementById('buildingPostalcode').innerHTML = "";
    document.getElementById('usedBuildNumber').innerHTML = "";
    document.getElementById("unUsedStreet").innerHTML = "";
    document.getElementById("unUsedPC").innerHTML = "";
    document.getElementById("unUsedNumber").innerHTML = "";
    document.getElementById('isOccupied').innerHTML ="";
    document.getElementById('ownerName').innerHTML = "";

}
function buildingsManagement() {
    localStorage.setItem("buildings",JSON.stringify(buildings));
}
function buildingsRetrieve() {
    buildings = JSON.parse(localStorage.getItem("buildings"));
    document.getElementById('buildingsList').innerHTML = localStorage.getItem("buildings");
}
function hideBuildingList() {
    document.getElementById('buildingsList').innerHTML = "";
}

function showStreet(){
    buildings.find(x => x.street === street);
    document.getElementById('buildingStreet').innerHTML = "New building deployed in street : "+street.value;

}
function showNumber(){
    buildings.find(x => x.number === number);
    document.getElementById('buildingNumber').innerHTML = "Number : "+number.value;
}
function showPostalCode(){
    buildings.find(x => x.postalCode === postalCode);
    document.getElementById('buildingPostalcode').innerHTML = "PC : "+postalCode.value;

}

// var a = array.filter(val=>{return val<=5;});
function modifyNumber(oldNumber,newNumber){
    oldNumber = document.getElementById("oldNumber").value;
    newNumber = document.getElementById("newNumber").value;
    console.log(oldNumber + " - " + newNumber);
    console.log("------------------");
    for (let i=0; i < buildings.length; i++){
        if(buildings[i].number === oldNumber){
            console.log(true);
            buildings[i].number = newNumber;
        } else {
            console.log("false");
            document.getElementById("unUsedNumber").innerHTML = "This Number does not exist";
        }
    }
    console.log("-----------------");
    cleanTexts();
    buildingsManagement();
}

function modifyStreet(oldName, newName) {

    oldName = document.getElementById("oldName").value;
    newName = document.getElementById("newName").value;
    console.log(oldName + " - " +  newName);
    console.log("-----------------");
    for (let i=0; i < buildings.length;i++){
        console.log(buildings[i].street);
        if(buildings[i].street === oldName){
            console.log("true");
            buildings[i].street = newName;
            break;
        }else{
            console.log("false");
            document.getElementById("unUsedStreet").innerHTML = "This Street does not exist";
        }
    }
    console.log("-----------------");

    cleanTexts();
    buildingsManagement();
}

function modifyPC(oldPC, newPC){
    oldPC = document.getElementById("oldPc").value;
    newPC = document.getElementById("newPc").value
    console.log(oldPC + " - " + newPC);
    console.log("-----------------");
    for (let i=0; i < buildings.length;i++){
        console.log(buildings[i].postalCode);
        if(buildings[i].postalCode === oldPC){
            console.log("true");
            buildings[i].postalCode = newPC;
        }else{
            console.log("false");
            document.getElementById("unUsedPC").innerHTML = "This Postal Code does not exist";
        }
    }
    cleanTexts();
    buildingsManagement();
}

function addOwner(){
    let ownerName = document.getElementById('newOwnerName').value;
    let floor = document.getElementById('newOwnerFloor').value;
    let door = document.getElementById('newOwnerDoor').value;

    let owner={
        name: ownerName,
        floor: floor,
        door: door
    }

    //find just return one object that matches the conditions
    //filter will return an array of objects that matches the conditions
    //arrow function or anonymous function
    if(ownerName === ""){
        document.getElementById('ownerName').innerHTML = "Please fill the form to continue";
    }else{
        if (owners.find(x => x.door === door)) {
            document.getElementById('isOccupied').innerHTML ="this apartment is already occupied";
            /*   let iToldYouToStop = document.querySelector('#isOccupied');
             occupiedClicks++;
             if(occupiedClicks == 2){
             iToldYouToStop.innerHTML = '<h4>' + iToldYouToStop.innerHTML + '</h4>';
             }
             if(occupiedClicks == 4){
             document.getElementById('isOccupied').innerHTML ="this apartment is already OCCUPIED";
             iToldYouToStop.innerHTML = '<h3>' + iToldYouToStop.innerHTML + '</h3>';
             }
             if(occupiedClicks == 6){
             document.getElementById('isOccupied').innerHTML ="PLEASE STOP";

             iToldYouToStop.innerHTML = '<h2>' + iToldYouToStop.innerHTML + '</h2>';
             }
             if(occupiedClicks == 8){
             document.getElementById('isOccupied').innerHTML ="OK FUCK THIS I TRIED";

             iToldYouToStop.innerHTML = '<h1>' + iToldYouToStop.innerHTML + '</h1>';
             }
             if(occupiedClicks == 30){
             document.getElementById('isOccupied').innerHTML ="You dont know when to stop right?";

             iToldYouToStop.innerHTML = '<h1>' + iToldYouToStop.innerHTML + '</h1>';
             }
             if(occupiedClicks == 45){
             document.getElementById('isOccupied').innerHTML ="Achivement Unlocked! Is that what you want to read? OK you are a nice Clicker ";

             iToldYouToStop.innerHTML = '<h1>' + iToldYouToStop.innerHTML + '</h1>';
             }
             if(occupiedClicks == 65){
             document.getElementById('isOccupied').innerHTML ="Do you realise that you are wasting your time? This is not how you want to live. ";

             iToldYouToStop.innerHTML = '<h1>' + iToldYouToStop.innerHTML + '</h1>';
             }*/
        }else{
            owners.push(owner);
            ownersManagement();
            console.log(owners);
            cleanTexts();
        }
    }
}

function ownersManagement(){
    localStorage.setItem("owners",JSON.stringify(owners));
}
function ownersRetrieve() {
    owners = JSON.parse(localStorage.getItem("owners"));
    document.getElementById('ownersList').innerHTML = localStorage.getItem("owners");
}
function hideOwnersList() {
    document.getElementById('ownersList').innerHTML = "";
}

 // mostrarPlantas(): Método que permitirá mostrar todos los propietarios de cada puerta del edificio.

function showFloors(buildingStreet, ownerName){
    buildings.find(x => x.street === buildingStreet);


}

/*LA OTRA MANERA
 if (owners.find(x => { return x.door === door && x.name === ownerName})) {

 */