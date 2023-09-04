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

function finalResult(computerScore, playerScore) {
    if (computerScore > playerScore) {
        return "You lost the battle!";
    }
    else if (computerScore < playerScore) {
        return "You won the battle!";
    }
    else {
        return "Tie!";
    }
}

function game(n) {
    for (let i=0; i <= n; i++) {
        let playerSelection = prompt("Insert your answer");
        let computerSelection = getComputerChoice();
        roundGame(playerSelection, computerSelection);
    }
    return finalResult(computerScore, playerScore) + " Computer score: " + computerScore.toString() + " Player score: " + playerScore.toString();
}

let playerScore = 0;
let computerScore = 0;
console.log(game(4));