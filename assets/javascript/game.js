// Declaring Variables
var alphabet = "qwertyuiopasdfghjklzxcvbnm";
var userGuess = "";
var guessesLeft = maxGuess;
var maxGuess = 12;
var guessesLeft = maxGuess;
var wordBank = ["test","testing"];

// Generates random
var rand = Math.floor((Math.random()*wordBank.length));
var comWord = wordBank[rand];
console.log(comWord);