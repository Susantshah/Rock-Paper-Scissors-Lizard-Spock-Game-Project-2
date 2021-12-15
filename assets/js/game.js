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

// Global Variable
let roundsCount = 0;
let resultArray = [];

playerChoiceRockButton.addEventListener("click", (e) => {
  e.preventDefault();
  gamesLogic("Rock");
});
playerChoicePaperButton.addEventListener("click", (e) => {
  e.preventDefault();
  gamesLogic("Paper");
});
playerChoiceScissorButton.addEventListener("click", (e) => {
  e.preventDefault();
  gamesLogic("Scissor");
});
playerChoiceLizardButton.addEventListener("click", (e) => {
  e.preventDefault();
  gamesLogic("Lizard");
});
playerChoiceSpockButton.addEventListener("click", (e) => {
  e.preventDefault();
  gamesLogic("Spock");
});

function computerRandomChoice() {
  const getRandomNumber = Math.floor(Math.random() * 5);
  const computerSelectedOption = choices[getRandomNumber];
  return computerSelectedOption;
}

const gamesLogic = (userChoice) => {
  const computerChoice = computerRandomChoice();
  console.log(userChoice, computerChoice);
};
