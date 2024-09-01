For this project, you will create the game Rock Paper Scissors. This game will be played entirely in the console.

Remember to commit early and often! To refresh your memory, check out the commit messages lesson.

Step 1: Setup the project structure
Create a new Git repository for your project.
Create a blank HTML document with a script tag.

Check if JavaScript is linked correctly:

Write console.log("Hello World") in JavaScript.
Check if “Hello World” is logged in the browser console once you open your webpage.

It’s best practice to link to an external JavaScript file inside this script tag. Using an external JavaScript file keeps your HTML file clean and organized.

You don’t have to write additional code in the HTML file. This game is played entirely via the console.

Step 2: Write the logic to get the computer choice
Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.

Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

Step 3: Write the logic to get the human choice
Your game will be played by a human player. You will write a function that takes the user choice and returns it.

Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.

Hint: Use the prompt method to get the user’s input.

Test what your function returns by using console.log.

Step 4: Declare the players score variables
Your game will keep track of the players score. You will write variables to keep track of the players score.

Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.

Step 5: Write the logic to play a single round
Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.

Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.

Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.

## Project: Rock Paper Scissors

|computer| human |result        |
|--------|--------|-------------|
| rock | paper  | human wins    |
|paper | rock   | computer wins |
|rock  |scissors| computer wins |
|paper |scissors| human wins    | 
|scissors|rock  | human wins    | 
|scissors|paper | computer wins |
|scissors| scissors|    tie     |
|rock    | rock  |      tie     | 
|paper   | paper |      tie     |

Note: rock beats scissors,  scissors beats paper,
      paper beats rock
```
// declare global scope variables:
let humanScore = 0;
let computerScore = 0;
let draws = 0;

// functions:

```	
`function getComputerChoice() {}`

`function getHumanChoice() {}


`function getWinner(computerChoice, humanChoice) {}`

```
function playGame() {
	function playRound(){}
}
```

`function printGameWinner() {}`

`function printScores() {}`