// Highscores Variables
let highscores = JSON.parse(localStorage.getItem("highscores"));

// Highscores elements
const highscoresList = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");

// Display Highscores
const displayHighscores = () => {
  for (let e of highscores) {
    const scoreLi = document.createElement("li");
    scoreLi.textContent = e.initials + " - " + e.score;
    highscoresList.appendChild(scoreLi);
  }
};

// Clear Highscores
clearButton.addEventListener("click", () => {
  localStorage.clear();
  displayHighscores();
});