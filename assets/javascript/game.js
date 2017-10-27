// Declaring Variables
var themes = ["WWE","SSB64"]
var currentTheme = themes[0];

var alphabet = "qwertyuiopasdfghjklzxcvbnm";
alphabet = alphabet + "QWERTYUIOPASDFGHJKLZXCVBNM";
var winNum = 0;

var userGuesses = [];

var guessesLeft = 16;
var userLetter;
var letterFound;

var comSubject;
var audio = new Audio("");

const bankWWE = [
	{
		phrase:"AJ Lee",
		audioHint:"assets/audio/Let's_Light_It_Up.mp3",
		hintTitle:"Let's Light It Up"
	},

	{
		phrase:"AJ Styles",
		audioHint:"assets/audio/Phenomenal.mp3",
		hintTitle:"Phenomenal"
	},

	{
		phrase:"Asuka",
		audioHint:"assets/audio/The_Future.mp3",
		hintTitle:"The Future"
	},

	{
		phrase:"Bayley",
		audioHint:"assets/audio/Turn_it_Up.mp3",
		hintTitle:"Turn it Up"
	},

	{
		phrase:"Becky Lynch",
		audioHint:"assets/audio/Celtic_Invasion.mp3",
		hintTitle:"Celtic Invasion"
	},

	{
		phrase:"CM Punk",
		audioHint:"assets/audio/Cult_of_Personality.mp3",
		hintTitle:"Cult of Personality"
	},

	{
		phrase:"Daniel Bryan",
		audioHint:"assets/audio/Flight_of_the_Valkyries.mp3",
		hintTitle:"Flight of the Valkyries"
	},

	{
		phrase:"Dean Ambrose",
		audioHint:"assets/audio/Retaliation.mp3",
		hintTitle:"Retaliation"
	},

	{
		phrase:"Dwayne 'The Rock' Johnson",
		audioHint:"assets/audio/Electrifying.mp3",
		hintTitle:"Electrifying"
	},

	{
		phrase:"Eddie Guerrero",
		audioHint:"assets/audio/Lie_Cheat_Steal.mp3",
		hintTitle:"Lie, Cheat & Steal"
	},

	{
		phrase:"Jason Jordan & Chad Gable",
		audioHint:"assets/audio/Elite.mp3",
		hintTitle:"Elite"
	},

	{
		phrase:"John Cena",
		audioHint:"assets/audio/The_Time_is_Now.mp3",
		hintTitle:"The Time is Now"
	},

	{
		phrase:"Johnny Gargano & Tommaso Ciampa",
		audioHint:"assets/audio/Chrome_Hearts.mp3",
		hintTitle:"Chrome Hearts"
	},

	{
		phrase:"Kevin Owens",
		audioHint:"assets/audio/Fight.m4a",
		hintTitle:"Fight"
	},

	{
		phrase:"Kofi, Big E & Xavier Woods",
		audioHint:"assets/audio/New_Way.mp3",
		hintTitle:"New Way"
	},

	{
		phrase:"Kurt Angle",
		audioHint:"assets/audio/Medal.mp3",
		hintTitle:"Medal"
	},

	{
		phrase:"Lita",
		audioHint:"assets/audio/LoveFuryPassionEnergy.mp3",
		hintTitle:"LoveFuryPassionEnergy"
	},

	{
		phrase:"Matt & Jeff Hardy",
		audioHint:"assets/audio/Loaded.mp3",
		hintTitle:"Loaded"
	},

	{
		phrase:"Naomi",
		audioHint:"assets/audio/Amazing_Remix.mp3",
		hintTitle:"Amazing"
	},

	{
		phrase:"Sami Zayn",
		audioHint:"assets/audio/Worlds_Apart.m4a",
		hintTitle:"Worlds Apart"
	},

	{
		phrase:"Sasha Banks",
		audioHint:"assets/audio/Sky's_the_Limit.m4a",
		hintTitle:"Sky's the Limit"
	},

	{
		phrase:"Shinsuke Nakamura",
		audioHint:"assets/audio/Rising_Sun.mp3",
		hintTitle:"Rising Sun"
	},

	{
		phrase:"The Miz",
		audioHint:"assets/audio/I_Came_to_Play.mp3",
		hintTitle:"I Came to Play"
	},
]

const bankSSB64 = [
	{
		phrase:"Luigi",
		audioSuccess:"assets/audio/marioWin.mp3",
	},

	{
		phrase:"Mario",
		audioSuccess:"assets/audio/marioWin.mp3",
	},

	{
		phrase:"Mushroom Kingdom",
		audioSuccess:"assets/audio/marioWin.mp3",
	},

	{
		phrase:"Peach's Castle",
		audioSuccess:"assets/audio/marioWin.mp3",
	},

	{
		phrase:"Congo Jungle",
		audioSuccess:"assets/audio/dkWin.mp3",
	},

	{
		phrase:"Donkey Kong",
		audioSuccess:"assets/audio/dkWin.mp3",
	},

	{
		phrase:"Hyrule Castle",
		audioSuccess:"assets/audio/linkWin.mp3",
	},

	{
		phrase:"Link",
		audioSuccess:"assets/audio/linkWin.mp3",
	},

	{
		phrase:"Planet Zebes",
		audioSuccess:"assets/audio/samusWin.mp3",
	},

	{
		phrase:"Samus",
		audioSuccess:"assets/audio/samusWin.mp3",
	},

	{
		phrase:"Captain Falcon",
		audioSuccess:"assets/audio/captainFalconWin.mp3",
	},

	{
		phrase:"Mute City",
		audioSuccess:"assets/audio/captainFalconWin.mp3",
	},

	{
		phrase:"Ness",
		audioSuccess:"assets/audio/nessWin.mp3",
	},

	{
		phrase:"Onett",
		audioSuccess:"assets/audio/nessWin.mp3",
	},

	{
		phrase:"Yoshi",
		audioSuccess:"assets/audio/yoshiWin.mp3",
	},

	{
		phrase:"Yoshi's Island",
		audioSuccess:"assets/audio/yoshiWin.mp3",
	},

	{
		phrase:"Dream Land",
		audioSuccess:"assets/audio/kirbyWin.mp3",
	},

	{
		phrase:"Kirby",
		audioSuccess:"assets/audio/kirbyWin.mp3",
	},

	{
		phrase:"Fox",
		audioSuccess:"assets/audio/foxWin.mp3",
	},

	{
		phrase:"Sector Z",
		audioSuccess:"assets/audio/foxWin.mp3",
	},

	{
		phrase:"Jigglypuff",
		audioSuccess:"assets/audio/pokemonWin.mp3",
	},

	{
		phrase:"Pikachu",
		audioSuccess:"assets/audio/pokemonWin.mp3",
	},

	{
		phrase:"Saffron City",
		audioSuccess:"assets/audio/pokemonWin.mp3",
	},
]

const calculateGuesses = bankObj => {

	const minGuess = 6;
	let guesses = 16 - bankObj.phrase.length;

	if(guesses < minGuess) {
		guesses = minGuess;
	}

	bankObj.guesses = guesses;

	return

}

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

		for (var i = 0; i < comSubject.phrase.length; i++) {
	 		if (userLetter === comSubject.phrase[i] || userLetter.toUpperCase() === comSubject.phrase[i]) {
	 			displayPhraseArr[i] = comSubject.phrase[i];
	 			letterFound = true;
	  		}
	 	}

	 	// Deducts a guess if the letter is not in the phrase
	 	if (!letterFound) {
	 		guessesLeft--;
	 	}

	 	updateDisplay();

	 	// You are sucessful
	 	if (comSubject.phrase === displayPhraseArr.join("")) {
	 		winNum++;
	 		if (comSubject.audioSuccess) {
	 			audio.pause();
	 			audio = new Audio(comSubject.audioSuccess);
				audio.play();
				audio.loop = false;
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

		rand = Math.floor((Math.random()*bankWWE.length));
		var newComSubject = bankWWE[rand];
	}

	else if (thm === "SSB64") {
		var img = document.getElementById("logo");
		img.src = "assets/images/smash64Logo.png";

		var img2 = document.getElementById("logo2");
		img2.src = "assets/images/N64Logo.gif";

		rand = Math.floor((Math.random()*bankSSB64.length));
		var newComSubject = bankSSB64[rand];
	}

	// Checks for repeat phrases
	if( newComSubject !== comSubject ) {

		comSubject = newComSubject;
		comSubject.phrase = comSubject.phrase;
		userGuesses = [];

		if(!comSubject.guesses) {
			calculateGuesses(comSubject);
		}

		guessesLeft = comSubject.guesses;

		if (comSubject.audioHint){
			audio.pause();
			audio = new Audio(comSubject.audioHint);
			audio.play();
			audio.loop = true;
		}

		if (comSubject.hintTitle) {
			document.getElementById("hintTitle").textContent = comSubject.hintTitle;
		}

		else {
			document.getElementById("hintTitle").textContent = "";
		}

		// Creates starting display for user
		displayPhraseArr = [];
		for (var i = 0; i < comSubject.phrase.length; i++) {
			if( alphabet.indexOf(comSubject.phrase[i]) === -1 ) {
				displayPhraseArr.push(comSubject.phrase[i]);
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

// Switches theme
function themeSwitch (index) {
	var targetElm = document.body;
	targetElm.className = themes[index];

	audio.pause();
	winNum = 0;
	currentTheme = themes[index];
	startGame(currentTheme);
}