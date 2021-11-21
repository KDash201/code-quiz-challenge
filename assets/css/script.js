// Selected Elements
const startEl = document.querySelector(".start");
const headerEl = document.getElementById("header");
const viewScoreEl = document.getElementById("view-score");
const timerEl = document.getElementById("timer");
const containStartEl = document.getElementById("contain-start");
const questionsEl = document.getElementById("questions");
const choicesEl = document.getElementById("choices");

let askQuestions = [
  {
    question:
      "Which attribute requires you to put a hashtag before the name when deeclaring it in CSS?",
    choiceA: "Correct",
    choiceB: "Wrong",
    choiceC: "Wrong",
    correct: "A",
  },{
  question:
    "How many HTML heading tags are there?",
  choiceA: "Wrong",
  choiceB: "Correct",
  choiceC: "Wrong",
  correct: "B",
},{
  question:
    "Which HTML tag defines a paragraph?",
  choiceA: "Wrong",
  choiceB: "Wrong",
  choiceC: "Correct",
  correct: "C",
},
];

startEl.addEventListener("click", function () {
  alert("button clicked");
  console.log(startEl);
});
