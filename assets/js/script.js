import questions from './questions.js';

// Quiz Variables
let question, choice, answer, score, timerInterval;
let currentQuestionIn = 0;


// Quiz Elements
const scores = document.querySelector(".scores");
const highscores = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");
const timer = document.querySelector(".timer");
const time = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const startButton = document.querySelector("#start");
const questionScreen = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const initials = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");

// Function to start the quiz
const startQuiz = () => {
    // Hide Start Screen and show Question Screen
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");

    // Set initial values for score and time
    score = 0;
    time.textContent = questions.length * 20;

    // Start the timer
    startTimer();

    // Display question
    displayQuestion();
}

// Function to Display Question
const displayQuestion = () => {
    // Check if ther eis any more questions
    if (currentQuestionIn < questions.length) {
        // Assign current questions index value to the current question
        question = questions[currentQuestionIn];

        // Update the title
        questionTitle.textContent = question.question;

        // Clear the previous choices
        choices.innerHTML = "";

        // Create current choices and a button for each
        for (e of question.choices) {
            
        }
    }
}
// Event Listener for start button
startButton.addEventListener("click", startQuiz)

// Event Listener for option click

// Function to end the quiz

// Function to keep track of Score

// Function to Update Timer