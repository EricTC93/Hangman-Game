// Declaring Variables
var alphabet = "qwertyuiopasdfghjklzxcvbnm";
alphabet = alphabet + "QWERTYUIOPASDFGHJKLZXCVBNM";
var winNum = 0;

var userGuesses = [];
var maxGuess = 12;
var guessesLeft = maxGuess;
var userLetter;
var letterFound;

var phraseBank = ["Aj Lee", "Asuka", "Lita", "Sasha Banks", "space bar test#2"];
var comPhrase;

var audio = new Audio("");

// Generates random number to pick a phrase
// var rand = Math.floor((Math.random()*phraseBank.length));
// var comPhrase = phraseBank[rand];
// console.log(comPhrase);

// Display to the user
// var displayPhraseArr = [];
// for (var i = 0; i < comPhrase.length; i++) {

// 	if( alphabet.indexOf(comPhrase[i]) == -1) {
// 		displayPhraseArr.push(comPhrase[i]);
// 	}

// 	else {	
// 		displayPhraseArr.push("_");
// 	}
		
// 		console.log(comPhrase[i]);
// 		console.log(displayPhraseArr.join(""));
// }
// updateDisplay();

startGame();


document.onkeyup = function(event) {
	userLetter = event.key;

	// The game is still going or just ended
	if (guessesLeft > 0) {

		// Checks for valid input
		if( alphabet.indexOf(userLetter) == -1 || repeatGuess() ) {
			return;
		}

		userGuesses.push(userLetter);
		letterFound = false;

		for (var i = 0; i < comPhrase.length; i++) {
	 		if (userLetter === comPhrase[i] || userLetter.toUpperCase() === comPhrase[i]) {
	 			displayPhraseArr[i] = comPhrase[i];
	 			letterFound = true;
	  		}
	 	}

	 	// Deducts a guess if the letter is not in the phrase
	 	if (!letterFound) {
	 		guessesLeft--;
	 	}

	 	updateDisplay();

	 	// You are sucessful
	 	if (comPhrase === displayPhraseArr.join("")) {
	 		winNum++;
	 		startGame();
	 	}

 	}

 	// You ran out of tries
	if (guessesLeft === 0) {
 		startGame();
 	}

}

// Resets Variables
function startGame () {

	rand = Math.floor((Math.random()*phraseBank.length));
	var newComPhrase = phraseBank[rand];

	if( newComPhrase != comPhrase ) {

		comPhrase = newComPhrase;
		userGuesses = [];
		guessesLeft = maxGuess;

		playAudio(comPhrase);

		displayPhraseArr = [];
		for (var i = 0; i < comPhrase.length; i++) {
			if( alphabet.indexOf(comPhrase[i]) == -1 ) {
				displayPhraseArr.push(comPhrase[i]);
			}

			else {	
				displayPhraseArr.push("_");
			}
			
			console.log(comPhrase[i]);
			console.log(displayPhraseArr.join(""));
		}

		// Displays Win count
		if(winNum > 0){
			document.getElementById("winNum").textContent = ("Wins: " + winNum);
		}

		updateDisplay();
	}

	else {
		startGame();
	}
}

// Updates the display
function updateDisplay () {

	document.getElementById("wordToGuess").textContent = displayPhraseArr.join("");

	document.getElementById("guessesLeft").textContent = guessesLeft;

	document.getElementById("userGuesses").textContent = userGuesses.join(" ");
}

// Checks for repeat guesses
function repeatGuess () {
	console.log(userGuesses.length);
	for(var i = 0; i < userGuesses.length; i++) {
		if (userLetter === userGuesses[i]) {
			console.log("true");
			return true;
		}
	}
	console.log("false");
	return false;
}

function playAudio (phr) {

	audio.pause();

	if (phr === "Aj Lee") {
		audio = new Audio("assets/audio/Let's_Light_It_Up.mp3");
		audio.play();
	}

	else if (phr === "Asuka") {
		audio = new Audio("assets/audio/The_Future.mp3");
		audio.play();
	}

	else if (phr === "Lita") {
		audio = new Audio("assets/audio/LoveFuryPassionEnergy.mp3");
		audio.play();
	}

	else if (phr === "Sasha Banks") {
		audio = new Audio("assets/audio/Sky's_the_Limit.m4a");
		audio.play();
	}

	audio.loop = true;
}