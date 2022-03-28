// Selected Elements

let askQuestions = [
  {
    question:
      "Which attribute requires you to put a hashtag before the name when declaring it in CSS?",
    choiceA: "Id",
    choiceB: "Class",
    choiceC: "Href",
    correct: "A",
  },
  {
    question: "How many HTML heading tags are there?",
    choiceA: "4",
    choiceB: "6",
    choiceC: "3",
    correct: "B",
  },
  {
    question: "Which HTML tag defines a paragraph?",
    choiceA: "<img>",
    choiceB: "<ol>",
    choiceC: "<p>",
    correct: "C",
  },
];

let homePageEl = document.getElementById("home-page");
let startEl = document.querySelector(".start");
let headerEl = document.getElementById("header");
let viewScoreEl = document.getElementById("view-score");
let timerEl = document.getElementById("timer");
let containStartEl = document.getElementById("contain-start");
let questionsEl = document.getElementById("questions");
let choicesEl = document.getElementById("choices");
let timer = document.getElementById("timer");

questionIndex = 0;
let time = questions.length * 15;
let scores = [];

let startCountdown;

function startQuiz() {
  homePageEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  startCountdown = setInterval(countdown, 1000);
  timer.textContent = time;

  showQuestions();
}

let buttonHandler = function (event) {
  let correct = event.target;

  if (correct.textContent == questions[questionIndex].correct) {
    rightWrong.textContent = "Correct!";
  } else {
    time = time - 10;
    rightWrong.textContent = "Wrong!";
  }
  questionIndex++;
  if (questionIndex >= questions.length) {
    quizStop();
  } else {
    questionRender(questionIndex);
  }
  questionEl.appendChild(rightWrong);
};

function endGame() {
  clearInterval(startCountdown);
  questionsEl.innerHTML = "";
  timer.innerHTML = "";

  let endHeader = document.createElement("h1");
  endHeader.setAttribute("id", "end-header");
  endHeader.textContent = "All Done!";
  questionEl.appendChild(endHeader);

  let pScore = document.createElement("p");
  pScore.setAttribute("id", "final-score");
  if (time >= 0) {
    let finalScore = time;
    pScore.textContent = "Your final score is " + finalScore;
  }
  questionEl.appendChild(pScore);

  let inputForm = document.createElement("div");
  inputForm.setAttribute("id", "input-form");
  questionEl.appendChild(inputForm);

  let initialLabel = document.createElement("label");
  initialLabel.setAttribute("id", "initial-label");
  initialLabel.textContent = "Enter you initials: ";
  inputForm.appendChild(initialLabel);

  let initalForm = document.createElement("input");
  initalForm.setAttribute("type", "text");
  initalForm.setAttribute("id", "initial-form");
  inputForm.appendChild(initalForm);

  let submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "form-submit");
  submitBtn.textContent = "Submit";
  inputForm.appendChild(submitBtn);

  submitBtn.onclick = function () {
    let initals = initalForm.value;
    console.log(initals);
    if (initals === "") {
      window.alert("Please enter your initials!");
    } else {
      let endScore = {
        initals: initals,
        score: finalScore,
        id: scoreIdCounter,
      };

      scores.push(endScore);
      localStorage.setItem("scores", JSON.stringify(scores));
      scoreIdCounter++;
    }
  };
}

function questionRender() {
  let questionCall = document.getElementById("questions");
  let questionList = questions[questionIndex];
  questionCall.textContent = questionList.title;
  choicesEl.innerHTML = "";
  questionList.choices.forEach(function (choice, i) {
    let choiceButton = document.createElement("button");
    choiceButton.setAttribute("value", choice);
    choiceButton.setAttribute("id", "choice");
    choiceButton.textContent = choice;
    choicesEl.appendChild(choiceButton);
    choiceButton.addEventListener("click", buttonHandler);
  });
}

console.log(askQuestions);

let Quiz = function (askQuestions) {};

startEl.addEventListener("click", startQuiz);
// buttonEl.addEventListener("click", function () {});
// startEl.addEventListener("click", function () {});
// startEl.addEventListener("click", function () {});
// startEl.addEventListener("click", function () {});
