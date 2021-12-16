// Take DOM elements

/* Select First Radio Button i.e Easy one input, so if
difficult is selected then difficulty.checked would be false 
else true. */

const difficulty = document.querySelector('input[name="difficulty"]');

//Scores and Rounds Div
const computerScoreDiv = document.getElementById("computer-score");
const userScoreDiv = document.getElementById("user-score");
const roundsDiv = document.getElementById("game-rounds");

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
let userScore = 0;
let computerScore = 0;

// Function to increment computer score when computer wins
function incrementComputerScore() {
  computerScore += 1;
  computerScoreDiv.innerHTML = computerScore;

  // Computer Won by scoring 10 first
  if (computerScore == 10) {
    alert("Computer Has Won the Game by reaching to Score : 10 First .");
    resetGame(); // reset game
  }
}

// Function to increment user score when user wins
function incrementUserScore() {
  userScore += 1;
  userScoreDiv.innerHTML = userScore;

  // User Win by scoring 10 first
  if (computerScore == 10) {
    alert("Congrats! You Have Won the Game by reaching to Score : 10 First .");
    resetGame(); // reset game
  }
}

// Function to increment no of rounds player after each round
function incrementRounds() {
  roundsCount += 1;
  roundsDiv.innerHTML = roundsCount;
}

/* Function to reset game if user wants to reset or any of
user or computer score 10 first */
function resetGame() {
  roundsCount = 0;
  userScore = 0;
  computerScore = 0;
  computerScoreDiv.innerHTML = computerScore;
  userScoreDiv.innerHTML = userScore;
  roundsDiv.innerHTML = roundsCount;

  //Clearing game result info text
  gameResutltText.innerHTML = ``;
  winLoseText.innerHTML = ``;
}

//Function to generate random choice for computer
function computerRandomChoice() {
  /* Select random no from 0 to 4 which
  are treated array index of choices array
  and selected one item randomly and returened 
  it to calling function playLogic */
  let getRandomNumber = Math.floor(Math.random() * 5);
  let finalRandomNumber = getRandomNumber;
  /* Hard Mode is handled by giving computer 
    two chance to select randomly and averaging the result */
  if (!difficulty.checked) {
    //Handle Hard Mode when difficulty i.e Easy is not checked
    let getRandomNumber2 = Math.floor(Math.random() * 5);
    finalRandomNumber = Math.floor((getRandomNumber + getRandomNumber2) / 2);

    console.log(getRandomNumber, getRandomNumber2, finalRandomNumber);
  }
  const computerSelectedOption = choices[finalRandomNumber];
  return computerSelectedOption;
}

// Handling click event of rock by user
playerChoiceRockButton.addEventListener("click", (e) => {
  e.preventDefault(); // Preventing default behaviour
  playerSelectedItem.src = rockImage; // Changing image of user sleceted item to rock
  playerOuterBox.classList.add("outer-box-no-blur"); // Removing Blur
  playLogic("Rock"); // Calling PlayLogic function to handle further game
});

// Handling click event of paper by user
playerChoicePaperButton.addEventListener("click", (e) => {
  e.preventDefault(); // Preventing default behaviour
  playerSelectedItem.src = paperImage; // Changing image of user sleceted item to paper
  playerOuterBox.classList.add("outer-box-no-blur"); // Removing Blur
  playLogic("Paper"); // Calling PlayLogic function to handle further game
});

// Handling click event of scissor by user
playerChoiceScissorButton.addEventListener("click", (e) => {
  e.preventDefault(); // Preventing default behaviour
  playerSelectedItem.src = scissorImage; // Changing image of user sleceted item to scissor
  playerOuterBox.classList.add("outer-box-no-blur"); // Removing Blur
  playLogic("Scissor"); // Calling PlayLogic function to handle further game
});

// Handling click event of lizard by user
playerChoiceLizardButton.addEventListener("click", (e) => {
  e.preventDefault(); // Preventing default behaviour
  playerSelectedItem.src = lizardImage; // Changing image of user sleceted item to lizard
  playerOuterBox.classList.add("outer-box-no-blur");
  playLogic("Lizard");
});

// Handling click event of spock by user
playerChoiceSpockButton.addEventListener("click", (e) => {
  e.preventDefault(); // Preventing default behaviour
  playerSelectedItem.src = spockImage; // Changing image of user sleceted item to spock
  playerOuterBox.classList.add("outer-box-no-blur"); // Removing Blur
  playLogic("Spock"); // Calling PlayLogic function to handle further game
});

//function to handle main logic of game after user selected its choice
const playLogic = (userChoice) => {
  // Get computer random choice from computerRandomChoice function
  const computerChoice = computerRandomChoice();
  computerOuterBox.classList.add("outer-box-no-blur"); // remove blur from computer choice box

  //Selct computer selected image according to computerChoice using switch case
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

  //Increase no of rounds on every playLogic call
  incrementRounds();

  /* Calling checkGameWinner function with 
  userchoice and computerchoice as argument for game result */
  checkGameWinner(userChoice, computerChoice);
};

//Function to show text in gamescreen when user loses the game
function setLoseText(userChoice, computerChoice) {
  gameResutltText.innerHTML = `${computerChoice} Beats ${userChoice}`;
  winLoseText.innerHTML = `YOU LOSE!`;

  //Remove win-text class from winLoseText if exist and add lose-text class
  if (winLoseText.classList.contains("win-text")) {
    winLoseText.classList.remove("win-text");
  }
  winLoseText.classList.add("lose-text");

  /* Remove outer-box-win class from playerOuterBox if exist 
  and add outer-box-lose class */
  if (playerOuterBox.classList.contains("outer-box-win")) {
    playerOuterBox.classList.remove("outer-box-win");
  }
  playerOuterBox.classList.add("outer-box-lose");

  /* Remove outer-box-lose class from computerOuterBox if exist 
  and add outer-box-win class */
  if (computerOuterBox.classList.contains("outer-box-lose")) {
    computerOuterBox.classList.remove("outer-box-lose");
  }
  computerOuterBox.classList.add("outer-box-win");
}

//Function to show text in gamescreen when user wins the game
function setWinText(userChoice, computerChoice) {
  gameResutltText.innerHTML = `${userChoice} Beats ${computerChoice}`;
  winLoseText.innerHTML = `YOU WIN!`;

  //Remove lose-text class from winLoseText if exist and add win-text class
  if (winLoseText.classList.contains("lose-text")) {
    winLoseText.classList.remove("lose-text");
  }
  winLoseText.classList.add("win-text");

  /* Remove outer-box-lose class from playerOuterBox if exist 
  and add outer-box-win class */
  if (playerOuterBox.classList.contains("outer-box-lose")) {
    playerOuterBox.classList.remove("outer-box-lose");
  }
  playerOuterBox.classList.add("outer-box-win");

  /* Remove outer-box-win class from computerOuterBox if exist 
  and add outer-box-lose class */
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

    // Remove outer-box-win class from computerOuterBox if exist
    if (computerOuterBox.classList.contains("outer-box-win")) {
      computerOuterBox.classList.remove("outer-box-win");
    }

    // Remove outer-box-win class from playerOuterBox if exist
    if (playerOuterBox.classList.contains("outer-box-win")) {
      playerOuterBox.classList.remove("outer-box-win");
    }

    // Remove outer-box-lose class from playerOuterBox if exist
    if (playerOuterBox.classList.contains("outer-box-lose")) {
      playerOuterBox.classList.remove("outer-box-lose");
    }

    // Remove outer-box-lose class from computerOuterBox if exist
    if (computerOuterBox.classList.contains("outer-box-lose")) {
      computerOuterBox.classList.remove("outer-box-lose");
    }
  } else if (userChoice === "Rock" && computerChoice === "Scissor") {
    setWinText(userChoice, computerChoice); // Set user win text to gamescreen
    incrementUserScore(); //increment user score
  } else if (userChoice === "Rock" && computerChoice === "Lizard") {
    setWinText(userChoice, computerChoice); // Set user win text to gamescreen
    incrementUserScore(); //increment user score
  } else if (userChoice === "Lizard" && computerChoice === "Spock") {
    setWinText(userChoice, computerChoice); // Set user win text to gamescreen
    incrementUserScore(); //increment user score
  } else if (userChoice === "Lizard" && computerChoice === "Paper") {
    setWinText(userChoice, computerChoice); // Set user win text to gamescreen
    incrementUserScore(); //increment user score
  } else if (userChoice === "Paper" && computerChoice === "Rock") {
    setWinText(userChoice, computerChoice); // Set user win text to gamescreen
    incrementUserScore(); //increment user score
  } else if (userChoice === "Paper" && computerChoice === "Spock") {
    setWinText(userChoice, computerChoice); // Set user win text to gamescreen
    incrementUserScore(); //increment user score
  } else if (userChoice === "Scissor" && computerChoice === "Rock") {
    setWinText(userChoice, computerChoice); // Set user win text to gamescreen
    incrementUserScore(); //increment user score
  } else if (userChoice === "Scissor" && computerChoice === "Spock") {
    setWinText(userChoice, computerChoice); // Set user win text to gamescreen
    incrementUserScore(); //increment user score
  } else if (userChoice === "Spock" && computerChoice === "Rock") {
    setWinText(userChoice, computerChoice); // Set user win text to gamescreen
    incrementUserScore(); //increment user score
  } else if (userChoice === "Spock" && computerChoice === "Scissor") {
    setWinText(userChoice, computerChoice); // Set user win text to gamescreen
    incrementUserScore(); //increment user score
  } else {
    setLoseText(userChoice, computerChoice); // Set user lose text to gamescreen
    incrementComputerScore(); //increment computer score
  }
  /* Else condtion handle all cases when user will lose the game */
}
