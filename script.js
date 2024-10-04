/* Project: Rock Paper Scissors */

"use strict";

// declare global scope variables:
let humanScore = 0;
let computerScore = 0;
let draws = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  switch (computerChoice) {
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

function playRound(humanChoice, computerChoice) {
  console.log('playRound function called');
  console.log('humanChoice: ', humanChoice);
  console.log('computerChoice: ', computerChoice);
  let scores = 23;
  document.querySelector('#results').textContent = scores;
  console.log('scores: ', scores.textContent);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {     
    const humanChoice = button.textContent;
    const computerChoice = getComputerChoice();    
    playRound(humanChoice, computerChoice);
  });
});