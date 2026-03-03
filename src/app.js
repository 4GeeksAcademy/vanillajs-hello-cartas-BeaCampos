let suits = ["♥", "♦", "♠", "♣"];
let suitClasses = ["heart", "diamond", "spade", "club"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generateCard() {

  let randomSuitIndex = Math.floor(Math.random() * suits.length);
  let randomValueIndex = Math.floor(Math.random() * values.length);

  let suit = suits[randomSuitIndex];
  let suitClass = suitClasses[randomSuitIndex];
  let randomValue = values[randomValueIndex];

  let card = document.getElementById("card");
  let topSuit = document.querySelector(".top-suit");
  let bottomSuit = document.querySelector(".bottom-suit");
  let value = document.querySelector(".value");

  card.className = "card";
  card.classList.add(suitClass);

  topSuit.innerHTML = suit;
  bottomSuit.innerHTML = suit;
  value.innerHTML = randomValue;
}

window.onload = generateCard;



