function getComputerChoice() {
    let array = ["Rock", "Paper", "Scissors"];
    let randomChoice = array[Math.floor(Math.random()*array.length)];
    return randomChoice;
}

console.log(getComputerChoice())


function roundGame(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Scissors") {
            playerScore++;
            return "You win the round!";
        }
        else if (computerSelection === "Rock") {
            computerScore++
            return "Retry!";
        }
        else {
            return "You lose!";
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            return "You win the round!";
        }
        else if (computerSelection === "Paper") {
            computerScore++;
            return "Retry!";
        }
        else {
            return "You lose!";
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Paper") {
            playerScore++;
            return "You win the round!";
        }
        else if (computerSelection === "Scissors") {
            computerScore++;
            return "Retry!";
        }
        else {
            return "You lose!";
        }
    }
    else {
        return "Wrong input, please try again";
    }
}

let playerScore = 0;
let computerScore = 0;
const playerSelection = prompt("Insert input here");
const computerSelection = getComputerChoice();

function game() {
    roundGame.call(playerSelection, computerSelection);
    roundGame.call(playerSelection, computerSelection);
    roundGame.call(playerSelection, computerSelection);
    roundGame.call(playerSelection, computerSelection);
    roundGame.call(playerSelection, computerSelection);

    if (playerScore > computerScore) {
        return ("You win!");
    }
    else {
        return ("You lose!");
    }
}

console.log(game());