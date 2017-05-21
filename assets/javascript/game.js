// Declaring Variables
var themes = ["WWE","SSB64"]
var currentTheme = themes[0];

var alphabet = "qwertyuiopasdfghjklzxcvbnm";
alphabet = alphabet + "QWERTYUIOPASDFGHJKLZXCVBNM";
var winNum = 0;

var userGuesses = [];
var maxGuess = 12;
var guessesLeft = maxGuess;
var userLetter;
var letterFound;

var comPhrase;
var audio = new Audio("");

var phraseBank0 = [
	"AJ Lee",
	"AJ Styles",
	"Asuka",
	"Bayley",
	"Becky Lynch",
	"CM Punk",
	"Daniel Bryan",
	"Dean Ambrose",
	"Dwayne 'The Rock' Johnson",
	"Eddie Guerrero",
	"Jason Jordan & Chad Gable",
	"John Cena",
	"Johnny Gargano & Tommaso Ciampa", 
	"Kevin Owens",
	"Kofi, Big E & Xavier Woods",
	"Kurt Angle",
	"Lita",
	"Matt & Jeff Hardy",
	"Naomi",
	"Sami Zayn",
	"Sasha Banks", 
	"Shinsuke Nakamura",
	"The Miz",
	];

var phraseBank1 = [
	"Luigi",
	"Mario",
	"Mushroom Kingdom",
	"Peach's Castle",

	"Congo Jungle",
	"Donkey Kong",

	"Hyrule Castle",
	"Link",

	"Planet Zebes",
	"Samus",

	"Captain Falcon",
	"Mute City",

	"Ness",
	"Onett",

	"Yoshi",
	"Yoshi's Island",

	"Dream Land",
	"Kirby",

	"Fox",
	"Sector Z",

	"Jigglypuff",
	"Pikachu",
	"Saffron City"	
	];

startGame(currentTheme);



document.onkeyup = function(event) {

	userLetter = event.key;

	// Changes theme
	if (userLetter === "0" && currentTheme != "WWE") {
		themeSwitch(0);
	}

	else if (userLetter === "1" && currentTheme != "SSB64") {
		themeSwitch(1);
	}

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
	 		if (currentTheme === "SSB64") {
	 			playSuccessAudio (comPhrase);
	 		}
	 		startGame(currentTheme);
	 	}

 	}

 	// You ran out of tries
	if (guessesLeft === 0) {
 		startGame(currentTheme);
 	}

}

// Resets Variables
function startGame (thm) {

	if (thm === "WWE") {
		var img = document.getElementById("logo");
		img.src = "assets/images/WWELogo.png";

		var img2 = document.getElementById("logo2");
		img2.src = "assets/images/WWELogo2.gif";

		rand = Math.floor((Math.random()*phraseBank0.length));
		var newComPhrase = phraseBank0[rand];
	}

	else if (thm === "SSB64") {
		var img = document.getElementById("logo");
		img.src = "assets/images/smash64Logo.png";

		var img2 = document.getElementById("logo2");
		img2.src = "assets/images/N64Logo.gif";

		rand = Math.floor((Math.random()*phraseBank1.length));
		var newComPhrase = phraseBank1[rand];
	}

	// Checks for repeat phrases
	if( newComPhrase != comPhrase ) {

		comPhrase = newComPhrase;
		userGuesses = [];
		guessesLeft = maxGuess;

		if (thm === "WWE"){
			playAudioHint(comPhrase);
		}

		else if (thm === "SSB64") {
			document.getElementById("hintTitle").textContent = "";
		}

		// Creates starting display for user
		displayPhraseArr = [];
		for (var i = 0; i < comPhrase.length; i++) {
			if( alphabet.indexOf(comPhrase[i]) == -1 ) {
				displayPhraseArr.push(comPhrase[i]);
			}

			else {	
				displayPhraseArr.push("_");
			}
		}

		// Displays Win count
		if(winNum > 0){
			document.getElementById("winNum").textContent = ("Wins: " + winNum);
		}

		else {
			document.getElementById("winNum").textContent = ("");
		}

		updateDisplay();
	}

	else {
		startGame(currentTheme);
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
	for(var i = 0; i < userGuesses.length; i++) {
		if (userLetter === userGuesses[i]) {
			return true;
		}
	}

	return false;
}

// Plays Audio depending on phrase
function playAudioHint (phr) {

	var hintTitle;
	audio.pause();

	if (phr === "AJ Lee") {
		hintTitle = "Let's Light It Up"
		audio = new Audio("assets/audio/Let's_Light_It_Up.mp3");
		audio.play();
	}

	else if (phr === "AJ Styles") {
		hintTitle = "Phenomenal"
		audio = new Audio("assets/audio/Phenomenal.mp3");
		audio.play();
	}

	else if (phr === "Asuka") {
		hintTitle = "The Future"
		audio = new Audio("assets/audio/The_Future.mp3");
		audio.play();
	}

	else if (phr === "Bayley") {
		hintTitle = "Turn it Up"
		audio = new Audio("assets/audio/Turn_it_Up.mp3");
		audio.play();
	}

	else if (phr === "Becky Lynch") {
		hintTitle = "Celtic Invasion"
		audio = new Audio("assets/audio/Celtic_Invasion.mp3");
		audio.play();
	}

	else if (phr === "CM Punk") {
		hintTitle = "Cult of Personality"
		audio = new Audio("assets/audio/Cult_of_Personality.mp3");
		audio.play();
	}

	else if (phr === "Daniel Bryan") {
		hintTitle = "Flight of the Valkyries"
		audio = new Audio("assets/audio/Flight_of_the_Valkyries.mp3");
		audio.play();
	}

	else if (phr === "Dean Ambrose") {
		hintTitle = "Retaliation"
		audio = new Audio("assets/audio/Retaliation.mp3");
		audio.play();
	}

	else if (phr === "Dwayne 'The Rock' Johnson") {
		hintTitle = "Electrifying"
		audio = new Audio("assets/audio/Electrifying.mp3");
		audio.play();
	}

	else if (phr === "Eddie Guerrero") {
		hintTitle = "Lie, Cheat & Steal"
		audio = new Audio("assets/audio/Lie_Cheat_Steal.mp3");
		audio.play();
	}

	else if (phr === "Jason Jordan & Chad Gable") {
		hintTitle = "Elite"
		audio = new Audio("assets/audio/Elite.mp3");
		audio.play();
	}

	else if (phr === "John Cena") {
		hintTitle = "The Time is Now"
		audio = new Audio("assets/audio/The_Time_is_Now.mp3");
		audio.play();
	}

	else if (phr === "Johnny Gargano & Tommaso Ciampa") {
		hintTitle = "Chrome Hearts"
		audio = new Audio("assets/audio/Chrome_Hearts.mp3");
		audio.play();
	}

	else if (phr === "Kevin Owens") {
		hintTitle = "Fight"
		audio = new Audio("assets/audio/Fight.m4a");
		audio.play();
	}

	else if (phr === "Kofi, Big E & Xavier Woods") {
		hintTitle = "New Way"
		audio = new Audio("assets/audio/New_Way.mp3");
		audio.play();
	}

	else if (phr === "Kurt Angle") {
		hintTitle = "Medal"
		audio = new Audio("assets/audio/Medal.mp3");
		audio.play();
	}

	else if (phr === "Lita") {
		hintTitle = "LoveFuryPassionEnergy"
		audio = new Audio("assets/audio/LoveFuryPassionEnergy.mp3");
		audio.play();
	}

	else if (phr === "Matt & Jeff Hardy") {
		hintTitle = "Loaded"
		audio = new Audio("assets/audio/Loaded.mp3");
		audio.play();
	}

	else if (phr === "Naomi") {
		hintTitle = "Amazing"
		audio = new Audio("assets/audio/Amazing_Remix.mp3");
		audio.play();
	}

	else if (phr === "Sami Zayn") {
		hintTitle = "Worlds Apart"
		audio = new Audio("assets/audio/Worlds_Apart.m4a");
		audio.play();
	}

	else if (phr === "Sasha Banks") {
		hintTitle = "Sky's the Limit"
		audio = new Audio("assets/audio/Sky's_the_Limit.m4a");
		audio.play();
	}

	else if (phr === "Shinsuke Nakamura") {
		hintTitle = "Rising Sun"
		audio = new Audio("assets/audio/Rising_Sun.mp3");
		audio.play();
	}

	else if (phr === "The Miz") {
		hintTitle = "I Came to Play"
		audio = new Audio("assets/audio/I_Came_to_Play.mp3");
		audio.play();
	}

	audio.loop = true;
	document.getElementById("hintTitle").textContent = hintTitle;
}

function playSuccessAudio (phr) {
	audio.pause();

	if( phr === "Luigi" || phr === "Mario" || phr === "Mushroom Kingdom" || phr === "Peach's Castle") {
		audio = new Audio("assets/audio/marioWin.mp3");
		audio.play();
	}

	else if( phr === "Congo Jungle" || phr === "Donkey Kong" ) {
		audio = new Audio("assets/audio/dkWin.mp3");
		audio.play();
	}

	else if( phr === "Hyrule Castle" || phr === "Link" ) {
		audio = new Audio("assets/audio/linkWin.mp3");
		audio.play();
	}

	else if( phr === "Planet Zebes" || phr === "Samus" ) {
		audio = new Audio("assets/audio/samusWin.mp3");
		audio.play();
	}

	else if( phr === "Captain Falcon" || phr === "Mute City" ) {
		audio = new Audio("assets/audio/captainFalconWin.mp3");
		audio.play();
	}

	else if( phr === "Ness" || phr === "Onett" ) {
		audio = new Audio("assets/audio/nessWin.mp3");
		audio.play();
	}

	else if( phr === "Yoshi" || phr === "Yoshi's Island" ) {
		audio = new Audio("assets/audio/yoshiWin.mp3");
		audio.play();
	}

	else if( phr === "Dream Land" || phr === "Kirby" ) {
		audio = new Audio("assets/audio/kirbyWin.mp3");
		audio.play();
	}

	else if( phr === "Fox" || phr === "Sector Z" ) {
		audio = new Audio("assets/audio/foxWin.mp3");
		audio.play();
	}

	else if( phr === "Pikachu" || phr === "Jigglypuff" || phr === "Saffron City" ) {
		audio = new Audio("assets/audio/pokemonWin.mp3");
		audio.play();
	}

	audio.loop = false;
}

// Switches theme
function themeSwitch (index) {
	var targetElm = document.body;
	targetElm.className = themes[index];

	audio.pause();
	winNum = 0;
	currentTheme = themes[index];
	startGame(currentTheme);
}