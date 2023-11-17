//getters
const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const score = document.getElementById('score');
let questionNumber = 0;
let scoreAmount = 0
const questions = [
  {
    "question": "This is question A",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 1
  },
  {
    "question": "This is question B",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 0
  },
  {
    "question": "This is question C",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 2
  },
  {
    "question": "This is question D",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 2
  },
  {
    "question": "This is question E",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 3
  },
  {
    "question": "This is question F",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 1
  },
  {
    "question": "This is question G",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 0
  },
  {
    "question": "This is question H",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 1
  }, 
  {
    "question": "This is question I",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 1
  },
  {
    "question": "This is question J",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 2
  },
  {
    "question": "This is question K",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 0
  },
  {
    "question": "This is question L",
    "answers": [
      "answer1", "answer2", "answer2", "answer4"
    ],
    "correct": 3
  }
]
const quizLength = questions.length;
function loadQuestion(questionNumber) {
  question.innerText = questions[questionNumber].question;
}
function loadAnswers(questionNumber) {
  answer1.innerText = questions[questionNumber].answers[0];
  answer2.innerText = questions[questionNumber].answers[1];
  answer3.innerText = questions[questionNumber].answers[2];
  answer4.innerText = questions[questionNumber].answers[3];
}
function checkAnswer(answerNumber) {
  // we check what the correct answer is for this question
  let correctAnswer = questions[questionNumber].correct
  // if correct we increment the score by 1
  scoreAmount++;
  if (answerNumber === correctAnswer) {
    score.innerText = scoreAmount;
  }
  // after we increment the questionNumber
  questionNumber ++;
  // we check if it is the end of the quiz ( have we run out of questions)
  if (questionNumber === quizLength) {
    alert('end of quiz')
    // put a end of quiz and score thing here
  } else {
    // if not we load the next question
    loadQuestion(questionNumber);
    loadAnswers(questionNumber);
  }
}
function startQuiz() {
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
}
startQuiz()