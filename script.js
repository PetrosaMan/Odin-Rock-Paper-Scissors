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

let choice = getComputerChoice();

console.log(choice);
