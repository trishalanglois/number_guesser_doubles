//GETTING RANDOM NUMBER WITHIN GIVEN RANGE
var min = 1;
var max = 100;
var randomNum = parseInt(Math.random() * (max - min) + min);

function randomNumGen(min, max) {
  randomNum = parseInt(Math.random() * (max - min) + min);
  console.log(randomNum);
};

//EVENT LISTENER FOR SETTING MIN AND MAX NUMBER, THEN GETTING RANDOM NUMBER WITHIN RANGE
var userMinNum = document.getElementById('user-min-number');
var newMinNum = document.getElementById('min-number-from-form');
var userMaxNum = document.getElementById('user-max-num');
var newMaxNum = document.getElementById('max-number-from-form');
var updateRangeButton = document.getElementById('button-min-max-range-box');

updateRangeButton.addEventListener('click', function() {
  newMinNum.innerText = userMinNum.value;
  newMaxNum.innerText = userMaxNum.value;
  var parseMin = parseInt(userMinNum.value);
  var parseMax = parseInt(userMaxNum.value);
  randomNumGen(parseMin, parseMax)
});

//DISABLE/ENABLE RESET AND CLEAR BUTTONS -- look over this again
var enableButtons = document.querySelectorAll('.disable-button'); //
var contentInForms = document.querySelectorAll('.input-form-box');

function disableButtons() {
  enableButtons.disabled = true;
};

for (var i = 0; i < contentInForms.length; i++) {
  contentInForms[i].addEventListener('input', function() {
    for (var j = 0; j < enableButtons.length; j++) {
      enableButtons[j].disabled = false;
      enableButtons[j].classList.remove('disable-button');
    }
  });
  enableButtons.disabled = false;
};

//CHALLENGER'S NAME AND THE NUMER THEY WANT TO Guess, CHECKING FOR NUMERIC AND ALPHANUMERIC COMPATIBILITY
var name = /^[0-9a-zA-Z]+$/;
var numbers = /^[0-9]+$/;
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


submitGuessButton.addEventListener('click', function (){
  // Refactor: For each challenger, check for alpha/numeric values, update name, current guess, and show msg if too high or too low

// check challenger1Name == alphanumeric
  if (challenger1Name.value !== name) {
    console.log('not a name');
    //show name error message under challenger 1// -- USE WORD RETURN FOR ERROR
  }
  if (challenger1Guess.value !== numbers) {
    console.log('not a number');
    //show number error message under guess 1 -- USE WORD RETURN FOR ERROR
  }
  if (challenger2Name.value !== name) {
    //show name error message under challenger 2 -- USE WORD RETURN FOR ERROR
  }
  if (challenger2Guess.value !== numbers) {
    //show number error message under guess 2 -- USE WORD RETURN FOR ERROR
  }

  challenger1UpdatedName.innerText = challenger1Name.value;
  challenger2UpdatedName .innerText = challenger2Name.value;
  challenger1PinkGuess.innerText = challenger1Guess.value;
  challenger2PinkGuess.innerText = challenger2Guess.value;

  //change guesses to parsed values
  var parseChallenger1 = parseInt(challenger1Guess.value);
  var parseChallenger2 = parseInt(challenger2Guess.value);

  // Update Latest Score Challenger 1 high/low
  if (parseChallenger1 > randomNum) {
    guessFeedbackMessage1.innerText = "That's too high!"
  } else if (parseChallenger1 < randomNum) {
    guessFeedbackMessage1.innerText = "That's too low!"
  } else {
    guessFeedbackMessage1.innerText = 'BOOM!'
  }
  // Update Latest Score Challenger 2 high/low
  if (parseChallenger2 > randomNum) {
    guessFeedbackMessage2.innerText = "That's too high!"
  } else if (parseChallenger2 < randomNum) {
    guessFeedbackMessage2.innerText = "That's too low!"
  } else {
    guessFeedbackMessage2.innerText = 'BOOM!'
  }

});

//CLEAR GAME BUTTON FUNCTIONALITY
var clearGameButton = document.querySelector('#clear-game-button');
var leftSideBoxes = document.querySelector('.left-side-boxes');
var leftSide = document.querySelector('left-side-cards');
var clearGame = document.querySelectorAll('form');
var inputForm = document.querySelectorAll('input-form-box');

// function clearButtonDisable() {
//   if (clearGame.value == '') {
//     clearGameButton.disabled = false;
//   } else {
//   clearGameButton.disabled = true;
//   }
// };

clearGameButton.addEventListener('click', function() {
  // console.log('hi');
  for (var i = 0; i < clearGame.length; i++) {
    clearGame[i].reset();
  }
});
