// PART 1
let counter = 0;

// Write a function to increment a number 
function counterIncrement(){
counter = counter + 1;
console.log(counter);
}

// get the button refferal
const plusButton = document.querySelector("#addButton");

// listen to Click Events
plusButton.addEventListener("click", counterIncrement, false);
