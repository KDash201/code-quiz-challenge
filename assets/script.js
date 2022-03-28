// Selected Elements
const homePageEl = document.querySelector("home-page");
const startEl = document.querySelector(".start");
const headerEl = document.getElementById("header");
const viewScoreEl = document.getElementById("view-score");
const timerEl = document.getElementById("timer");
const containStartEl = document.getElementById("contain-start");
const questionsEl = document.getElementById("questions");
const choicesEl = document.getElementById("choices");

let counter = 30;
let countdown = function () {
  console.log(counter);
  counter--;
  if (counter === 0) {
    console.log("Test Completed!");
    clearInterval(startCountdown);
  }
};

let startCountdown = setInterval(countdown, 1000);

// startEl.remove();

// startEl.style.display = "none"
// containStartEl.style.display = "block"

let askQuestions = function () {
  [
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

  let showQuestions = function () {
    for (let i = 0; i < askQuestions.length; i++) {
      return askQuestions.length;
    }
    return askQuestions;
  };
};

console.log(askQuestions);

let Quiz = function (askQuestions) {};

startEl.addEventListener("click", showQuestions);
// buttonEl.addEventListener("click", function () {});
// startEl.addEventListener("click", function () {});
// startEl.addEventListener("click", function () {});
// startEl.addEventListener("click", function () {});
