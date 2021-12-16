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
  checkGameWinner(userChoice, computerChoice);
};

function setLoseText(userChoice, computerChoice) {
  gameResutltText.innerHTML = `${computerChoice} Beats ${userChoice}`;
  winLoseText.innerHTML = `YOU LOSE!`;
  if (winLoseText.classList.contains("win-text")) {
    winLoseText.classList.remove("win-text");
  }
  winLoseText.classList.add("lose-text");

  if (playerOuterBox.classList.contains("outer-box-win")) {
    playerOuterBox.classList.remove("outer-box-win");
  }
  playerOuterBox.classList.add("outer-box-lose");

  if (computerOuterBox.classList.contains("outer-box-lose")) {
    computerOuterBox.classList.remove("outer-box-lose");
  }
  computerOuterBox.classList.add("outer-box-win");
}

function setWinText(userChoice, computerChoice) {
  gameResutltText.innerHTML = `${userChoice} Beats ${computerChoice}`;
  winLoseText.innerHTML = `YOU WIN!`;
  if (winLoseText.classList.contains("lose-text")) {
    winLoseText.classList.remove("lose-text");
  }
  winLoseText.classList.add("win-text");
  if (playerOuterBox.classList.contains("outer-box-lose")) {
    playerOuterBox.classList.remove("outer-box-lose");
  }
  playerOuterBox.classList.add("outer-box-win");

  if (computerOuterBox.classList.contains("outer-box-win")) {
    computerOuterBox.classList.remove("outer-box-win");
  }
  computerOuterBox.classList.add("outer-box-lose");
}

function checkGameWinner(userChoice, computerChoice) {
  /* If game draws */
  if (userChoice === computerChoice) {
    gameResutltText.innerHTML = `${userChoice} Draws ${computerChoice}`;
    winLoseText.innerHTML = ``;
    if (computerOuterBox.classList.contains("outer-box-win")) {
      computerOuterBox.classList.remove("outer-box-win");
    }
    if (playerOuterBox.classList.contains("outer-box-win")) {
      playerOuterBox.classList.remove("outer-box-win");
    }
    if (playerOuterBox.classList.contains("outer-box-lose")) {
      playerOuterBox.classList.remove("outer-box-lose");
    }
    if (computerOuterBox.classList.contains("outer-box-lose")) {
      computerOuterBox.classList.remove("outer-box-lose");
    }
  } else if (userChoice === "Rock" && computerChoice === "Scissor") {
    setWinText(userChoice, computerChoice);
  } else if (userChoice === "Rock" && computerChoice === "Lizard") {
    setWinText(userChoice, computerChoice);
  } else if (userChoice === "Lizard" && computerChoice === "Spock") {
    setWinText(userChoice, computerChoice);
  } else if (userChoice === "Lizard" && computerChoice === "Paper") {
    setWinText(userChoice, computerChoice);
  } else if (userChoice === "Paper" && computerChoice === "Rock") {
    setWinText(userChoice, computerChoice);
  } else if (userChoice === "Paper" && computerChoice === "Spock") {
    setWinText(userChoice, computerChoice);
  } else if (userChoice === "Scissor" && computerChoice === "Rock") {
    setWinText(userChoice, computerChoice);
  } else if (userChoice === "Scissor" && computerChoice === "Spock") {
    setWinText(userChoice, computerChoice);
  } else if (userChoice === "Spock" && computerChoice === "Rock") {
    setWinText(userChoice, computerChoice);
  } else if (userChoice === "Spock" && computerChoice === "Scissor") {
    setWinText(userChoice, computerChoice);
  } else {
    setLoseText(userChoice, computerChoice);
  }
  /* Else condtion handle all cases when user will lose the game */
}
