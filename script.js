const gameContainer = document.getElementById("game");
let card1;
let card2;
let cardCounter = 0;
const button = document.createElement("button");
button.innerHTML = "Start";
let body = document.querySelector("body");
body.append(button)
button.addEventListener("click", function(){
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (cardCounter < 2)
    {
    if(event.target.style.backgroundColor != event.target.classList[0]){ 
      event.target.style.backgroundColor = event.target.classList[0]
      cardCounter += 1
      if (cardCounter == 1)
        {
        card1 = event.target
        }
      if (cardCounter == 2)
        {
        card2 = event.target
        }
      }
    }
    console.log(card1)
    console.log(card2)
  if (card1 && card2)
    {
      if (card1.style.backgroundColor != card2.style.backgroundColor)
      setTimeout(function(){
        {
          card1.style.backgroundColor = "white";
          card2.style.backgroundColor = "white";
          card1 = null;
          card2 = null;
          cardCounter = 0
        }
      },1000)
      else{
        card1 = null;
        card2 = null;
        cardCounter = 0
      }
    }
  
}

// when the DOM loads
createDivsForColors(shuffledColors);
})