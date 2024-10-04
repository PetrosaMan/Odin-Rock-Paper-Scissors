/* Project: Rock Paper Scissors */

"use strict";

let totalRounds = 0;

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

function getWinner(humanChoice, computerChoice) {
  // Check all possible results for player winning and if
  // a result is a draw. Then what remains must be 
  // computer wins
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

function playGame(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    let draws = 0;     

    function playRound(humanChoice, computerChoice) {
      console.log('playRound function called');

      const winner = getWinner(computerChoice, humanChoice);
      if (winner === "humanWins") {
        ++humanScore;
        console.log("you win, computer loses");
      } else if (winner === "computerWins") {
        ++computerScore;
        console.log("computer wins, you lose");
      } else {
        ++draws
        console.log("its a draw, nobody wins");
      }      
      //console.log('humanScore:', humanScore);
      //console.log('computerScore:', computerScore);
      //console.log('draws: ', draws);
      console.log('total rounds: ', totalRounds);
      totalRounds++;      
    }     

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
  // and for each one add a 'click' listener
    button.addEventListener("click", () => {     
      const humanChoice = button.textContent;
      const computerChoice = getComputerChoice();    
      playRound(humanChoice, computerChoice);
    });
  });
}

if (totalRounds <= 5) {
  playGame();
} 