/* Project: Rock Paper Scissors */

"use strict";

// declare global scope variables:
let humanScore = 0;
let computerScore = 0;
let draws = 0;

function getComputerChoice() {
  let computer_choice = Math.floor(Math.random() * 3 + 1);
  switch (computer_choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return "invalid randomNumber";
  }
}

function getHumanChoice() {
  let human_choice = prompt("Enter choice(rock, paper, scissors)", "");
  human_choice = human_choice.toLowerCase();
  return human_choice;
}

function getWinner(computerChoice, humanChoice) {
  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    return "humanWins";
  } else if (computerChoice === humanChoice) {
    return "draw";
  } else {
    return "computerWins";
  }
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    let humanWins = 0;
    let computerWins = 0;
    let draws = 0;

    const winner = getWinner(computerChoice, humanChoice);
    if (winner === "humanWins") {
      ++humanScore;
      console.log("you win, computer lose");
    } else if (winner === "computerWins") {
      ++computerScore;
      console.log("computer wins, you lose");
    } else {
      ++draws
      console.log("its a draw, nobody wins", winner);
    }
  }
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

function printScores() {
  console.log(`players score: ${humanScore}`);
  console.log(`computer score: ${computerScore}`);
  console.log(`drawn games: ${draws}`);

}

for (let j = 1; j <= 3; j++) {
  playGame();
}

printScores();

console.log("** Game Over **, reload to play again");
