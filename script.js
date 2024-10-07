/* Project: Rock Paper Scissors */

//"use strict";

let totalRounds = 0;
let humanScore = 0;
let computerScore = 0;
let ties = 0;

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
  // a result is a tie. Then what remains must be 
  // computer wins
  if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    return "humanWins";
  } else if (computerChoice === humanChoice) {
    return "tie";
  } else {
    return "computerWins";
  }
}  

function updateRunningScore( humanScore, computerScore, ties) { 
   const scores = document.querySelector('#gameResult');
   scores.textContent = 'player score: ' + humanScore + ', ' + ' computer score: ' + computerScore + ' ties: ' + ties;
   return;
};  

function showGameWinner(humanScore, computerScore, ties) {  
  let winner;
  if(humanScore > computerScore) {
     winner = 'Player wins';
  } else {
     winner = 'Computer wins';
  }  
  const scores = document.querySelector('#gameResult');
  scores.textContent = winner +': ' +  'player score ' + humanScore +',' + " computer score " + computerScore + ',' + ' ties ' + ties;
  return;
}


function playRound(humanChoice) {      
    
    const computerChoice = getComputerChoice();

    const winner = getWinner(humanChoice, computerChoice);
      
    if (winner === "humanWins") {
        ++humanScore;        
    } else if (winner === "computerWins") {
        ++computerScore;        
    } else {
        ++ties;        
    }            
      totalRounds++;       
      
      if(humanScore === 5 || computerScore === 5) {
         showGameWinner(humanScore, computerScore, ties);
         const buttons = document.querySelectorAll("button");                 
         
         buttons.forEach((button) => {
            button.removeEventListener('click', handleClick);
         });
      } else {
           updateRunningScore( humanScore, computerScore, ties);
      }     
    }  
    
function handleClick(event) {
    const humanChoice = event.target.textContent;
    playRound(humanChoice);
}

function playGame() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
  });
}

playGame();
