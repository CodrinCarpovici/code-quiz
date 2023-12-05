// Highscores Variables
let highscores = JSON.parse(localStorage.getItem("highscores"));

// Highscores elements
const highscoresList = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");

// Display Highscores
for (let e of highscores) {
    const scoreLi = document.createElement("li")
    scoreLi.textContent = e.initials + " - " + e.score;
    highscoresList.appendChild(scoreLi);
}

// Clear Highscores