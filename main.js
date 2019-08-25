

//GETTING RANDOM NUMBER WITHIN A RANGE
function randomNumGen(min, max) { //Creates function to generate our random number
  var randomNum = Math.random() * (max - min) + min // Math.random finds a random number between 0 and 1 and somehow the other operations mathematically make that a number much larger
  return Math.round(randomNum); //This rounds the decimal that we just got to an integer
};
// console.log(randomNumGen(1, 100)); // calls the function, giving us our random whole number

//EVENT LISTENER FOR SETTING MIN AND MAX NUMBER
//MIN NUMBER
var userMinNum = document.getElementById('user-min-number'); //sets variable for the user's number they will input
var newMinNum = document.getElementById('min-number-from-form'); //sets variable for number shown that's bold and underlined on the second card
//MAX NUMBER -- same functionality as above but for the max number
var userMaxNum = document.getElementById('user-max-num');
var newMaxNum = document.getElementById('max-number-from-form');
var updateRangeButton = document.getElementById('button-min-max-range-box'); //looks for something with id 'button-min-max-range' (our button)

updateRangeButton.addEventListener('click', function() { //when button it clicked, this will invoke the function
  newMinNum.innerText = userMinNum.value; //takes the old displayed number and replaces it with the value that the user puts into the form
  newMaxNum.innerText = userMaxNum.value;
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

  // else if (true) {
  //
  // } else {
  //   //SHOW ERROR MESSAGE
  // } else {
  //   //show nothing
  // }


  // if (userName.value.match(name)) {
  //   console.log('I see you')
  // } else {
    //error message -- insert name
  // }

  // challenger1PinkGuess.innerText = challenger1EnteredGuess.value;
  // challenger2PinkGuess.innerText = challenger2EnteredGuess.value;

// });


//
// submitGuessButton.addEventListener('click', function() {
//   if (userName.value.match(name)) {
//     console.log('I see you')
//   } else {
//     //error message -- insert name
//   }
// });

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

 //DISPLAY GUESSES
// var challenger1PinkGuess = document.querySelector('#challenger-1-number-guess');
// var challenger2PinkGuess = document.querySelector('#challenger-2-number-guess');
// var challenger1EnteredGuess = document.querySelector('#challenger-1-guess');
// var challenger2EnteredGuess = document.querySelector('#challenger-2-guess');
//
// submitGuessButton.addEventListener('click', function() {
//   challenger1PinkGuess.innerText = challenger1EnteredGuess.value;
//   challenger2PinkGuess.innerText = challenger2EnteredGuess.value;
// });


// REPLACING NAMES
// // document.querySelectorAll('challenger-1-name-input'); //looks on our page for where the user is entering 'challenger-1-name-input'
//
// var challengerOneName = document.querySelector('#challenger-1-name-input').value; //does the same thing as above, but we're just setting up a variable for it
// var submitGuessButton = document.querySelector('#submit-guess-button');
// var challengerOneUpdatedNames = document.querySelectorAll('.challenger-1-name-input'); //sets variable for our eventListener below
//
// console.log(challengerOneName);
// console.log(challengerOneUpdatedNames);
//
// submitGuessButton.addEventListener('click', replaceChallengerOneName); //addsEventListener to the Submit Guess Button
//
// function replaceChallengerOneName() { //creates function that will be called when our Submit Guess Button is clicked
//   for (var i = 0; i < challengerOneUpdatedNames.length; i++) { //
//     challengerOneUpdatedNames[i].innerText = challengerOneName; //
//     // console.log('success!');
//   }
// }
