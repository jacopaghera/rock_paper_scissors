const buttonRock = document.querySelector("#chooserock");
const buttonPaper = document.querySelector('#choosepaper');
const buttonScissors = document.querySelector('#choosescissors');

function getComputerChoice() { //function that makes a random choice for the computer
    let array = ["Rock", "Paper", "Scissors"];
    let randomChoice = array[Math.floor(Math.random()*array.length)];
    return randomChoice;
}

function roundGame(playerSelection, computerSelection) { //round function
    if (playerSelection.toLowerCase() === "rock") { //if the choice is rock, based on the computer's choice one of the three quotes will appear.
        if (computerSelection === "Scissors") {
            playerScore++;
            document.querySelector('.result').innerText = "You win the round! Rock beats scissors";
        }
        else if (computerSelection === "Rock") {
            document.querySelector('.result').innerText = "Retry!";
        }
        else {
            computerScore++;
            document.querySelector('.result').innerText = "You lose! Paper beats rock!";
        }
    }
    else if (playerSelection.toLowerCase() === "paper") { //if the choice is paper, based on the computer's choice one of the three quotes will appear.
        if (computerSelection === "Rock") {
            playerScore++;
            document.querySelector('.result').innerText = "You win the round! Paper beats rock";
        }
        else if (computerSelection === "Paper") {
            document.querySelector('.result').innerText = "Retry!";
        }
        else {
            computerScore++;
            document.querySelector('.result').innerText = "You lose! Scissors beat paper!";
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") { //if the choice is scissors, based on the computer's choice one of the three quotes will appear.
        if (computerSelection === "Paper") {
            playerScore++;
            document.querySelector('.result').innerText = "You win the round! Scissors beat paper";
        }
        else if (computerSelection === "Scissors") {
            document.querySelector('.result').innerText = "Retry!";
        }
        else {
            computerScore++;
            document.querySelector('.result').innerText = "You lose! Rock beats scissors!";
        }
    }
    else {
        document.querySelector('.result').innerText = "You lose! Rock beats scissors!";
    }
    document.querySelector('.yourscore').innerText = `${playerScore}!`;
    document.querySelector('.computerscore').innerText = `${computerScore}!`;
    if (computerScore === 5) {
        document.querySelector('.finalresult').innerText = "You finally lost!";
    }
    else if (playerScore === 5) {
        document.querySelector('.finalresult').innerText = "You finally won!";
    }
}

function finalResult(computerScore, playerScore) {
    if (computerScore > playerScore) { //if the computer score is greater than the player's, the string below appears (and viceversa)
        return "You lost the battle!";
    }
    else if (computerScore < playerScore) {
        return "You won the battle!";
    }
    else {
        return "Tie!";
    }
}

let playerScore = 0;
let computerScore = 0;
//console.log(game(4));

buttonPaper.addEventListener('click', () => {
    if (playerScore<5 && computerScore<5) {
        roundGame("paper", getComputerChoice());
    }
});
buttonRock.addEventListener('click', () => {
    if (playerScore<5 && computerScore<5) {
        roundGame("rock", getComputerChoice());
    }
});
buttonScissors.addEventListener('click', () => {
    if (playerScore<5 && computerScore<5) {
        roundGame("scissors", getComputerChoice())
    }
});


//function game(n) {
//    for (let i=0; i <= n; i++) { //loop that calls the round function and its arguments as many times as you wish
//        let playerSelection = prompt("Insert your answer");
//        let computerSelection = getComputerChoice();
//        roundGame(playerSelection, computerSelection);
//    }
//   return finalResult(computerScore, playerScore) + " Computer score: " + computerScore.toString() + " Player score: " + playerScore.toString(); //this returns the final string of the game
//}

