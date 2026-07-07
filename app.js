const questionCounter = document.getElementById("questionCounter");
const liveScore = document.getElementById("liveScore");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const resultCard = document.getElementById("resultCard");
const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");
const restartBtn = document.getElementById("restartBtn");
const quizCard = document.querySelector(".quiz-card");
const partSelector = document.getElementById("partSelector");

let currentQuestion = 0;
let score = 0;
let reviewMode = false;
let userAnswers = [];
let quizQuestions = [];

const allQuestions = Array.isArray(questions) ? questions : [];

const reviewBtn = document.createElement("button");
reviewBtn.textContent = "Shiko përgjigjet";
reviewBtn.className = "primary-btn";
resultCard.appendChild(reviewBtn);

function normalizeQuestion(q) {
  return {
    id: q.id,
    question: q.question || q.pyetja || q.text || "Pyetje pa tekst",
    answers: q.answers || q.alternatives || q.options || q.pergjigjet || [],
    correct: q.correct ?? q.correctAnswer ?? q.sakte ?? q.answerIndex ?? q.answer
  };
}

function getCorrectIndex(q) {
  return typeof q.correct === "number" ? q.correct : q.answers.indexOf(q.correct);
}

function resetQuizState() {
  currentQuestion = 0;
  score = 0;
  reviewMode = false;
  userAnswers = [];

  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");

  liveScore.textContent = "0";
  progressBar.style.width = "0%";
}

function startPart(from, to, title) {
  quizQuestions = allQuestions
    .filter(q => q.id >= from && q.id <= to)
    .map(normalizeQuestion);

  resetQuizState();

  if (partSelector) {
    partSelector.classList.add("hidden");
  }

  loadQuestion();
}

function startAll() {
  quizQuestions = allQuestions.map(normalizeQuestion);

  resetQuizState();

  if (partSelector) {
    partSelector.classList.add("hidden");
  }

  loadQuestion();
}

function calculateScore() {
  score = 0;

  quizQuestions.forEach((q, index) => {
    if (userAnswers[index] === getCorrectIndex(q)) {
      score++;
    }
  });

  liveScore.textContent = score;
}

function loadQuestion() {
  if (!quizQuestions.length) {
    questionText.textContent = "Zgjidh një pjesë të kuizit.";
    answersBox.innerHTML = "";
    feedback.textContent = "";
    nextBtn.disabled = true;
    prevBtn.disabled = true;
    return;
  }

  reviewMode = false;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? "Përfundo" : "Tjetra";

  const q = quizQuestions[currentQuestion];
  const correctIndex = getCorrectIndex(q);
  const selected = userAnswers[currentQuestion];

  questionText.textContent = q.question;
  questionCounter.textContent = `Pyetja ${currentQuestion + 1} / ${quizQuestions.length}`;
  progressBar.style.width = `${(currentQuestion / quizQuestions.length) * 100}%`;

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = selected === undefined;

  answersBox.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;

    if (selected !== undefined) {
      button.disabled = true;

      if (index === correctIndex) button.classList.add("correct");
      if (index === selected && index !== correctIndex) button.classList.add("wrong");
      if (index === selected) button.classList.add("selected");

      feedback.textContent =
        selected === correctIndex
          ? "Saktë ✅"
          : `Gabim ❌ Përgjigjja e saktë është: ${q.answers[correctIndex]}`;

      feedback.classList.add(selected === correctIndex ? "ok" : "bad");
    } else {
      button.onclick = () => selectAnswer(index);
    }

    answersBox.appendChild(button);
  });

  calculateScore();
}

function selectAnswer(selectedIndex) {
  userAnswers[currentQuestion] = selectedIndex;
  loadQuestion();
}

function showResult() {
  calculateScore();

  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  progressBar.style.width = "100%";

  finalScore.textContent = `${score} / ${quizQuestions.length}`;
  const percent = Math.round((score / quizQuestions.length) * 100);

  if (percent >= 80) {
    finalMessage.textContent = `Very Good! Ke arritur ${percent}%.`;
  } else if (percent >= 50) {
    finalMessage.textContent = `Good! Ke arritur ${percent}%.`;
  } else {
    finalMessage.textContent = `Fail! Ke arritur ${percent}%.`;
  }
}

function loadReviewQuestion() {
  reviewMode = true;

  const q = quizQuestions[currentQuestion];
  const correctIndex = getCorrectIndex(q);
  const userIndex = userAnswers[currentQuestion];

  quizCard.classList.remove("hidden");
  resultCard.classList.add("hidden");

  questionText.textContent = q.question;
  questionCounter.textContent = `Rishikim ${currentQuestion + 1} / ${quizQuestions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = false;
  nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? "Përfundo" : "Tjetra";

  feedback.textContent =
    userIndex === correctIndex ? "E ke pasur saktë ✅" : "Këtu ke gabuar ❌";

  feedback.className = userIndex === correctIndex ? "feedback ok" : "feedback bad";

  answersBox.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.disabled = true;

    if (index === correctIndex) button.classList.add("correct");
    if (index === userIndex && index !== correctIndex) button.classList.add("wrong");
    if (index === userIndex) button.classList.add("selected");

    answersBox.appendChild(button);
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {
    reviewMode ? loadReviewQuestion() : loadQuestion();
  } else {
    currentQuestion = 0;
    showResult();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    reviewMode ? loadReviewQuestion() : loadQuestion();
  }
});

reviewBtn.addEventListener("click", () => {
  currentQuestion = 0;
  loadReviewQuestion();
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  reviewMode = false;
  userAnswers = [];
  quizQuestions = [];

  resultCard.classList.add("hidden");
  quizCard.classList.add("hidden");

  if (partSelector) {
    partSelector.classList.remove("hidden");
  }

  liveScore.textContent = "0";
  progressBar.style.width = "0%";
});

if (quizCard) {
  quizCard.classList.add("hidden");
}