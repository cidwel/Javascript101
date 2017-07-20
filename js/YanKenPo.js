
let p1Choice="";
let cpuChoice="";
const choices = ['rock', 'paper', 'scissors'];

function playerChoose(context) {

    p1Choice = context.id;
    cpuChoose();
    setImage(p1Choice,cpuChoice);

    return p1Choice;
}

function calculateChoices(player, cpu) {
    // Its much easier to do this by using only integers, i.e 1, 2, 3, and to use a modulo operator. And to apply rock as 1,
    // paper as 2, and scissors as 3. You subtract x - y (x, being player chosen and y being computer chosen) and take its modulo of 3.
    // So (x-y) % 3. If == 0 then its a tie. If == 1, player wins. If == 2, computer wins.
    const p1ChoiceIndex = choices.indexOf(player);
    const p2ChoiceIndex = choices.indexOf(cpu);

    let resultFight = '';
    if ((p1ChoiceIndex + 1) % 3 === p2ChoiceIndex) {
        resultFight = choices[p2ChoiceIndex] + ' Wins';
    } else if ((p1ChoiceIndex + 2) % 3 === p2ChoiceIndex) {
        resultFight = choices[p1ChoiceIndex] + ' Wins';
    } else if (p1ChoiceIndex === p2ChoiceIndex) {
        resultFight = 'TIE';
    } else {
        resultFight = choices[p2ChoiceIndex]  +' Wins';
    }
    return resultFight;
}

function cpuChoose(){
    // Computer choice
    const roll = Math.random();
    cpuChoice = '';
    if (roll < 0.33) {
        cpuChoice = "paper";
    } else if(roll <= 0.67) {
        cpuChoice = "rock";
    } else {
        cpuChoice = "scissors";
    }
    // Display computer choice
    const winText = calculateChoices(p1Choice, cpuChoice);
    document.getElementById('resultFight').innerHTML = winText;
}

function setImage(playerselection, cpuselection) {
    const playerimageResource = `./res/yankenpo/${playerselection}.png`;
    const compimageResource = `./res/yankenpo/${cpuselection}.png`;
    $('#playerSelection img').attr('src',playerimageResource);
    $('#computerSelection img').attr('src',compimageResource);
    explode(explode, 5000);
}

function explode(){

    $('#rowSelection').show();
}




