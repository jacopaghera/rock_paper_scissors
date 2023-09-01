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
            return "Retry!";
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
            return "Retry!";
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

const computerSelection = getComputerChoice();

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let result = roundGame(prompt("Choose one between rock, paper or scissors"), computerSelection);
    if (result === "You win the round!") {
        alert("You won the round!");
        playerScore++;
    }
    else if (result === "You lose!") {
        alert("You lost!");
        computerScore++;
    }
    else if (result === "Retry!"){
        alert("Retry!");
    }
    else {
        alert("Type again please");
    }
    roundGame(prompt("Choose one between rock, paper or scissors"), computerSelection);
    if (result === "You win the round!") {
        alert("You won the round!");
        playerScore++;
    }
    else if (result === "You lose!") {
        alert("You lost!");
        computerScore++;
    }
    else if (result === "Retry!"){
        alert("Retry!");
    }
    else {
        alert("Type again please");
    }
    roundGame(prompt("Choose one between rock, paper or scissors"), computerSelection);
    if (result === "You win the round!") {
        alert("You won the round!");
        playerScore++;
    }
    else if (result === "You lose!") {
        alert("You lost!");
        computerScore++;
    }
    else if (result === "Retry!"){
        alert("Retry!");
    }
    else {
        alert("Type again please");
    }
    roundGame(prompt("Choose one between rock, paper or scissors"), computerSelection);
    if (result === "You win the round!") {
        alert("You won the round!");
        playerScore++;
    }
    else if (result === "You lose!") {
        alert("You lost!");
        computerScore++;
    }
    else if (result === "Retry!"){
        alert("Retry!");
    }
    else {
        alert("Type again please");
    }
    roundGame(prompt("Choose one between rock, paper or scissors"), computerSelection);
    if (result === "You win the round!") {
        alert("You won the round!");
        playerScore++;
    }
    else if (result === "You lose!") {
        alert("You lost!");
        computerScore++;
    }
    else if (result === "Retry!"){
        alert("Retry!");
    }
    else {
        alert("Type again please");
    }

    if (playerScore > computerScore) {
        return "You win the game!";
    }
    else if (computerScore > playerScore) {
        return "You lose the game!";
    }
}



console.log(game());