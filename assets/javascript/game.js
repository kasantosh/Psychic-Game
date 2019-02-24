//define variables for game play
var winCount = 1;
var lossCount = 0;
var guessesLeft = 10;
var guessedLetters = [];

// set up array for computer to choose from
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// set up the computer to pick a random indexed value from aray
var ind = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[ind];

console.log(computerChoice);

// add a listener for the user to press a key
document.onkeyup = function(event) {
  var userChoice = event.key;
  // make sure the user selects a value a-z
  var regexp = /[a-z]/gi;
  if (!regexp.test(userChoice)) {
    alert("Please select an alphabet");
  } else {
    console.log(userChoice);
  }
  // reset computer choice if the user loses
  if (guessesLeft <= 0) {
    lossCount++;
    document.getElementById("lossCount").innerHTML = lossCount++;
    console.log("You lost!");
    alert("You lost!");
    guessesLeft = 10;
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("guessesLeft").innerHTML = 10;
    ind = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[ind];
    console.log(computerChoice);
  }
  // compares the randomly selected computer choice and user choice
  if (computerChoice === userChoice) {
    console.log("You won!");
    alert("You won!");
    document.getElementById("winCount").innerHTML = winCount++;
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    ind = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[ind];
    console.log(computerChoice);
    guessesLeft = 10;
    document.getElementById("guessesLeft").innerHTML = 10;
  } else {
    console.log("Guess again!");
    document.getElementById("guessesLeft").innerHTML = guessesLeft--;
    guessedLetters.push(userChoice);
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
  }
};
