function getComputerChoice() {
    let array = ["Rock", "Paper", "Scissors"];
    let randomChoice = array[Math.floor(Math.random()*array.length)];
    return randomChoice;
}

function roundGame(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Scissors") {
            playerScore++;
            return "You win the round! Rock beats scissors";
        }
        else if (computerSelection === "Rock") {
            computerScore++;
            return "Retry!";
        }
        else {
            return "You lose! Paper beats rock";
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            return "You win the round! Paper beats rock";
        }
        else if (computerSelection === "Paper") {
            computerScore++;
            return "Retry!";
        }
        else {
            return "You lose! Scissors beat paper";
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Paper") {
            playerScore++;
            return "You win the round! Scissors beat paper";
        }
        else if (computerSelection === "Scissors") {
            computerScore++;
            return "Retry!";
        }
        else {
            return "You lose! Rock beats scissors";
        }
    }
    else {
        return "Wrong input, please try again";
    }
}

function game() {
    getComputerChoice();
    roundGame(playerSelection, computerSelection);
    getComputerChoice();
    roundGame(playerSelection, computerSelection);
    getComputerChoice();
    roundGame(playerSelection, computerSelection);
    getComputerChoice();
    roundGame(playerSelection, computerSelection);
    getComputerChoice();
    roundGame(playerSelection, computerSelection);

}

let playerScore = 0;
let computerScore = 0;
const playerSelection = prompt("Insert your answer");
const computerSelection = getComputerChoice();

console.log(roundGame(playerSelection, computerSelection))