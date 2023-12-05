import questions from "./questions.js";

// Quiz Variables
let question, score, timerInterval;
let currentQuestionIndex = 0;
let shuffledQuestions = [];

// Quiz Elements
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

// Function to shuffle an array
const shuffleArray = (array) => {
  return array.slice().sort(() => Math.random() - 0.5);
};

// Function to start the quiz
const startQuiz = () => {
  // Hide Start Screen and show Question Screen
  startScreen.classList.add("hide");
  questionScreen.classList.remove("hide");

  // Shuffle questions and select the first 10
  shuffledQuestions = shuffleArray(questions).slice(0, 10);

  // Set initial values for score and time
  score = 0;
  time.textContent = shuffledQuestions.length * 20;

  // Start the timer
  startTimer();

  // Display question
  displayQuestion();
};

// Function to Display Question
const displayQuestion = () => {
  // Check if ther eis any more questions
  if (currentQuestionIndex < shuffledQuestions.length) {
    // Assign current questions index value to the current question
    question = shuffledQuestions[currentQuestionIndex];

    // Update the title
    questionTitle.textContent = question.question;

    // Shuffle the order of choices
    const shuffledChoices = shuffleArray(question.choices);

    // Clear the previous choices
    choices.innerHTML = "";

    // Create current choices and a button for each
    for (let choice of shuffledChoices) {
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
  //Clear previous feedback
  feedback.textContent = "";

  if (question.choices[choiceIndex] === question.answer) {
    // Correct answer
    score += 10;
    // Display feedback
    feedback.classList.remove("hide");
    feedback.textContent = "Correct!";
  } else {
    // Wrong answer, lose 5 seconds on time
    time.textContent = Math.max(0, parseInt(time.textContent) - 10);
    // Display feedback
    feedback.classList.remove("hide");
    feedback.textContent = "Wrong!";
  }

  // Display feedback briefly
  setTimeout(() => {
    feedback.textContent = "";
  }, 1000);

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

  // Allow user to save score and initials
  submitButton.addEventListener("click", saveScore);
};

// Function to save the score and initials to the local storage
const saveScore = () => {
  const playerInitials = initials.value.trim();

  if (playerInitials !== "") {
    // Get or set highscores from the localStorage
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    // Add current score to the highscores array
    highscores.push({ initials: playerInitials, score: score });

    // Sort highscores from highest to lowest
    highscores.sort((a, b) => b.score - a.score);

    // Update localStorage values
    localStorage.setItem("highscores", JSON.stringify(highscores));

    // Redirect to highscores.html page
    window.location.href = "highscores.html";
  } else {
    alert("Please enter your initials to store your score!");
  }
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
