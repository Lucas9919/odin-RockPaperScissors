let humanScore = 0;
let computerScore = 0;
document
  .getElementById('rock')
  .addEventListener('click', () => playRound('rock'));
document
  .getElementById('paper')
  .addEventListener('click', () => playRound('paper'));
document
  .getElementById('scissors')
  .addEventListener('click', () => playRound('scissors'));
// randomly return one of the following string values "rock, paper, scissors"
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  const winningCombo = {
    scissors: 'paper',
    rock: 'scissors',
    paper: 'rock',
  };

  // Determine the winner
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else if (winningCombo[humanChoice] === computerChoice) {
    console.log('You win');
    humanScore++;
  } else {
    console.log('You lose');
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    function getHumanChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      let choice = prompt(
        'Please enter your choice: rock, paper, or scissors'
      ).toLowerCase();

      while (!choices.includes(choice)) {
        choice = prompt(
          'Invalid choice. Please enter rock, paper, or scissors'
        ).toLowerCase();
      }
      return choice;
    }

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Declare the winner at the end
  if (humanScore > computerScore) {
    console.log(
      `You win the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lose the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`
    );
  } else {
    console.log(
      `The game is a tie! Final score - Human: ${humanScore}, Computer: ${computerScore}`
    );
  }
}

// Calls playGame and logs the result
playGame();
