
function genNumbers() {

    let simon = [];

    while (simon.length < 4) {
        let number = Math.floor(Math.random() * 4 + 1);
        if (!simon.includes(number)) {
            simon.push(number);
        }
    }
    console.log(simon);
    return simon;
}

function paintNumbers(numbers){

    let boxes = '<table class=" table-bordered table-striped">';

    for (let i=0; i<numbers.length; i+= 2) {
        let number1 = numbers[i];
        let number2 = numbers[i+1];
        boxes += `
           <tr>
            <td onclick="selectNumber(${number1})" height="100" width="100" id="box_${number1}"><h2>${number1}</h2></td>
            <td onclick="selectNumber(${number2})" height="100" width="100" id="box_${number2}"><h2>${number2}</h2></td>
           </tr>
        `
    }
    boxes += '</table>';
    let simonDom = document.getElementById('simon');
    simonDom.innerHTML = boxes;
}

function selectNumber(number) {
    console.log(number);
    var resultMsg = "";
    if (Math.min(...numbers) == number) {
        console.log('vas bien');

        let simonDom = document.getElementById(`box_${number}`);
        simonDom.innerHTML = '';

        let selectedNumberIndex = this.numbers.indexOf(number);
        this.numbers.splice(selectedNumberIndex,1);

        if (!numbers.length) {
            resultMsg = document.getElementById('lastMessage');
            resultMsg.innerHTML = 'YOU WIN';

        }
    } else {
        resultMsg = document.getElementById('lastMessage');
        paintNumbers(this.copyNumbers);
        this.numbers = this.copyNumbers.slice();
        resultMsg.innerHTML = 'YOU LOSE';
    }
}

function startGame() {
    this.numbers = genNumbers();
    this.copyNumbers = this.numbers.slice();
    resultMsg = document.getElementById('lastMessage').innerHTML = "";
    paintNumbers(this.numbers);

}

startGame();




