

//GETTING RANDOM NUMBER WITHIN A RANGE
function randomNumGen(min, max) { //Creates function to generate our random number
  var randomNum = Math.random() * (max - min) + min // Math.random finds a random number between 0 and 1 and somehow the other operations mathematically make that a number much larger
  return Math.round(randomNum); //This rounds the decimal that we just got to an integer
};
console.log(randomNumGen(1, 100)); // calls the function, giving us our random whole number

//EVENT LISTENER FOR SETTING MIN AND MAX NUMBER
//MIN NUMBER
var userMinNum = document.getElementById('user-min-number'); //sets variable for the user's number they will input
var newMinNum = document.getElementById('min-number-from-form'); //sets variable for number shown that's bold and underlined on the second card
var minNum = document.getElementById('button-min-max-range-box'); //looks for something with id 'button-min-max-range' (our button)

minNum.addEventListener('click', function() { //when button it clicked, this will invoke the function
  newMinNum.innerText = userMinNum.value; //takes the old displayed number and replaces it with the value that the user puts into the form
  // console.log('yes!')
});
//MAX NUMBER -- same functionality as above but for the max number
var userMaxNum = document.getElementById('user-max-num');
var newMaxNum = document.getElementById('max-number-from-form');
var maxNum = document.getElementById('button-min-max-range-box');

maxNum.addEventListener('click', function() {
  newMaxNum.innerText = userMaxNum.value;
  // console.log('max yes!')
});

//CHALLENGER'S NAME AND THE NUMER THEY WANT TO GUESS
//ONLY ACCEPT ALPHANUMERC VALUES
var submitGuessButton = document.getElementById("submit-guess-button");
var userName = document.getElementById("challenger-1-name-input");
var alphanumeric = /^[a-z0-9]+$/i;

submitGuessButton.addEventListener('click', function() {
  if (userName.value.match(alphanumeric)) {
    console.log('okay, I see you')
  } else {
    //SHOW ERROR MESSAGE
  };
})


//ONLY ACCEPT NUMERIC VALUES
var submitGuessButton = document.getElementById("submit-guess-button");
var userGuess = document.getElementById('challenger-1-guess');
var numbers = /^[0-9]+$/;


submitGuessButton.addEventListener('click', function(){
  if (userGuess.value.match(numbers)) {
    console.log('numba one stunna')
    //ACCEPT USER'S VALUE AND PROCEED WITH GAME
  } else {
    //SHOW ERROR MESSAGE
  };

})
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
