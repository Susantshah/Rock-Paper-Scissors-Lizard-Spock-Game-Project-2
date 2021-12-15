/* Take DOM elements */

/* Select First Radio Button i.e Easy one input, so if
difficult is selected then difficulty.checked would be false 
else true. */

const difficulty = document.querySelector('input[name="difficulty"]');
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const playerSelectedItem = document.getElementById("player-choice");
const computerSelectedItem = document.getElementById("computer-choice");
const playerOuterBox = document.getElementById("choice-outer-box-user");
const computerOuterBox = document.getElementById("choice-outer-box-computer");

// Global Variable
let roundsCount = 0;
