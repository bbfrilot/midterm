// Defines what category we're choosing and updates the webpage with this. Customize these with your own category and items!
let what = "fish";
document.querySelector("#what").innerText = what;

// Defines our options to choose from
let options = [
  "Clown",
  "Blonde naso tang",
  "Mandarin gobi",
  "Coral beauty",
  "Purple queen anthias",
  "Flame hawk",
  "Masked butterfly"
];
const optionsList = document.querySelector("#options");
//options.onsubmit=function(event);
///event.preventDefault();
///
// ********************************
// 1. Alphabetize the options list (2 points)
// ********************************
// Your code here:

options.sort();

// ********************************
// 2. Make the options list use title case (4 points)
// ********************************
// The first letter of each word should be capitalized. Make it skip words like "and", "a", "the", "to", etc.
// Your code here:

const optionCap = (document.getElementById("options").style.textTransform =
  "capitalize");

// Don't code #2 past this point.
// This forEach loop renders our options in the webpage:
options.forEach((option, index) => {
  const listItem = document.createElement("li");
  listItem.innerText = option;
  listItem.id = `item-${index}`;
  optionsList.append(listItem);
});

// Declares a variable equal to our button
const button = document.querySelector("button");

// ********************************
// 3. Write a function that accepts a max numbers as a parameter and returns a random number between 0 and that number. (2 points)
// ********************************
// Your code here:

function rndNum(max) {
  return Math.floor(Math.random() * max);
}
console.log(rndNum(options.length));
console.log(rndNum(options.length));
console.log(rndNum(options.length));

// ********************************
// 4. Make it so that when someone clicks the "choose" button, a random item in the list gets highlighted with a different background color. (4 points)
// ********************************
// Your code here:
//
//let colors = document.queryselector("#options");
function colorChange(e) {
  let itemIdx = rndNum(options.length);
  const item = document.querySelector("#item-" + itemIdx);
  item.style.backgroundColor = "yellow";
  item.style.border = "thick double #008080";
}

button.onclick = colorChange;

// ********************************
// 5. (Optional Bonus) Oops! Refactor your code to not update the background color directly but to instead add/remove the class "choice" so that each time the button is clicked, the previously chosen item returns to normal, and a new item is selected (2 bonus points).
// ********************************
// Your code here:
