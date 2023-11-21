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
    "question": "Question 1",
    "answers": [
      "Capybara flying", "Capybara dreams of flying like a bird", "Capybara chases birds", "Capybara flies while hungry"
    ],
    "correct": 1
  },
  {
    "question": "Question 2",
    "answers": [
      "rat is coding", "rat creates a dating app profile", "rat plays sims on the computer", "rat is a millenial"
    ],
    "correct": 0
  },
  {
    "question": "Question 3",
    "answers": [
      "answer1", "answer2", "kitten sorcerer makes a neon pink potion that will save the planet  ", "answer4"
    ],
    "correct": 2
  },
  {
    "question": "Question 4",
    "answers": [
      "answer1", "answer2", "a stained glass window depicting a possum with a halo", "answer4"
    ],
    "correct": 2
  },
  {
    "question": "Question 5",
    "answers": [
      "answer1", "answer2", "answer3", "raccoon with glasses psychoanalizes another raccoon. painting in the style of Anders Zorn"
    ],
    "correct": 3
  },
  {
    "question": "Question 6",
    "answers": [
      "answer1", "woman finds comfort in the embrace of a giant fluffy rabbit in a the neon lights of a big city in the night, pastel colors. realist digital ar", "answer3", "answer4"
    ],
    "correct": 1
  },
  {
    "question": "Question 7",
    "answers": [
      "painting by vermeer the white greyhound with the pearl earring", "answer2", "answer3", "answer4"
    ],
    "correct": 0
  },
  {
    "question": "Question 8",
    "answers": [
      "answer1", "praying mantis doing aerobics in 1980s style training leotard digital art", "answer3", "answer4"
    ],
    "correct": 1
  }, 
  {
    "question": "Question 9",
    "answers": [
      "answer1", "digital art of a woman hugging a building in a city where all buildings are fluffy and are actually big gentle animals", "answer3", "answer4"
    ],
    "correct": 1
  },
  {
    "question": "Question 10",
    "answers": [
      "answer1", "answer2", "digital art depicting a couple of mice living in a barbie house", "answer4"
    ],
    "correct": 2
  },
  {
    "question": "Question 11",
    "answers": [
      "answer1", "answer2", "answer3", "answer4"
    ],
    "correct": 0
  },
  {
    "question": "Question 12",
    "answers": [
      "answer1", "answer2", "answer2", "answer4"
    ],
    "correct": 3
  }, 

  {
    "question": "Question 13",
    "answers": [
      "answer1", "answer2", "answer2", "answer4"
    ],
    "correct": 2
  },

  {
    "question": "Question 14",
    "answers": [
      "answer1", "answer2", "answer2", "answer4"
    ],
    "correct": 0
  },

  {
    "question": "Question 15",
    "answers": [
      "answer1", "answer2", "answer2", "answer4"
    ],
    "correct": 2
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
    alert('well done! that is correct')
  } else {
    alert(`You weren't right this time. Keep trying!`);
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