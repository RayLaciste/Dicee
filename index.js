var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);
console.log(randomNumber2);

var randomDice1 = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if (randomDice1 > randomDice2) {
  document.querySelector("h1").innerHTML = "Player One Wins!";
} else if (randomDice2 > randomDice1) {
  document.querySelector("h1").innerHTML = "Player Two Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
