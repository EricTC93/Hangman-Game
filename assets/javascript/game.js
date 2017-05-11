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
var displayPhraseArr = [];
var displayPhrase = "";
for (var i = 0; i < comPhrase.length; i++) {
	displayPhraseArr.push("_");
	console.log(comPhrase[i]);
	console.log(displayPhraseArr.join(""));
}
updateDisplayWord();

// if (displayPhrase.length != comPhrase.length) {
// 	console.log("phrases don't match");
// }

document.getElementById("wordToGuess").textContent = displayPhrase;


// var userLetter = "t";

// for (var i = 0; i < comPhrase.length; i++) {
//  	if (userLetter === comPhrase[i]) {
// 		displayPhraseArr[i] = comPhrase[i];
//  	}
// }

// updateDisplayWord();

document.onkeyup = function(event) {
	var userLetter = event.key;

	userGuesses.push(userLetter);

	if(alphabet.indexOf(userLetter) == -1) {
		return;
	}

	for (var i = 0; i < comPhrase.length; i++) {
 		if (userLetter === comPhrase[i]) {
 			displayPhraseArr[i] = comPhrase[i];
  		}
 	}

 	updateDisplayWord();
}

function updateDisplayWord () {
	displayPhrase = displayPhraseArr.join("");
	document.getElementById("wordToGuess").textContent = displayPhrase;
}