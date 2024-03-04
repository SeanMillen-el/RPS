
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const resetButton = document.getElementById("resetButton");

// variables to track scores
let playerPoints = 0;
let computerPoints = 0;
let tiePoints = 0;

// select computer's choice
function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// determine outcome
function game(playerChoice, computerChoice) {
  let result;

  if (playerChoice === computerChoice) {
    result = { message: "Tie!", computerChoice };
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = { message: "Player wins!", computerChoice };
  } else {
    result = { message: "Computer wins!", computerChoice };
  }

  return result;
}

// play a round of the game
function playGame(playerChoice) {
  // computer's choice
  const computerChoice = computerSelection();
  // game outcome
  const result = game(playerChoice, computerChoice);


  resultDisplay.textContent = `${result.message} Computer chose ${result.computerChoice}`;

  // Update scores
  if (result.message === "Player wins!") {
    playerPoints++;
    playerScore.textContent = playerPoints;
  } else if (result.message === "Computer wins!") {
    computerPoints++;
    computerScore.textContent = computerPoints;
  } else {
    tiePoints++;
    tieScore.textContent = tiePoints;
  }
  // Check if the game has ended
  endGame();
}

function endGame() {
  if (playerPoints >= 3) {
    resultDisplay.textContent = "You win, you're the best!";
    resetScore();
  } else if (computerPoints >= 3) {
    resultDisplay.textContent = "Computer wins, try again!";
    resetScore();
  }
}

// reset the scores
function resetScore() {
  playerPoints = 0;
  computerPoints = 0;
  tiePoints = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  tieScore.textContent = 0;
}
