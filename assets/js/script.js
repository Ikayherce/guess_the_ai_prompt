//getters
const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const score = document.getElementById('score');
//code below to try adding sound when answer is correct/
let mySound = new Audio('../../magicsound.mp3')


let questionNumber = 0;
let scoreAmount = 0
const questions = [

  {
    "image": '../assets/images/question1.png',
    "answers": [
      "Capybara flying", "Capybara dreams of flying like a bird", "Capybara chases birds"
    ],
    "correct": 1
  },
  {
    "image": "../assets/images/question2.png",
    "answers": [
      "rat is coding", "rat creates a dating app profile", "rat plays sims on the computer"
    ],
    "correct": 0
  },
  {
    "question": "Question 3",
    "answers": [
      "kitten makes potion to rule the world", "kitten sorcerer makes a potion that will save the planet", "kitten gets too invested in science homework"
    ],
    "correct": 1
  },
  {
    "question": "Question 4",
    "answers": [
      "a stained glass window at the rat church", "a stained glass window depicting a holy rat", "a stained glass window depicting a possum with a halo"
    ],
    "correct": 2
  },
  {
    "question": "Question 5",
    "answers": [
     "raccoon philosopher discusses his theories", "raccoons discussing politics", "raccoon with glasses psychoanalizes another raccoon."
    ],
    "correct": 2
  },
  {
    "question": "Question 6",
    "answers": [
      "woman is lured by evil neon rabbit in the city of sin", "woman finds comfort in the embrace of a giant rabbit in the neon lights of a big city.", "rabbitman the superhero protects a defenseless young woman"
    ],
    "correct": 1
  },
  {
    "question": "Question 7",
    "answers": [
      "the white greyhound with the pearl earring", "portrait of an upper class white greyhound", "the fairest greyhound in the land"
    ],
    "correct": 0
  },
  {
    "question": "Question 8",
    "answers": [
      "praying mantis happy after eating husband", "praying mantis doing aerobics", "praying mantis dances salsa"
    ],
    "correct": 1
  }, 
  {
    "question": "Question 9",
    "answers": [
      "woman hugging a building that is actually a big gentle animal", "woman hugging new species of pokemon", "woman hugging new pet in the year 3000"
    ],
    "correct": 0
  },
  {
    "question": "Question 10",
    "answers": [
      "ragdoll mice in a doll house", "puppet show with rats", "a couple of mice living in a barbie house"
    ],
    "correct": 2
  },
  {
    "question": "Question 11",
    "answers": [
      "times square but instead of people there are white rabbits", "futuristic Alice in Wonderland", "white rabbit gang takes over New York"
    ],
    "correct": 0
  },
  {
    "question": "Question 12",
    "answers": [
      "meerkats stand in line to buy lottery tickets", "meerkats are impatient to get cigarretes", "meerkats stand in line to pay at the meerkat supermarket"
    ],
    "correct": 2
  }, 

  {
    "question": "Question 13",
    "answers": [
      "evil corrupt mayor of otter city", "Benedict Cumberbatch as an otter", " oil painting of an otter dressed as a businessman"
    ],
    "correct": 2
  },

  {
    "question": "Question 14",
    "answers": [
      "dragon enfuriated because he doesn't understand javascript", "dragon steps barefoot on a lego piece", "dragon cursing the long customer service phone queues"
    ],
    "correct": 0
  },

  {
    "question": "Question 15",
    "answers": [
     "sacred chicken in Egypt", "royal teal chicken with ancient egyptian jewels supervising the construction of pyramids", "the rare Egyptian teal chicken, now extinct."
    ],
    "correct": 1
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
    //code below to try adding sound when answer is correct//
    mySound.play()
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