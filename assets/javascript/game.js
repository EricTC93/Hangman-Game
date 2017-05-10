// Declaring Variables
var alphabet = "qwertyuiopasdfghjklzxcvbnm";
var userGuess = "";
var guessesLeft = maxGuess;
var maxGuess = 12;
var guessesLeft = maxGuess;
var phraseBank = ["test","testing"];

// Generates random
var rand = Math.floor((Math.random()*phraseBank.length));
var comPhrase = phraseBank[rand];
console.log(comPhrase);


var displayPhrase = "";
for (var i = 0; i < comPhrase.length; i++) {
	displayPhrase = displayPhrase + "_";
	console.log(comPhrase[i]);
}

if (displayPhrase.length != comPhrase.length) {
	console.log("phrases don't match");
}

document.getElementById("wordToGuess").textContent = displayPhrase;

// var test = "abcdefg";
// test[4] = "b";
// console.log(test.length);