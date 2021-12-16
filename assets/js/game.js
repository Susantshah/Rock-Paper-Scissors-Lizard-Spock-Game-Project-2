/* Take DOM elements */

/* Select First Radio Button i.e Easy one input, so if
difficult is selected then difficulty.checked would be false 
else true. */

const difficulty = document.querySelector('input[name="difficulty"]');

//Buttons Selection
const playerChoiceRockButton = document.querySelector(".rockbtn");
const playerChoicePaperButton = document.querySelector(".paperbtn");
const playerChoiceScissorButton = document.querySelector(".scissorbtn");
const playerChoiceLizardButton = document.querySelector(".lizardbtn");
const playerChoiceSpockButton = document.querySelector(".spockbtn");

const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const playerSelectedItem = document.getElementById("player-choice");
const computerSelectedItem = document.getElementById("computer-choice");
const playerOuterBox = document.getElementById("choice-outer-box-user");
const computerOuterBox = document.getElementById("choice-outer-box-computer");

//Image urls
const rockImage = "assets/images/gamehandicons/hand-rock.svg";
const paperImage = "assets/images/gamehandicons/hand-paper.svg";
const scissorImage = "assets/images/gamehandicons/hand-scissors.svg";
const lizardImage = "assets/images/gamehandicons/hand-lizard.svg";
const spockImage = "assets/images/gamehandicons/hand-spock.svg";

//Text select
const gameResutltText = document.getElementById("game-result");
const winLoseText = document.getElementById("win-or-lose");

// Global Variable
let roundsCount = 0;
let resultArray = [];

playerChoiceRockButton.addEventListener("click", (e) => {
  e.preventDefault();
  playerSelectedItem.src = rockImage;
  playerOuterBox.classList.add("outer-box-no-blur");
  playLogic("Rock");
});
playerChoicePaperButton.addEventListener("click", (e) => {
  e.preventDefault();
  playerSelectedItem.src = paperImage;
  playerOuterBox.classList.add("outer-box-no-blur");
  playLogic("Paper");
});
playerChoiceScissorButton.addEventListener("click", (e) => {
  e.preventDefault();
  playerSelectedItem.src = scissorImage;
  playerOuterBox.classList.add("outer-box-no-blur");
  playLogic("Scissor");
});
playerChoiceLizardButton.addEventListener("click", (e) => {
  e.preventDefault();
  playerSelectedItem.src = lizardImage;
  playerOuterBox.classList.add("outer-box-no-blur");
  playLogic("Lizard");
});
playerChoiceSpockButton.addEventListener("click", (e) => {
  e.preventDefault();
  playerSelectedItem.src = spockImage;
  playerOuterBox.classList.add("outer-box-no-blur");
  playLogic("Spock");
});

function computerRandomChoice() {
  const getRandomNumber = Math.floor(Math.random() * 5);
  const computerSelectedOption = choices[getRandomNumber];
  return computerSelectedOption;
}

const playLogic = (userChoice) => {
  const computerChoice = computerRandomChoice();
  computerOuterBox.classList.add("outer-box-no-blur");
  switch (computerChoice) {
    case "Rock":
      computerSelectedItem.src = rockImage;
      break;

    case "Paper":
      computerSelectedItem.src = paperImage;
      break;

    case "Scissor":
      computerSelectedItem.src = scissorImage;
      break;

    case "Lizard":
      computerSelectedItem.src = lizardImage;
      break;

    case "Spock":
      computerSelectedItem.src = spockImage;
      break;

    default:
      break;
  }
  checkWinner(userChoice, computerChoice);
};

function checkWinner(playerChoice, computerChoice) {
  /* If player chooses rock */
  if (playerChoice === "rock" && computerChoice === "rock") {
    document.getElementById("messages").innerHTML = "Draw!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    document.getElementById("messages").innerHTML =
      "You Lose! Paper Covers Rock";
    addComputerScore();
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    document.getElementById("messages").innerHTML =
      "You Win! Rock Crushes Scissors";
    addUserScore();
  } else if (playerChoice === "rock" && computerChoice === "lizard") {
    document.getElementById("messages").innerHTML =
      "You Win! Rock Crushes Lizard";
    addUserScore();
  } else if (playerChoice === "rock" && computerChoice === "spock") {
    document.getElementById("messages").innerHTML =
      "You Lose! Spock Vaporizes Rock";
    addComputerScore();
  } else if (playerChoice === "paper" && computerChoice === "paper") {
  /* If chooses paper */
    document.getElementById("messages").innerHTML = "Draw!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    document.getElementById("messages").innerHTML =
      "You Win! Paper Covers Rock";
    addUserScore();
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    document.getElementById("messages").innerHTML =
      "You Lose! Scissors Cuts Paper";
    addComputerScore();
  } else if (playerChoice === "paper" && computerChoice === "lizard") {
    document.getElementById("messages").innerHTML =
      "You Lose! Lizard Eats Paper";
    addComputerScore();
  } else if (playerChoice === "paper" && computerChoice === "spock") {
    document.getElementById("messages").innerHTML =
      "You Win! Paper Disproves Spock";
    addUserScore();
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
  /* If player chooses scissors */
    document.getElementById("messages").innerHTML = "Draw!";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    document.getElementById("messages").innerHTML =
      "You Lose! Rock Crushes Scissors";
    addComputerScore();
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    document.getElementById("messages").innerHTML =
      "You Win! Scissors Cuts Paper";
    addUserScore();
  } else if (playerChoice === "scissors" && computerChoice === "lizard") {
    document.getElementById("messages").innerHTML =
      "You Win! Scissors Decapitates Lizard";
    addUserScore();
  } else if (playerChoice === "scissors" && computerChoice === "spock") {
    document.getElementById("messages").innerHTML =
      "You Lose! Spock Smashes Scissors";
    addComputerScore();
  } else if (playerChoice === "lizard" && computerChoice === "lizard") {
  /* If player chooses lizard */
    document.getElementById("messages").innerHTML = "Draw!";
  } else if (playerChoice === "lizard" && computerChoice === "rock") {
    document.getElementById("messages").innerHTML =
      "You Lose! Rock Crushes Lizard";
    addComputerScore();
  } else if (playerChoice === "lizard" && computerChoice === "paper") {
    document.getElementById("messages").innerHTML =
      "You Win! Lizard Eats Paper";
    addUserScore();
  } else if (playerChoice === "lizard" && computerChoice === "scissors") {
    document.getElementById("messages").innerHTML =
      "You Lose! Scissors Decapitates Lizard";
    addComputerScore();
  } else if (playerChoice === "lizard" && computerChoice === "spock") {
    document.getElementById("messages").innerHTML =
      "You Win! Lizard Poisons Spock";
    addUserScore();
  } else if (playerChoice === "spock" && computerChoice === "spock") {
  /* If player chooses spock */
    document.getElementById("messages").innerHTML = "Draw!";
  } else if (playerChoice === "spock" && computerChoice === "rock") {
    document.getElementById("messages").innerHTML =
      "You Win! Spock Vaporizes Rock ";
    addUserScore();
  } else if (playerChoice === "spock" && computerChoice === "paper") {
    document.getElementById("messages").innerHTML =
      "You Lose! Paper Disproves Spock";
    addComputerScore();
  } else if (playerChoice === "spock" && computerChoice === "scissors") {
    document.getElementById("messages").innerHTML =
      "You Win! Spock Smashes Scissors";
    addUserScore();
  } else if (playerChoice === "spock" && computerChoice === "lizard") {
    document.getElementById("messages").innerHTML =
      "You Lose! Lizard Poisons Spock";
    addUserScore();
  }
}
