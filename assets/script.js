// Selected Elements

let askQuestions = [
  {
    question:
      "Which attribute requires you to put a hashtag before the name when declaring it in CSS?",
    choices: ["Id", "Class", "Href"],
    correct: "Id",
  },
  {
    question: "How many HTML heading tags are there?",
    choices: ["4", "6", "3"],
    correct: "",
  },
  {
    question: "Which HTML tag defines a paragraph?",
    choices: ["<img>", "<ol>", "<p>"],
    correct: "<p>",
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
let time = askQuestions.length * 15;
let scores = [];
let startCountdown;
let scoreCounter = 0;

function startQuiz() {
  homePageEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  startCountdown = setInterval(countdown, 1000);
  timer.textContent = time;

  showQuestions();
}

var rightWrong = document.createElement("div");
rightWrong.setAttribute("id", "right-wrong");

let buttonHandler = function (event) {
  let correct = event.target;

  if (correct.textContent == askQuestions[questionIndex].correct) {
    rightWrong.textContent = "Correct!";
  } else {
    time = time - 10;
    rightWrong.textContent = "Wrong!";
  }
  questionIndex++;
  if (questionIndex >= askQuestions.length) {
    endGame();
  } else {
    showQuestions(questionIndex);
  }
  questionEl.appendChild(rightWrong);
};

function endGame() {
  clearInterval(startCountdown);
  questionsEl.innerHTML = "";
  timer.innerHTML = "";

  let endHeader = document.createElement("h1");
  endHeader.setAttribute("id", "end-header");
  endHeader.textContent = "Complete!!";
  questionEl.appendChild(endHeader);

  let newScore = document.createElement("p");
  newScore.setAttribute("id", "final-score");
  if (time >= 0) {
    let finalScore = time;
    newScore.textContent = "Your final score is " + finalScore;
  }
  questionEl.appendChild(newScore);

  let input = document.createElement("div");
  input.setAttribute("id", "input-form");
  questionEl.appendChild(input);

  let initialLabel = document.createElement("label");
  initialLabel.setAttribute("id", "initial-label");
  initialLabel.textContent = "Enter you initials: ";
  input.appendChild(initialLabel);

  let initalForm = document.createElement("input");
  initalForm.setAttribute("type", "text");
  initalForm.setAttribute("id", "initial-form");
  input.appendChild(initalForm);

  let submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "form-submit");
  submitBtn.textContent = "Submit";
  input.appendChild(submitBtn);

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

function showQuestions() {
  let questionCall = document.getElementById("questions");
  let questionList = askQuestions[questionIndex];
  questionCall.textContent = questionList.question;
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

function countdown() {
  time--;
  timer.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

console.log(askQuestions);

let Quiz = function (askQuestions) {};

startEl.addEventListener("click", startQuiz);
