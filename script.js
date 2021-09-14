"use strict";
const check = document.querySelector(".check");
let random = Math.floor(Math.random() * 20) + 1;
let score = 20;

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent =
      "❌ Please type in a valid number ";
  } else if (guess === random) {
    document.querySelector("h1").textContent = "🎉 Correct!";
    document.querySelector(".highscore").textContent = score;
    document.body.style.backgroundColor = "Green";
    document.querySelector(".number").textContent = guess;
    document.querySelector(".message").textContent = "";
    const highscore = document.querySelector(".highscore");
    if (score > highscore) {
      highscore = score;
      document.querySelector.textContent = highscore;
    }
  } else if (guess !== random) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > random ? "Too High!" : "Too Low!";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector("h1").textContent = "💥 You lost!";
      document.querySelector(".message").textContent = "";

      document.querySelector(".score").innerHTML = 0;
      document.body.style.backgroundColor = "red";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  random = Math.floor(Math.random() * 20) + 1;
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".number").textContent = "?";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".score").innerHTML = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
});
console.log(random);
