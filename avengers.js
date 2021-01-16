var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Anu",
    score: 9,
  },

  {
    name: "Bella",
    score: 8,
  },
];

// array of objects
var questions = [
  {
    question: "Who made Captain America’s shield? ",
    answer: "Howard Stark",
  },
  {
    question: "What is the name of Thor’s hammer? ",
    answer: "Mjolnir",
  },
  {
    question: "What is Captain America’s shield made out of? ",
    answer: "Vibranium",
  },
  {
    question: "How man Infinity Stones are there? ",
    answer: "Six",
  },
  {
    question: "Who killed Tony Stark’s parents?",
    answer: "The Winter Soldier",
  },
  {
    question: "What is the name of Black Panther’s home country?",
    answer: "Wakanda",
  },
  {
    question: "What Marvel Cinematic Universe film was released first? ",
    answer: "Iron Man",
  },
  {
    question: "Who played Bruce Banner in The Incredible Hulk? ",
    answer: "Edward Norton",
  },
  {
    question: "What is Black Widow’s real name in AVENGERS? ",
    answer: "Natasha Romanoff",
  },
  {
    question:
      "Who was Tony Stark’s favourite band, whose songs feature in the Iron Man movies? ",
    answer: "AC/DC",
  },
];

function welcome() {
  var userName = readlineSync.question("Let's know your name... ");

  console.log(
    "Welcome " + userName + " Let's see how much better you know Anushree?"
  );
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    // branching
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();
