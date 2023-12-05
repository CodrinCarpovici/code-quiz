import questions from "./questions.js";

// Quiz Variables
let question, choice, answer, score, timerInterval;
let currentQuestionIndex = 0;

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
};

// Function to Display Question
const displayQuestion = () => {
  // Check if ther eis any more questions
  if (currentQuestionIndex < questions.length) {
    // Assign current questions index value to the current question
    question = questions[currentQuestionIndex];

    //Hide feedback
    feedback.classList.add("hide");

    // Update the title
    questionTitle.textContent = question.question;

    // Clear the previous choices
    choices.innerHTML = "";

    // Create current choices and a button for each
    for (let choice of question.choices) {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;

      // Event Listener for option click
      choiceButton.addEventListener("click", () =>
        checkAnswer(question.choices.indexOf(choice))
      );

      //Append buttons to the choices section
      choices.appendChild(choiceButton);
    }
  } else {
    //If no more questions in the array then end the quiz
    endQuiz();
  }
};

// Function to check the answer
const checkAnswer = (choiceIndex) => {
  if (question.choices[choiceIndex] === question.answer) {
    // Correct answer
    score += 10;
    // Display feedback
    feedback.classList.remove("hide");
    feedback.textContent = "Correct!";
  } else {
    // Wrong answer, lose 5 seconds on time
    time.textContent = Math.max(0, parseInt(time.textContent) - 5);
    // Display feedback
    feedback.classList.remove("hide");
    feedback.textContent = "Wrong!";
  }

  // Go to next question after answer is clicked
  currentQuestionIndex++;
  displayQuestion();
};

// Function to end the quiz
const endQuiz = () => {
    clearInterval(timerInterval);

    // Display the end screen
    questionScreen.classList.add("hide");
    endScreen.classList.remove("hide");

    // Display the final score
    finalScore.textContent = score;
};

// Function to Update Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    const currentTime = parseInt(time.textContent);
    if (currentTime > 0) {
      time.textContent = currentTime - 1;
    } else {
      endQuiz();
    }
  }, 1000);
};

// Event Listener for start button
startButton.addEventListener("click", startQuiz);
