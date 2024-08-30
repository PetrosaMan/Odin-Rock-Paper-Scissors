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
     let userChoice = prompt('Enter choice(rock, paper, scissors)','');
     return userChoice;     
}

let computer_choice; 
let user_choice;

for(let j = 1; j <= 5; j++) {
  computer_choice = getComputerChoice();
  user_choice = getHumanChoice();
  console.log('computer choice: ', computer_choice, '    ',
    'user choice: ', user_choice
   );  
}

console.log('program finished, use reload to run again');

