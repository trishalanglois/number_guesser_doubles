var min = 1;
var max = 100;
var randomNum = parseInt(Math.random() * (max - min) + min);
var userMinNum = document.getElementById('user-min-number');
var newMinNum = document.getElementById('min-number-from-form');
var userMaxNum = document.getElementById('user-max-num');
var newMaxNum = document.getElementById('max-number-from-form');
var updateRangeButton = document.getElementById('button-min-max-range-box');
var enableButtons = document.querySelectorAll('.disable-button'); //
var contentInForms = document.querySelectorAll('.input-form-box');
var name = /^[0-9a-zA-Z]+$/;
var number = /^[0-9]+$/;
var submitGuessButton = document.getElementById('submit-guess-button');
var challenger1Name = document.getElementById('challenger-1-name-input');
var challenger1UpdatedName = document.querySelector('.challenger-1-input-display');
var challenger1PinkGuess = document.querySelector('#challenger-1-number-guess');
var challenger1Guess = document.getElementById('challenger-1-guess');
var challenger2Name = document.getElementById('challenger-2-name-input');
var challenger2UpdatedName = document.querySelector('.challenger-2-input-display');
var challenger2Guess = document.querySelector('#challenger-2-guess');
var challenger2PinkGuess = document.querySelector('#challenger-2-number-guess');
var guessFeedbackMessage1 = document.querySelector('#challenger-1-message-guess');
var guessFeedbackMessage2 = document.querySelector('#challenger-2-message-guess');
var errorChallenger1Name = document.querySelector('#error-msg-challenger-1-name');
var errorChallenger1Guess = document.querySelector('#error-msg-challenger-1-guess');
var errorChallenger2Name = document.querySelector('#error-msg-challenger-2-name');
var errorChallenger2Guess = document.querySelector('#error-msg-challenger-2-guess');
var winnerCard = document.querySelector('.winner-card');
var parseChallenger1 = parseInt(challenger1Guess.value);
var parseChallenger2 = parseInt(challenger2Guess.value);
var clearGameButton = document.querySelector('#clear-game-button');
var leftSideBoxes = document.querySelector('.left-side-boxes');
var leftSide = document.querySelector('left-side-cards');
var clearGame = document.querySelectorAll('form');
var inputForm = document.querySelectorAll('input-form-box');

updateRangeButton.addEventListener('click', function() {
  newMinNum.innerText = userMinNum.value;
  newMaxNum.innerText = userMaxNum.value;
  var parseMin = parseInt(userMinNum.value);
  var parseMax = parseInt(userMaxNum.value);
  randomNumGen(parseMin, parseMax);
  disableButtons();
});

submitGuessButton.addEventListener('click', clickSubmit);

clearGameButton.addEventListener('click', clearGame);

for (var i = 0; i < contentInForms.length; i++) {
  contentInForms[i].addEventListener('input', function() {
    for (var j = 0; j < enableButtons.length; j++) {
      enableButtons[j].disabled = false;
      enableButtons[j].classList.remove('disable-button');
    }
  });
  enableButtons.disabled = false;
};


function randomNumGen(min, max) {
  randomNum = parseInt(Math.random() * (max - min) + min);
  console.log(randomNum);
};

function disableButtons() {
  enableButtons.disabled = true;
};

function clickSubmit(){
  checkName1();
  checkName2();
  checkGuess1();
  checkGuess2();
  updateNamesGuesses();
  checkChallenger1Guess();
  checkChallenger2Guess();
};

function clearGame() {
  for (var i = 0; i < clearGame.length; i++) {
    clearGame[i].reset();
  }
};
function checkName1(){
  if (challenger1Name.value !== name) {
    errorChallenger1Name.style.display = 'inline';
  } else {
    errorChallenger1Name.style.display = 'none';
  }
};
function checkName2(){
  if (challenger2Name.value !== name) {
    errorChallenger2Name.style.display = 'inline';
  } else {
    errorChallenger2Name.style.display = 'none';
  }
};
function checkGuess1(){
  if (challenger1Guess.value !== number) {
    errorChallenger1Guess.style.display = 'inline';
  } else {
    errorChallenger1Guess.style.display = 'none';
  }
};
function checkGuess2(){
  if (challenger2Guess.value !== number) {
    errorChallenger2Guess.style.display = 'inline';
  } else {
    errorChallenger2Guess.style.display = 'none';
  }
};
function updateNamesGuesses() {
  challenger1UpdatedName.innerText = challenger1Name.value;
  challenger2UpdatedName .innerText = challenger2Name.value;
  challenger1PinkGuess.innerText = challenger1Guess.value;
  challenger2PinkGuess.innerText = challenger2Guess.value;
};
function checkChallenger1Guess() {
  if (parseChallenger1 > randomNum) {
    guessFeedbackMessage1.innerText = "That's too high!"
  } else if (parseChallenger1 < randomNum) {
    guessFeedbackMessage1.innerText = "That's too low!"
  } else {
    guessFeedbackMessage1.innerText = 'BOOM!'
  }
};
function checkChallenger2Guess() {
  if (parseChallenger2 > randomNum) {
    guessFeedbackMessage2.innerText = "That's too high!"
  } else if (parseChallenger2 < randomNum) {
    guessFeedbackMessage2.innerText = "That's too low!"
  } else {
    guessFeedbackMessage2.innerText = 'BOOM!';
    winnerCard.style.display === 'block';
  }
};
