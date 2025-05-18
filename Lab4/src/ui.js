import * as transactions from './transactions.js'
import {getWords} from './utils.js'

/**
 * Создать строку таблицы, для представления транзакции. 
 * @param {Transaction} transaction - транзакция по которой создаётся строка
 * @returns {HTMLElement}
 */
function constructRow(transaction) {
    let row = document.createElement("tr");
    let amount = document.createElement("td");
    let date = document.createElement("td");
    let category = document.createElement("td");
    let description = document.createElement("td");
    let button = document.createElement("button");
    
    amount.innerHTML = transaction.amount;
    date.innerHTML = transaction.date;
    category.innerHTML = transaction.category;
    description.innerHTML = getWords(transaction.description);

    row.appendChild(date);
    row.appendChild(amount);
    row.appendChild(category);
    row.appendChild(description);
    row.appendChild(button);

    row.id = "trans-"+transaction.id;
    button.id = "btn-"+transaction.id;
    button.innerHTML="Удалить!";
    
    if(transaction.amount >= 0) {
	row.classList.add("positive");
    }
    else {
	row.classList.add("negative");
    }
    return row;
}

/**
 * Показать сумму всех транзакций.
 */
function displayTotal() {
    document.querySelector("#total").innerHTML = transactions.calculateTotal();
}

/**
 * Добавить транзакцию на страницу и в массив.
 * @param {number} amount - сумма транзакции
 * @param {string} date - дата и время проведения
 * @param {string} category - категория транзакции
 * @param {string} description - описание транзакции
 */
function addTransaction(amount, date, category, description) {
    const table = document.querySelector("#transactions-table");
    const transaction = new transactions.Transaction(date, amount, category, description);

    table.appendChild(constructRow(transaction));
    transactions.addTransactionToList(transaction);
    displayTotal();
}

/**
 * Обработчик события формы. Добавляет транзакции исходя из пользовательского ввода.
 * @param {Event} event - событие submit в форме.
 */
export function submitForm(event) {
    event.preventDefault();
    const form = new FormData(document.querySelector("#transaction-add"));
    const formData = Object.fromEntries(form);

    addTransaction(formData.amount, formData.date, formData.category, formData.description);
}

/**
 * Обработчик клика по таблице. отвечает как за удаление по кнопке, так и за вывод полного описания.
 * @param {Event} event - событие вида click.
 */
export function tableClick(event) {
    if(event.target.tagName === "BUTTON") {
	let id = event.target.id.substring(4);
	transactions.removeTransactionFromList(id);
	document.querySelector("#trans-"+id).remove();
	displayTotal();
    }
    else {
	let id = event.target.parentNode.id.substring(6);
	let trans = transactions.getTransByID(id);

	document.querySelector("#desc").innerHTML = trans.description;
    }
}
