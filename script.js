/* Project: Rock Paper Scissors */

'use strict'

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  switch (randomNumber) {
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
     let userChoice = +prompt('Enter choice(1-3)','');
     switch( userChoice ) {
        case 1:
          return 'rock';
        case 2:
          return 'paper';
        case 3:
          return 'scissors';
        default:
          return  'invalid choice'; 
     }     
}

let computerChoice = getComputerChoice();
console.log('Computer choice: ', computerChoice);

let userChoice = getHumanChoice();
console.log('User choice: ', userChoice, typeof userChoice);

