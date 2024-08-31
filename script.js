/* Project: Rock Paper Scissors */

"use strict";

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
  return human_choice;
}

function playRound(humanChoice, computerChoice) {
  let humanWins = 0;
  let computerWins = 0;
  let draw = 0;
  humanChoice = humanChoice.toLowerCase();
  if (
    (computerSelection === "rock" && humanSelection === "paper") ||
    (computerSelection === "paper" && humanSelection === "scissors") ||
    (computerSelection === "scissors" && humanSelection === "rock")
  ) {
    ++humanWins;

  } else if (computerSelection === humanSelection) {
    ++draw;
  } else {
    ++computerWins;
  }
  console.log('human wins ', humanWins, ' computer wins ', computerWins, ' draw ', draw );
}

// declare global scope variables:
let humanScore = 0;
let computerScore = 0;

// anonymous functions
let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

console.log("human selection: ", humanSelection);
console.log("computer selection: ", computerSelection);

playRound(humanSelection, computerSelection);

console.log("program finished, use reload to run again");
