// Quiz questions
const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "5", correct: false },
      { text: "0", correct: false },
    ],
  },
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Central Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Simple Sheets", correct: false },
      { text: "Cars SUVs Sailboats", correct: false },
    ],
  },
  {
    question: "What year was JavaScript launched?",
    answers: [
      { text: "1996", correct: false },
      { text: "1995", correct: true },
      { text: "1994", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used for a paragraph?",
    answers: [
      { text: "<para>", correct: false },
      { text: "<p>", correct: true },
      { text: "<paragraph>", correct: false },
      { text: "<pg>", correct: false },
    ],
  },
];

// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const currentQuestionElement = document.getElementById("current-question");
const totalQuestionsElement = document.getElementById("total-questions");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");

let questionIndex = 0;
let score = 0;

function startQuiz() {
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  resultsScreen.style.display = "none";
  questionIndex = 0;
  score = 0;
  totalQuestionsElement.textContent = questions.length;
  showQustion();
}

function showQustion() {
  resetState();
  const currentQuestion = questions[questionIndex];
  questionElement.textContent = currentQuestion.question;
  currentQuestionElement.textContent = questionIndex + 1;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = answer.text;

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectButton = e.target;
  const correct = selectButton.dataset.correct == "true";
  if (correct) {
    selectButton.classList.add("correct");
    score++;
  } else {
    selectButton.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });
  nextButton.style.display = "block";
}
function showResult() {
  quizScreen.style.display = "none";
  resultsScreen.style.display = "block";
  scoreElement.textContent = score;
  totalElement.textContent = questions.length;
}
function nextQuestion() {
  questionIndex++;
  if (questionIndex < questions.length) {
    showQustion();
  } else {
    showResult();
  }
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", startQuiz);
