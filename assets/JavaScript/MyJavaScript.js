const compChoose = document.querySelector(".computer-choose");
const userChoose = document.querySelector(".user-choose");
const compResult = document.querySelector(".computer-result");
const userResult = document.querySelector(".user-result");
const button = document.querySelectorAll("button");
const coinArray = ["شیر", "خط"];
let score = [0, 0];
for (let i = 0; i < button.length; i++) {
  console.log(button[i]);
  button[i].addEventListener("click", tossCoin);
}
function tossCoin(e) {
  let userGuess = e.target.innerText;
  let computerToss = Math.floor(Math.random() * 2);
  let computerGuess = coinArray[computerToss];
  let output;

  compChoose.innerHTML = "<i class='fas fa-desktop'></i>";
  userChoose.innerHTML = "<i class='fas fa-grin-beam'></i>";
  if (computerGuess === userGuess) {
    userChoose.style.color = "#a2d729";
    compChoose.style.color = "#f02d3a";
    document.getElementById("message").innerHTML = "You  Win";
    score[1]++;
    userResult.innerHTML = score[1];
  } else {
    userChoose.innerHTML = "<i class='fas fa-frown'></i>";
    userChoose.style.color = "#f02d3a";
    compChoose.style.color = "#a2d729";
    document.getElementById("message").innerHTML = " Computer  Win";
    score[0]++;
    compResult.innerHTML = score[0];
  }
  if (score[1] === 10) {
    alert("player Win  " + "computer: " + score[0] + " player: " + score[1]);
    location.reload();
  } else if (score[0] === 10) {
    alert("Computer Win  " + "computer: " + score[0] + " player: " + score[1]);
    location.reload();
  }
}
