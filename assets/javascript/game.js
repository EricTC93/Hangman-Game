// Declaring Variables
var alphabet = "qwertyuiopasdfghjklzxcvbnm";

var userGuesses = [];
var guessesLeft = maxGuess;
var maxGuess = 12;

var phraseBank = ["test","testing"];

// Generates random number to pick a phrase
var rand = Math.floor((Math.random()*phraseBank.length));
var comPhrase = phraseBank[rand];
console.log(comPhrase);

// Display to the user
var displayPhrase = "";
for (var i = 0; i < comPhrase.length; i++) {
	displayPhrase = displayPhrase + "_";
	console.log(comPhrase[i]);
}

// if (displayPhrase.length != comPhrase.length) {
// 	console.log("phrases don't match");
// }

document.getElementById("wordToGuess").textContent = displayPhrase;


var currentDisplayPhrase = "";
var userLetter = "t";

for (var i = 0; i < comPhrase.length; i++) {
	if (userLetter === comPhrase[i]) {
		currentDisplayPhrase = currentDisplayPhrase + comPhrase[i];
	}

	else {
		currentDisplayPhrase = currentDisplayPhrase + "_";
	}
}

console.log(currentDisplayPhrase);
document.getElementById("wordToGuess").textContent = currentDisplayPhrase;