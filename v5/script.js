// PART 5
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

  let amountUsed = Number(amountUsedElement.value);
  let amountDesc = totalDescElement.value;
  totalExpense = totalExpense + amountUsed;
  totalElement.textContent = `Total: ${totalExpense}`;
  
  expenseItems.desc = amountDesc;
  expenseItems.amount = amountUsed;
  expenseItems.moment = new Date();

  allExpenses.push(expenseItems);
  renderList(allExpenses);
  document.getElementById("number").value = "";
  document.getElementById("desc").value = "";
}  

// get the button refferal
const plusButton = document.querySelector("#button-addon2");

// listen to Click Events
plusButton.addEventListener("click", counterIncrement, false);

function createListItemsHTML({ desc, amount, moment }){
  return `
    <li class="list-group-item d-flex justify-content-between">
      <div class="d-flex flex-column">
        ${desc}
        <small class="text-muted">${getDateString(moment)}</small>
      </div>
      <div>
        <span class="px-5">
        ${amount}
        </span>
        <button type="button" class="btn btn-outline-danger btn-sm" onclick=deleteItem(${moment.valueOf()})>
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  `;
}

function getDateString(moment){
  return moment.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
}

function deleteItem(dateValue){
  console.log("delete item is called", dateValue);

  for (let i=0; i<allExpenses.length; i++){
    if(allExpenses[i].moment.valueOf() === dateValue){
      totalExpense = totalExpense - allExpenses[i].amount;
      allExpenses.splice(i, 1);
      totalElement.textContent = `Total : ${totalExpense}`;
    }
  }
  renderList(allExpenses);
}

function renderList(arrayOfList){
  const allExpensesHTML = arrayOfList.map(expense => createListItemsHTML(expense));
  const joinAllExpensesHTML = allExpensesHTML.join("");
  tableExpenseElement.innerHTML = joinAllExpensesHTML;
}