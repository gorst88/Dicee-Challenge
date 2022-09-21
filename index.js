// Dice Rolls

var diceRoll1 = Math.floor(Math.random() * 6) + 1;
var diceRoll2 = Math.floor(Math.random() * 6) + 1;

// Player 1 Dicee

var diceImmage1 = "images/dice" + diceRoll1 + ".png";
var selectImmage1 = document.querySelectorAll("img")[0];
selectImmage1.setAttribute("src", diceImmage1);

//Player 2 Dicee

var diceImmage2 = "images/dice" + diceRoll2 + ".png";
var selectImmage2 = document.querySelectorAll("img")[1];
selectImmage2.setAttribute("src", diceImmage2);

// Announce Winner

if (diceRoll1 > diceRoll2) {
  document.querySelector("h1").innerHTML = "&#128681; Player One is the Winner";
} else if (diceRoll1 < diceRoll2) {
  document.querySelector("h1").innerHTML = "Player Two is the Winner &#128681;";
} else {
  document.querySelector("h1").innerHTML = "It's a DRAW";
}
