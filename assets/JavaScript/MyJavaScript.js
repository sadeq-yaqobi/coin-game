// Get the required elements from the DOM
const compChoose = document.querySelector(".computer-choose");
const userChoose = document.querySelector(".user-choose");
const compResult = document.querySelector(".computer-result");
const userResult = document.querySelector(".user-result");
const button = document.querySelectorAll("button");

// Define an array to store the possible outcomes of the coin toss
const coinArray = ["شیر", "خط"];

// Initialize the score array
let score = [0, 0];

// Add event listeners to the buttons
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", tossCoin);
}

// Function to handle the coin toss
function tossCoin(e) {
  // Get the user's guess from the clicked button's text
  let userGuess = e.target.innerText;

  // Generate a random number to simulate the computer's toss
  let computerToss = Math.floor(Math.random() * 2);

  // Get the computer's guess based on the random number
  let computerGuess = coinArray[computerToss];

  // Variable to store the outcome message
  let output;

  // Set the icons for computer and user choices
  compChoose.innerHTML = "<i class='fas fa-desktop'></i>";
  userChoose.innerHTML = "<i class='fas fa-grin-beam'></i>";

  // Check if the user's guess matches the computer's guess
  if (computerGuess === userGuess) {
    // If the guesses match, update the styles and display the outcome
    userChoose.style.color = "#a2d729";
    compChoose.style.color = "#f02d3a";
    document.getElementById("message").innerHTML = "You Win";

    // Increase the user's score and update the display
    score[1]++;
    userResult.innerHTML = score[1];
  } else {
    // If the guesses don't match, update the styles and display the outcome
    userChoose.innerHTML = "<i class='fas fa-frown'></i>";
    userChoose.style.color = "#f02d3a";
    compChoose.style.color = "#a2d729";
    document.getElementById("message").innerHTML = "Computer Win";

    // Increase the computer's score and update the display
    score[0]++;
    compResult.innerHTML = score[0];
  }

  // Check if any player has reached a score of 10 to determine the winner
  if (score[1] === 10) {
    alert("Player Win\nComputer: " + score[0] + "\nPlayer: " + score[1]);
    location.reload(); // Reload the page to restart the game
  } else if (score[0] === 10) {
    alert("Computer Win\nComputer: " + score[0] + "\nPlayer: " + score[1]);
    location.reload(); // Reload the page to restart the game
  }
}
