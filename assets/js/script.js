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
/** This function checks the answers and gives feedback to user*/
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
  //add modal window with message "ok, see you next time"
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
//new code finishes here 
function startQuiz() {
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
}
function toggleSound() {
  soundToggle = !soundToggle;
  if (soundToggle) {
    soundTog.style.backgroundColor = "green";
    soundTog.innerText = "Enable Sound"
  }
  else {
    soundTog.style.backgroundColor = "red";
    soundTog.innerText = "Disable Sound"
  }
}
startQuiz();
Collapse











7:52
Untitled
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <!-- google fonts -->
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@200;500&family=Cinzel+Decorative:wght@400;700&family=Lato:wght@300&family=Poiret+One&family=Poppins:wght@200;300;400&family=Text+Me+One&family=Tilt+Neon&display=swap" rel="stylesheet">
    <!--Favicon-->  
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">  
    <!--Stylesheet-->  
    <link rel="stylesheet" href="assets/css/style.css">
    <!--Title-->
    <title>Quiz: Guess the AI prompt</title>
</head>
<body>
    <div class="container">
        <h1>Can you guess the AI prompt?</h1>
        <img id="question" src="assets/images/question1.png" alt="ai generated image">
        <button id="answer1" onclick="checkAnswer(0)"></button>
        <button id="answer2" onclick="checkAnswer(1)"></button>
        <button id="answer3" onclick="checkAnswer(2)"></button>
        <hr>
        <div>Score: <span id="score">0</span></div>
        <div>Incorrect guesses: <span id="incorrect">0</span></div>
           <!-- add sound toggle to make audio optional --> 
           <div class="sound"><button id='soundTog' onclick="toggleSound()">Disable Sound</button></div>
        
<!-- The Modal -->
<div id="myModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p id="modalMessage"></p>
    <button onclick="restartGame()">Restart Game</button>
    <button onclick="finishGame()">No, I've had enough!</button>
  </div>
</div>
<!-- add modal for a goodbye message when user chooses to stop playing at the end of the round -->
<div id="byeModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p id="byeMessage">Ok, see you next time!</p>
  </div>
</div>
<!--New code ends here-->
</div>
<script src="assets/js/script.js"></script>
</body>
</html>
Collapse



7:52
Untitled
 
body {
  font-family: 'Poppins', sans-serif;
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(220,177,208,1) 20%, rgba(191,181,218,1) 52%, rgba(192,186,230,1) 57%, rgba(148,187,233,1) 100%);
  color: #3e0e6b;
  cursor: url('../../icons8-magic-wand-64.png'), auto;
  max-width: 100%;
  max-height: 100%; 
}
.container {
  text-align: center;
  justify-content: space-evenly;
  list-style-type: none;
  padding: 50px;
  cursor: url('../../icons8-magic-wand-64.png'), auto;
}
button {
  border: 2px solid #3e0e6b;
  margin: 8px 0;
  border-radius: 2px;
  padding: 12px 20px;
  font-family: 'Poppins', sans-serif;
  background-color:rgba(238,174,202,1);
  color:#3e0e6b;
  cursor: url('../../icons8-magic-wand-64.png'), auto;
  align-items:center;
  justify-content:center;
}
button:hover {
  background-color:rgba(192,186,230,1);
  transition: 0.2s;
}
 img {
   padding: 20px;
   display:flex;
   margin: auto;
}
#modalMessage {
 color: #3e0e6b;
}
/* The Modal (background) */
.modal {
 display: none;  
 position: fixed;  
 z-index: 1; 
 left: 0;
 top: 0;
 width: 100%;  
 height: 100%;  
 overflow: auto;  
 background-color: #3e0e6b;  
 background-color:  rgba(191,181,218,1);  
}
/* Modal Content/Box */
.modal-content {
 background-color: rgba(238,174,202,1);
 margin: 15% auto; 
 padding: 20px;
 border: 2px solid #3e0e6b;
 width: 80%;  
}
/* The Close Button */
.close {
 color: rgba(238,174,202,1);
 float: right;
 font-size: 28px;
 font-weight: bold;
}
.close:hover,
.close:focus {
 color: #3e0e6b;
 text-decoration: none;
 cursor: url('../../icons8-magic-wand-64.png'), auto;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(238,174,202,1);
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: rgba(191,181,218,1);
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #3e0e6b;
}
input:focus + .slider {
  box-shadow: 0 0 1px #3e0e6b;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
#soundTog {
  background-color: green;
  font-size: 1rem;
}
/* Media Queries */ 
@media (max-width: 450px) {
 img {
   padding: 0;
   width: 100%;
 }
}