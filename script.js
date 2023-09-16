function getComputerChoice() { //function that makes a random choice for the computer
    let array = ["Rock", "Paper", "Scissors"];
    let randomChoice = array[Math.floor(Math.random()*array.length)];
    return randomChoice;
}

function roundGame(playerSelection, computerSelection) { //round function
    if (playerSelection.toLowerCase() === "rock") { //if the choice is rock, based on the computer's choice one of the three quotes will appear.
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
    else if (playerSelection.toLowerCase() === "paper") { //if the choice is paper, based on the computer's choice one of the three quotes will appear.
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
    else if (playerSelection.toLowerCase() === "scissors") { //if the choice is scissors, based on the computer's choice one of the three quotes will appear.
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

const buttonRock = document.querySelector('.chooseRock');
const buttonPaper = document.querySelector('.choosePaper');
const buttonScissors = document.querySelector('.chooseScissors');

buttonPaper.addEventListener('click', roundGame(paper, computerSelection));
buttonRock.addEventListener('click', roundGame(rock, computerSelection));
buttonScissors.addEventListener('click', roundGame(scissors, computerSelection));


//function game(n) {
//    for (let i=0; i <= n; i++) { //loop that calls the round function and its arguments as many times as you wish
//        let playerSelection = prompt("Insert your answer");
//        let computerSelection = getComputerChoice();
//        roundGame(playerSelection, computerSelection);
//    }
//   return finalResult(computerScore, playerScore) + " Computer score: " + computerScore.toString() + " Player score: " + playerScore.toString(); //this returns the final string of the game
//}

let playerScore = 0;
let computerScore = 0;
console.log(game(4));