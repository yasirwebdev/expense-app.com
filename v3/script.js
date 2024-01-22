// PART 3
let counter = 0;
let totalExpense = 0;

// get total element reference
const totalElement = document.querySelector("#totalExpense");
// get totalDesc element reference
const totalDescElement = document.querySelector("#desc");
// get amountUsed element reference
const amountUsedElement = document.querySelector("#number");

function counterIncrement(){
  const amountUsed = Number(amountUsedElement.value);
  const amountDesc = totalDescElement.value;
  console.log({amountUsed, amountDesc});

  totalExpense = totalExpense + amountUsed;
  console.log({totalExpense});
  totalElement.textContent = totalExpense;
  }
  totalElement.textContent = totalExpense;

// get the button refferal
const plusButton = document.querySelector("#addButton");

// listen to Click Events
plusButton.addEventListener("click", counterIncrement, false);