var randomArray = [1,2,3,4];
//sets array variables to random numbers
function CreateLottoValues() {
    for (var i = 0; i < randomArray.length; i++) {
        var newNumber = Math.floor(Math.random() * 4 + 1);
        console.log(" - "+newNumber);

        if(randomArray[i].valueOf() === newNumber){
            newNumber = Math.floor(Math.random() * 4 + 1);
            console.log(" --- "+newNumber);
        }else{
            randomArray[i] = newNumber;
        }
        console.log(randomArray[i]);
        }
    return newNumber;
}

//create table
function UpdateTable() {
    CreateLottoValues();
    for (var i = 0; i < randomArray.length; i++) {
            tmp1 = 'box' + (i * 1 + 1);
            tmp2 = 'box' + (i * 1 + 2);
            tmp3 = 'box' + (i * 1 + 3);
            tmp4 = 'box' + (i * 1 + 4);

            document.getElementById(tmp1).innerHTML = Math.floor(Math.random() * 4 + 1);
            document.getElementById(tmp2).innerHTML = Math.floor(Math.random() * 4 + 1);
            document.getElementById(tmp3).innerHTML = Math.floor(Math.random() * 4 + 1);
            document.getElementById(tmp4).innerHTML = Math.floor(Math.random() * 4 + 1);

    }
}



    

