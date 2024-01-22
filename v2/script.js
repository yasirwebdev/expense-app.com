// PART 2
let totalExpense = 0;
function counterIncrement(){
  const amountUsed = document.querySelector("#number").value;
  console.log({amountUsed});
  totalExpense = totalExpense + Number(amountUsed);
  console.log({totalExpense});
  document.querySelector("#totalExpense").textContent = `Total Expense: ${totalExpense}`;
  }
document.querySelector("#totalExpense").textContent = `Total Expense: ${totalExpense}`;


// get the button refferal
const plusButton = document.querySelector("#addButton");

// listen to Click Events
plusButton.addEventListener("click", counterIncrement, false);
