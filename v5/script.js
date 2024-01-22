// PART 4
let totalExpense = 0;

// get total element reference
const totalElement = document.querySelector("#totalExpense");
totalElement.textContent = `Total : ${totalExpense}`;
// get totalDesc element reference
const totalDescElement = document.querySelector("#desc");
// get amountUsed element reference
const amountUsedElement = document.querySelector("#number");
// get expense table
const tableExpenseElement = document.querySelector("#tableExpense")

// all expenses in one place
const allExpenses = [];

function counterIncrement(){
  const expenseItems = {};

  const amountUsed = Number(amountUsedElement.value);
  const amountDesc = totalDescElement.value;
  totalExpense = totalExpense + amountUsed;
  totalElement.textContent = `Total: ${totalExpense}`;
  
  expenseItems.desc = amountDesc;
  expenseItems.amount = amountUsed;

  allExpenses.push(expenseItems);
  const allExpensesHTML = allExpenses.map(expense => {
    return `<div> ${expense.desc} :: ${expense.amount} </div>`
  });
  const joinAllExpensesHTML = allExpensesHTML.join("");
  console.log(joinAllExpensesHTML);

  tableExpenseElement.innerHTML = joinAllExpensesHTML;
  
}  

// get the button refferal
const plusButton = document.querySelector("#addButton");

// listen to Click Events
plusButton.addEventListener("click", counterIncrement, false);
