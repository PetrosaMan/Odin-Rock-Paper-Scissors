computer        human       result
------------------------------------------
rock            paper       human wins
paper           rock        computer wins
rock            scissors    computer wins 
paper           scissors    human wins
scissors        rock        human wins
scissors        paper       computer wins 

scissors        scissors    tie
rock            rock        tie
paper           paper       tie 

Note: rock beats scissors,
      scissors beats paper,
      paper beats rock

let humanScore = 0;
let computerScore = 0;
let humanWins = false;
let computerWins = false;
let draw = false;

// anonymous functions 
computerSelection (rock, paper, scissors)
humanSelection (rock, paper, scissors)

// play game logic
if(computerSelection === 'rock' && humanSelection === 'paper' ||
    computerSelection === 'paper' && humanSelection === 'scissors' ||
    computerSelection === 'scissors' && humanSelection === 'rock') {
        humanWins = true;
} else { if( computerSelection === humanSelection ) {
            draw = true;
       }
} else {
    computerWins = true
}