

//GETTING RANDOM NUMBER WITHIN A RANGE


function randomNumGen(min, max) {
  var randomNum = Math.random() * (max - min) + min;
  return Math.round(randomNum);
};

//EVENT LISTENER FOR SETTING MIN AND MAX NUMBER
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
  console.log(parseMin);
  console.log(parseMax);
  // console.log('yes!')
});

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

submitGuessButton.addEventListener('click', function (){
  // Refactor: For each challenger, update name, current guess, and show msg if too high or too low

  // SPECIFIC:
  // Update Latest Score Challenger 1 name with entered value
  challenger1UpdatedName.innerText = challenger1Name.value;
  // Update Latest Score Challenger 1 current guess
  challenger2UpdatedName .innerText = challenger2Name.value;

  // Update Latest Score Challenger 2 current guess
  challenger1PinkGuess.innerText = challenger1Guess.value;
  // Update Latest Score Challenger 1 high/low

  // Update Latest Score Challenger 2 name with entered value
  challenger2PinkGuess.innerText = challenger2Guess.value;
  // Update Latest Score Challenger 2 high/low
});



  // if (userGuess.value.match(numbers)) {
    // console.log('numba one stunna')
    //ACCEPT USER'S VALUE AND PROCEED WITH GAME
  // }

  // if (userName.value.match(name)) {
  //   console.log('I see you')
  // } else {
    //error message -- insert name
  // }

//CLEAR GAME BUTTON FUNCTIONALITY
var clearGameButton = document.querySelector('#clear-game-button');
var leftSideBoxes = document.querySelector('.left-side-boxes');
var leftSide = document.querySelector('left-side-cards');
var clearGame = document.querySelectorAll('form');
var inputForm = document.querySelectorAll('input-form-box');

clearGameButton.addEventListener('click', function() {
  for (var i = 0; i < clearGame.length; i++) {
    clearGame[i].reset();
  }
});

// function clearForm() {
//   //if there is a value in any of the inputs, enable clear button
//   if (inputForm == '') {
//     clearGameButton.disabled = false;
//   } else {
//     clearGameButton.disabled = true;
//     console.log('test');
//   }
// };
 //else, disable clear button
