// Declaring Variables
var alphabet = "qwertyuiopasdfghjklzxcvbnm";

var userGuesses = [];
var maxGuess = 12;
var guessesLeft = maxGuess;

var phraseBank = ["test","testing"];

// Generates random number to pick a phrase
var rand = Math.floor((Math.random()*phraseBank.length));
var comPhrase = phraseBank[rand];
console.log(comPhrase);

// Display to the user
var displayPhraseArr = [];
//var displayPhrase = "";
for (var i = 0; i < comPhrase.length; i++) {
	displayPhraseArr.push("_");
	console.log(comPhrase[i]);
	console.log(displayPhraseArr.join(""));
}
updateDisplay();

// if (displayPhrase.length != comPhrase.length) {
// 	console.log("phrases don't match");
// }

//document.getElementById("wordToGuess").textContent = displayPhrase;

document.onkeyup = function(event) {
	var userLetter = event.key;

	if (guessesLeft >= 0) {
		if(alphabet.indexOf(userLetter) == -1) {
			return;
		}

		userGuesses.push(userLetter);

		for (var i = 0; i < comPhrase.length; i++) {
	 		if (userLetter === comPhrase[i]) {
	 			displayPhraseArr[i] = comPhrase[i];
	  		}
	 	}

	 	guessesLeft--;
	 	updateDisplay();

	 	if (comPhrase === displayPhraseArr.join("")) {
	 		//console.log("check");
	 		document.getElementById("endStatus").textContent = "You Win";
	 		guessesLeft = -1;
	 	}

	 	if (guessesLeft === 0) {
 			document.getElementById("endStatus").textContent = "You Lose";
 			guessesLeft = -1;
 		}

 	}

 	else if (guessesLeft === -1) {
 		resetGame();
 	}

}

function resetGame () {
	userGuesses = [];
	guessesLeft = maxGuess;

	rand = Math.floor((Math.random()*phraseBank.length));
	comPhrase = phraseBank[rand];

	displayPhraseArr = [];
	for (var i = 0; i < comPhrase.length; i++) {
		displayPhraseArr.push("_");
		console.log(comPhrase[i]);
		console.log(displayPhraseArr.join(""));
	}

	document.getElementById("endStatus").textContent = "";

	updateDisplay();
}

function updateDisplay () {
	//displayPhrase = displayPhraseArr.join("");
	document.getElementById("wordToGuess").textContent = displayPhraseArr.join("");

	document.getElementById("guessesLeft").textContent = guessesLeft;

	document.getElementById("userGuesses").textContent = userGuesses.join(",");
}