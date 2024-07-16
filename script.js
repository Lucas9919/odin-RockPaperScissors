// randomly return one of the following string values "rock, paper, scissors"
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let choice = prompt(
    "Please enter your choice: rock, paper, or scissors"
  ).toLowerCase();

  while (!choices.includes(choice)) {
    choice = prompt(
      "Invalid choice. Please enter rock, paper, or scissors"
    ).toLowerCase();
  }
  return choice;
}

//////////////////////

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  const winningCombo = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock",
  };

  //determine the winner
  if (humanChoice === computerChoice) {
    console.log("its a tie");
  } else if (winningCombo[humanChoice] === computerChoice) {
    console.log("you win");
    humanScore++;
  } else {
    console.log("you lose");
    computerScore++;
  }
}

const humanScore = 0;
const computerScore = 0;
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  //calls playRound 5 times
  //keeps track of score
  //You need to recall the choice functions to get new choices for each round.
  //declares winner at the end
}
console.log(playGame());
