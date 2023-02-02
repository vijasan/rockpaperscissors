// This code is written with help from Chat GPT (https://chat.openai.com/chat) and with inspiration from an old assignment from theme 4 (animation)

const options = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button"); // select all buttons
const player1 = document.querySelector("#player1"); // select player 1
const player2 = document.querySelector("#player2"); // select player 2
const lose = document.querySelector("#lose"); // select the lose result
const win = document.querySelector("#win"); // select the win result
const draw = document.querySelector("#draw"); // select the draw result

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const playerChoice = this.className; // get the player's choice
    const computerChoice = options[Math.floor(Math.random() * options.length)]; // generate computer's choice
    player1.className = `player ${playerChoice} shake`; // update player 1's class
    player2.className = `player ${computerChoice} shake`; // update player 2's class

    setTimeout(function () {
      player1.classList.remove("shake"); // remove shake animation from player 1
      player2.classList.remove("shake"); // remove shake animation from player 2

      if (playerChoice === computerChoice) {
        draw.classList.remove("hidden"); // show draw result
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        win.classList.remove("hidden"); // show win result
      } else {
        lose.classList.remove("hidden"); // show lose result
      }
    }, 500);
  });
});

// adds retry button
const retryButton = document.createElement("button");
retryButton.innerHTML = "Retry";
document.body.appendChild(retryButton);
retryButton.classList.add("retry-button"); // adds retry-button class

retryButton.addEventListener("click", function () {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
  player1.className = "player";
  player2.className = "player";
});
