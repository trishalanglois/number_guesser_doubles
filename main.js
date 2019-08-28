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
var nameRegex = /^[0-9a-zA-Z]+$/;
var number = /^[0-9]+$/;
var submitGuessButton = document.getElementById('submit-guess-button');
var challenger1Name = document.getElementById('challenger-1-name-input');
var challenger1Guess = document.getElementById('challenger-1-guess');
var challenger1UpdatedName = document.querySelector('.challenger-1-input-display');
var challenger1PinkGuess = document.querySelector('#challenger-1-number-guess');
var challenger2Name = document.getElementById('challenger-2-name-input');
var challenger2Guess = document.querySelector('#challenger-2-guess');
var challenger2UpdatedName = document.querySelector('.challenger-2-input-display');
var challenger2PinkGuess = document.querySelector('#challenger-2-number-guess');
var guessFeedbackMessage1 = document.querySelector('#challenger-1-message-guess');
var guessFeedbackMessage2 = document.querySelector('#challenger-2-message-guess');
var errorChallenger1Name = document.querySelector('#error-msg-challenger-1-name');
var errorChallenger1Guess = document.querySelector('#error-msg-challenger-1-guess');
var errorChallenger2Name = document.querySelector('#error-msg-challenger-2-name');
var errorChallenger2Guess = document.querySelector('#error-msg-challenger-2-guess');
var winnerCard = document.querySelector('.winner-card');
var clearGameButton = document.querySelector('#clear-game-button');
var leftSideBoxes = document.querySelector('.left-side-boxes');
var leftSide = document.querySelector('.left-side-cards');
var clearGame = document.querySelectorAll('.form');

var aside = document.querySelector('#right-aside')

var resetButton = document.querySelector('#reset-button');
var guessBoxes = document.querySelectorAll('.guess-box');

var userParseMin;
var userParseMax;

updateRangeButton.addEventListener('click', function() {
  newMinNum.innerText = userMinNum.value;
  newMaxNum.innerText = userMaxNum.value;
  userParseMin = parseInt(userMinNum.value);
  userParseMax = parseInt(userMaxNum.value);
  randomNumGen(userParseMin, userParseMax);
  disableButtons();
  setRangeError();
});

submitGuessButton.addEventListener('click', clickSubmit);

clearGameButton.addEventListener('click', clearGameFunc);

aside.addEventListener('click', deleteWinnerCard);

resetButton.addEventListener('click', clearGuesses);

for (var i = 0; i < contentInForms.length; i++) {
  contentInForms[i].addEventListener('input', function() {
    for (var j = 0; j < enableButtons.length; j++) {
      enableButtons[j].disabled = false;
      enableButtons[j].classList.remove('disable-button');
    }
  });
};

function randomNumGen(min, max) {
  randomNum = parseInt(Math.random() * (max - min) + min);
  console.log(randomNum);
};


function disableButtons() {
  enableButtons.disabled = true;
};

function setRangeError() {
  if userMinNum.value > userMaxNum.value {
    
  }
}

function clearGuesses() {
  for (var i = 0; i < guessBoxes.length; i++) {
    guessBoxes[i].value = '';
  }
}

function clickSubmit(){
  checkRange1();
  checkName1();
  checkName2();
  checkGuess1();
  checkGuess2();
  updateNamesGuesses();
  checkChallenger1Guess();
  checkChallenger2Guess();
  checkRange2();
};

function clearGameFunc() {
  for (var i = 0; i < contentInForms.length; i++) {
    contentInForms[i].value = '';
  }
  randomNumGen();
};


function checkName1(){
  console.log(challenger1Name.value);
  if (challenger1Name.value.match(nameRegex)) {
    errorChallenger1Name.style.display = 'none';
  } else {
    errorChallenger1Name.style.display = 'inline';
  }
};
function checkName2(){
  if (challenger2Name.value.match(nameRegex)) {
    errorChallenger2Name.style.display = 'none';
  } else {
    errorChallenger2Name.style.display = 'inline';
  }
};
function checkGuess1(){
  if (challenger1Guess.value.match(number)) {
    errorChallenger1Guess.style.display = 'none';
  } else {
    errorChallenger1Guess.style.display = 'inline';
  }
};

function checkRange1() {
  if (challenger1Guess.value > userParseMax || challenger1Guess.value < userParseMin) {
    errorChallenger1Guess.style.display = 'inline';
  }
};

function checkRange2() {
  if (challenger2Guess.value > userParseMax || challenger2Guess.value < userParseMin) {
    errorChallenger2Guess.style.display = 'inline';
  }
};


function checkGuess2(){
  if (challenger2Guess.value.match(number)) {
    errorChallenger2Guess.style.display = 'none';
  } else {
    errorChallenger2Guess.style.display = 'inline';
  }
};
function updateNamesGuesses() {
  challenger1UpdatedName.innerText = challenger1Name.value;
  challenger2UpdatedName .innerText = challenger2Name.value;
  challenger1PinkGuess.innerText = challenger1Guess.value;
  challenger2PinkGuess.innerText = challenger2Guess.value;
};

function showWinnerCard () {
  aside.innerHTML += `
  <article class="winner-card">
    <div id="challenger-1-vs-challenger-2-wrapper">
      <p class="challenger-1-name-input-display bold-score-box-text">
        Challenger 1 Name
      </p>
      <p class="light-form-text">
        vs
      </p>
      <p class="challenger-2-name-input-display bold-score-box-text">
        Challenger 2 Name
      </p>
    </div>
    <div id="winner-name-and-winner">
      <div class="grey-horizontal-lines"></div>
      <p class="bold-winner-name">
        WINNER NAME
      </p>
      <p class="winner-card-winner">
        WINNER
      </p>
      <div class="grey-horizontal-lines"></div>
    </div>
    <div id="guesses-minutes-button-wrapper">
      <p class="number-of-guesses-statement">
        <span class="number-guesses bold-score-box-text">100</span>
        <span class="light-form-text">GUESSES</span>
      </p>
      <p class="number-of-minutes-statement">
        <span class="number-minutes bold-score-box-text">5</span>
        <span class="light-form-text">MINUTES</span>
      </p>
      <input class="button delete-card" type="button" name="update-button" value="X" />
    </div>`;
  };

function checkChallenger1Guess() {
  var parseChallenger1 = parseInt(challenger1Guess.value);
  console.log(parseChallenger1);
  // console.log(randomNum);
  if (parseChallenger1 > randomNum) {
    guessFeedbackMessage1.innerText = "That's too high!"
  } else if (parseChallenger1 < randomNum) {
    guessFeedbackMessage1.innerText = "That's too low!"
  } else if (parseChallenger1 === randomNum){
    guessFeedbackMessage1.innerText = 'BOOM!';
    showWinnerCard();
  }
};

function checkChallenger2Guess() {
  var parseChallenger2 = parseInt(challenger2Guess.value);
  // console.log(parseChallenger2);
  if (parseChallenger2 > randomNum) {
    guessFeedbackMessage2.innerText = "That's too high!"
  } else if (parseChallenger2 < randomNum) {
    guessFeedbackMessage2.innerText = "That's too low!"
  } else if (parseChallenger2 === randomNum){
    guessFeedbackMessage2.innerText = 'BOOM!';
    // winnerCard.style.display === 'block';
    showWinnerCard();
  };
}

function deleteWinnerCard(event) {
  var winnerCard = document.querySelector('.winner-card');
  if (event.target.classList.contains("delete-card")) {
    event.target.closest('article').remove();
  }
};
