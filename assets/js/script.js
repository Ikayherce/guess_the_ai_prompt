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
      "kitten cat makes potion to rule the world", "kitten tries to make his own eye cream ", "kitten sorcerer makes a potion that will save the planet", "kitten gets too invested in science homework"
    ],
    "correct": 2
  },
  {
    "question": "Question 4",
    "answers": [
      "a stained glass window at the rat church", "a stained glass window depicting a holy rat", "a stained glass window depicting a possum with a halo", "a stained glass window depicting the rat messiah"
    ],
    "correct": 2
  },
  {
    "question": "Question 5",
    "answers": [
      "raccoon writer convinces other raccoon that his book is good", "raccoon philosopher explains his theories to other raccoon", "raccoon with glasses discusses politics with other raccoon", "raccoon with glasses psychoanalizes another raccoon. painting in the style of Anders Zorn"
    ],
    "correct": 3
  },
  {
    "question": "Question 6",
    "answers": [
      "woman is lured by evil neon rabbit in the city of sin", "woman finds comfort in the embrace of a giant fluffy rabbit in the neon lights of a big city.", "woman hugs her cursed boyfriend who was transformed into a neon rabbit", "giant neon rabbit is a superhero that protects a defenseless young woman"
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
      "woman hugging gentle monster", "woman hugging a building that is actually a big gentle animals", "woman hugging new species of pokemon", "woman hugging new pet in the year 3000"
    ],
    "correct": 1
  },
  {
    "question": "Question 10",
    "answers": [
      "ragdoll mice in a doll house", "puppet show with rats", "a couple of mice living in a barbie house", "a couple of mice enjoy their new pink house"
    ],
    "correct": 2
  },
  {
    "question": "Question 11",
    "answers": [
      "times square but instead of people there are white rabbits", "futuristic Alice in Wonderland", "the apocalypse in which white rabbits are the only ones left in the world", "white rabbit gang takes over New York"
    ],
    "correct": 0
  },
  {
    "question": "Question 12",
    "answers": [
      "meerkats stand in line to buy lottery tickets", "meerkats are impatient to get cigarretes", "meerkats in a capitalist dystopy", "meerkats stand in line to pay at the meerkat supermarket"
    ],
    "correct": 3
  }, 

  {
    "question": "Question 13",
    "answers": [
      "evil corrupt mayor of otter city", "Benedict Cumberbatch as an otter", " oil painting of an otter dressed as a businessman", "portrait of middle aged upper class otter male"
    ],
    "correct": 2
  },

  {
    "question": "Question 14",
    "answers": [
      "medieval painting of a dragon enfuriated because he doesn't understand javascript", "dragon is too old to understand computers", "dragon complaining after stepping barefoot on a lego piece", "dragon cursing the long customer service telephone queues"
    ],
    "correct": 0
  },

  {
    "question": "Question 15",
    "answers": [
      "chicken is a tourist in Egypt", "sacred chicken in Egypt", "royal teal chicken with ancient egyptian jewels supervising the construction of pyramids", "the rare Egyptian teal chicken, now extinct."
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