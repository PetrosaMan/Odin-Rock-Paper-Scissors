/* Project: Rock Paper Scissors */

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
      return "invalid choice";
  }
}

function getHumanChoice() {
     let userChoice = +prompt('Enter choice(1-3)','');
     return userChoice 

}

let computerChoice = getComputerChoice();
console.log('Computer choice: ', computerChoice);

let userChoice = getHumanChoice();
console.log('User choice: ', userChoice);

