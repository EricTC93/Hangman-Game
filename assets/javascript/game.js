// Declaring Variables
var alphabet = "qwertyuiopasdfghjklzxcvbnm";
alphabet = alphabet + "QWERTYUIOPASDFGHJKLZXCVBNM";
var winNum = 0;

var userGuesses = [];
var maxGuess = 12;
var guessesLeft = maxGuess;
var userLetter;
var letterFound;

var phraseBank = [
	"AJ Lee",
	"Asuka", 
	"Kevin Owens",
	"Lita",
	"Matt and Jeff Hardy",
	"Naomi",
	"Sami Zayn",
	"Sasha Banks" 
	];

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

	var hintTitle;
	audio.pause();

	if (phr === "AJ Lee") {
		hintTitle = "Let's Light It Up"
		audio = new Audio("assets/audio/Let's_Light_It_Up.mp3");
		audio.play();
	}

	else if (phr === "Asuka") {
		hintTitle = "The Future"
		audio = new Audio("assets/audio/The_Future.mp3");
		audio.play();
	}

	else if (phr === "Kevin Owens") {
		hintTitle = "Fight"
		audio = new Audio("assets/audio/Fight.m4a");
		audio.play();
	}

	else if (phr === "Lita") {
		hintTitle = "LoveFuryPassionEnergy"
		audio = new Audio("assets/audio/LoveFuryPassionEnergy.mp3");
		audio.play();
	}

	else if (phr === "Matt and Jeff Hardy") {
		hintTitle = "Loaded"
		audio = new Audio("assets/audio/Loaded.mp3");
		audio.play();
	}

	else if (phr === "Sami Zayn") {
		hintTitle = "Worlds Apart"
		audio = new Audio("assets/audio/Worlds_Apart.m4a");
		audio.play();
	}

	else if (phr === "Naomi") {
		hintTitle = "Amazing"
		audio = new Audio("assets/audio/Amazing_Remix.mp3");
		audio.play();
	}

	else if (phr === "Sasha Banks") {
		hintTitle = "Sky's the Limit"
		audio = new Audio("assets/audio/Sky's_the_Limit.m4a");
		audio.play();
	}

	audio.loop = true;
	document.getElementById("hintTitle").textContent = hintTitle;
}