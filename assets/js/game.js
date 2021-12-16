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
  console.log(userChoice, computerChoice);
};
