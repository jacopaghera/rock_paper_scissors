function getComputerChoice() {
    let array = [`Rock`, `Paper`, `Scissors`];
    let randomChoice = array[Math.floor(Math.random()*array.length)];
    return randomChoice;
}

console.log(getComputerChoice())

function roundGame(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Scissors") {
            return "You win the round!";
        }
        else if (computerSelection === "Rock") {
            return "One point each!";
        }
        else {
            return "You lose!";
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Rock") {
            return "You win the round!";
        }
        else if (computerSelection === "Paper") {
            return "One point each!";
        }
        else {
            return "You lose!";
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Paper") {
            return "You win the round!";
        }
        else if (computerSelection === "Scissors") {
            return "One point each!";
        }
        else {
            return "You lose!";
        }
    }
    else {
        return "Wrong input, please try again";
    }
}

function game() {
    
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(roundGame(playerSelection, computerSelection));