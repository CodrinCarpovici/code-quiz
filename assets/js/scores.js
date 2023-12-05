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

// Event listener to check for dom content loaded
document.addEventListener("DOMContentLoaded", () => {
  // Call displayHighscores when the page is loaded
  displayHighscores();

  // Clear Highscores
  clearButton.addEventListener("click", () => {
    // Clear localStorage values
    localStorage.clear();
    // Clear text displayed
    highscoresList.innerHTML = "";
  });
});
