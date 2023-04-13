// This function generates either rock, paper, or scissors randomly for the computer
function getComputerChoice() {
  // this will create an array of the three options
  const options = ["Rock", "Paper", "Scissors"];
  // This will generate a random index of 0-2 (because index's always start at 0)
  // 0 is rock, 1 is paper, and 2 is scissors.
  const randomIndex = Math.floor(Math.random() * options.length);
  // This stores the random index (and thus the random option) in a variable
  const randomOption = options[randomIndex];
  // this will return the random option when getComputerChoice() gets console logged
  return randomOption;
}

function playRound(computerSelection, formattedPlayerSelection) {
//   const computerSelection = getComputerChoice();
//   const playerSelection = prompt("Rock, Paper, or Scissors?")
//     .toLowerCase()
//     .replace(/\s+/g, "");
//   const formattedPlayerSelection =
//     playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).trim();
  if (computerSelection === formattedPlayerSelection) {
    return `Its a TIE! Both chose ${computerSelection}`;
  } else if (
    (computerSelection === "Rock" && formattedPlayerSelection === "Scissors") ||
    (computerSelection === "Paper" && formattedPlayerSelection === "Rock") ||
    (computerSelection === "Scissors" && formattedPlayerSelection === "Paper")
  ) {
    return `You LOSE! ${computerSelection} beats ${formattedPlayerSelection}`;
  } else {
    return `You WIN! ${formattedPlayerSelection} beats ${computerSelection}`;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Rock, Paper, or Scissors?")
      .toLowerCase()
      .replace(/\s+/g, "");
    const formattedPlayerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).trim();
    const result = playRound(computerSelection, formattedPlayerSelection);
    console.log(result);
    if (result.toLowerCase().startsWith('tie')) {
      console.log("No Score Increase");
    } else if (result.toLowerCase().indexOf('win') !== -1) {
      playerScore++;
    } else {
      computerScore++;
    }
  }

  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log(`You win the game!`);
  } else if (playerScore < computerScore) {
    console.log(`You lose the game!`);
  }else{
    console.log('Its a TIE, no winner.');
  }
}

playGame();
