const question = document.getElementById('question');
const questionImage = document.getElementById('question');
const answer1 = document.getElementById('answer1'); 
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const score = document.getElementById('score'); 
const incorrectGuessesDisplay = document.getElementById('incorrect'); 
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const modalMessage = document.getElementById("modalMessage");
const soundTog = document.getElementById("soundTog");
let correctSound = new Audio('assets/sound/magicsound.mp3');
let incorrectSound = new Audio('assets/sound/failsound.mp3 ');
let questionNumber = 0;
let scoreAmount = 0;
let incorrectGuesses = 0;
let soundToggle = true;

const questions = [
  {
    "image": 'assets/images/question1.png',
    "answers": [
      "Capybara flying", "Capybara dreams of flying like a bird", "Capybara chases birds"
    ],
    "correct": 1
  },
  {
    "image": 'assets/images/question2.png',
    "answers": [
      "rat is coding", "rat creates a dating app profile", "rat plays sims on the computer"
    ],
    "correct": 0
  },
  {
    "image": 'assets/images/question3.png',
    "answers": [
      "kitten makes potion to rule the world", "kitten sorcerer makes a potion that will save the planet", "kitten gets too invested in science homework"
    ],
    "correct": 1
  },
  {
    "image": 'assets/images/question4.png',
    "answers": [
      "a stained glass window at the rat church", "a stained glass window depicting a holy rat", "a stained glass window depicting a possum with a halo"
    ],
    "correct": 2
  },
  {
    "image": 'assets/images/question5.png',
    "answers": [
     "raccoon philosopher discusses his theories", "raccoons discussing politics", "raccoon with glasses psychoanalizes another raccoon."
    ],
    "correct": 2
  },
  {
    "image": 'assets/images/question6.png',
    "answers": [
      "woman is lured by evil neon rabbit in the city of sin", "woman finds comfort in the embrace of a giant rabbit in the neon lights of a big city.", "rabbitman the superhero protects a defenseless young woman"
    ],
    "correct": 1
  },
  {
    "image": 'assets/images/question7.png',
    "answers": [
      "the white greyhound with the pearl earring", "portrait of an upper class white greyhound", "the fairest greyhound in the land"
    ],
    "correct": 0
  },
  {
    "image": 'assets/images/question8.png',
    "answers": [
      "praying mantis happy after eating husband", "praying mantis doing aerobics", "praying mantis dances salsa"
    ],
    "correct": 1
  }, 
  {
    "image": 'assets/images/question9.png',
    "answers": [
      "woman hugging a building that is actually a big gentle animal", "woman hugging new species of pokemon", "woman hugging new pet in the year 3000"
    ],
    "correct": 0
  },
  {
    "image": 'assets/images/question10.png',
    "answers": [
      "ragdoll mice in a doll house", "puppet show with rats", "a couple of mice living in a barbie house"
    ],
    "correct": 2
  },
  {
    "image": 'assets/images/question11.png',
    "answers": [
      "times square but instead of people there are white rabbits", "futuristic Alice in Wonderland", "white rabbit gang takes over New York"
    ],
    "correct": 0
  },
  {
    "image": 'assets/images/question12.png',
    "answers": [
      "meerkats stand in line to buy lottery tickets", "meerkats are impatient to get cigarretes", "meerkats stand in line to pay at the meerkat supermarket"
    ],
    "correct": 2
  }, 
  {
    "image": 'assets/images/question13.png',
    "answers": [
      "evil corrupt mayor of otter city", "Benedict Cumberbatch as an otter", " oil painting of an otter dressed as a businessman"
    ],
    "correct": 2
  },
  {
    "image": 'assets/images/question14.png',
    "answers": [
      "dragon enfuriated because he doesn't understand javascript", "dragon steps barefoot on a lego piece", "dragon cursing the long customer service phone queues"
    ],
    "correct": 0
  },
  {
    "image": 'assets/images/question15.png',
    "answers": [
     "sacred chicken in Egypt", "royal teal chicken with ancient egyptian jewels supervising the construction of pyramids", "the rare Egyptian teal chicken, now extinct."
    ],
    "correct": 1
  }
];
const quizLength = questions.length;
function loadQuestion(questionNumber) {
  questionImage.src = questions[questionNumber].image;
}
/** This function loads the answers*/
function loadAnswers(questionNumber) {
  answer1.innerText = questions[questionNumber].answers[0];
  answer2.innerText = questions[questionNumber].answers[1];
  answer3.innerText = questions[questionNumber].answers[2];
}

/** This function loads the answers and gives feedback to the user*/
function checkAnswer(answerNumber) {
  let correctAnswer = questions[questionNumber].correct;
  //create objects for each audio file so that they play even when previous iteration is not finished. 
  //the TWO lines of code below are the ones that I got from Chat GPT.
  let correctSound = new Audio('assets/sound/magicsound.mp3');
  let incorrectSound = new Audio('assets/sound/failsound.mp3 ');

    if (answerNumber === correctAnswer) {
     scoreAmount++;
     score.innerText = scoreAmount;
     if (soundToggle)
     {
      correctSound.play();
     }
    } else {
     incorrectGuesses++;
     incorrectGuessesDisplay.innerText = incorrectGuesses;
     if (soundToggle)
     {
      incorrectSound.play();
     }
  }
//}
  questionNumber ++;
  if (questionNumber === quizLength) {
    let scoreMessage = "I'm not gonna lie, it didn't go great.";
    if (scoreAmount > 4) {
      scoreMessage = "Not bad! But you can do better.";
    }
    if (scoreAmount > 9) {
      scoreMessage = "Well done! I'm impressed.";
    }
    if (scoreAmount > 13 ) {
      scoreMessage = "Wow, just wow. You should get a job as an AI prompt guesser.";
    }
    modalMessage.innerText = scoreMessage + " Would like like to try again?";
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    };
  } else {
    loadQuestion(questionNumber);
    loadAnswers(questionNumber);
  }
}
function restartGame() {
  window.location.reload();
}
/** This function shows a goodbye message to user when they decide to stop playing after they answered all questions*/
function finishGame() {
  const byeModal = document.getElementById("byeModal");
  const byeMessage = document.getElementById("byeMessage");
  byeMessage.innerText = "Ok, see you next time";
  byeModal.style.display = "block";
  
  const closeButtons = document.querySelectorAll(".close");
  closeButtons.forEach(button => {
    button.onclick = function() {
      byeModal.style.display = "none";
    };
  });
}

/**This function starts the quiz */
function startQuiz() {
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
}
/** This function displays sound toggle and gives the option to enable and disable sound */
function toggleSound() {
  soundToggle = !soundToggle;
  if (soundToggle) {
    soundTog.style.backgroundColor = "green";
    soundTog.innerText = "Disable Sound"
  }
  else {
    soundTog.style.backgroundColor = "red";
    soundTog.innerText = "Enable Sound"
  }
}
startQuiz();