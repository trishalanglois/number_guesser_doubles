

//GETTING RANDOM NUMBER WITHIN A RANGE
function randomNumGen(min, max) { //Creates function to generate our random number
  var randomNum = Math.random() * (max - min) + min // Math.random finds a random number between 0 and 1 and somehow the other operations mathematically make that a number much larger
  return Math.round(randomNum); //This rounds the decimal that we just got to an integer
};

console.log(randomNumGen(1, 100)); // calls the function, giving us our random whole number


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
