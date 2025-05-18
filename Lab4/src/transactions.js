import {makeIDGenerator} from './utils.js'

// ну это собсна функция-генератор.
/**
 * Создаёт ID
 * @returns {number}
 */
let generateID = makeIDGenerator();

/**
 * Массив всех транзакций.
 */
export let transactions = [];

/**
 * Добавить транзакцию в массив.
 * @param {Transaction} transaction - транзакция для добавления.
 */
export function addTransactionToList(transaction) {
    transactions.push(transaction);
}

/**
 * Удалить транзакцию из массива по ID.
 * @param {number} id - ID транзакции для удаления.
 */
export function removeTransactionFromList(id) {
    transactions = transactions.filter((element) => {
	return element.id != id;
    });
}

/**
 * Посчитать сумму всех транзакций.
 * @returns {number} 
 */
export function calculateTotal(){
    return transactions.reduce((acc,cur) => acc+Number(cur.amount),0);
}

/**
 * Получить транзацкию из массива по id.
 * @returns {Transaction}
 */
export function getTransByID(id) {
    return transactions.find((el) => el.id == id);
}

/**
 * Класс, представляющий транзакцию.
 * @class
 */
export class Transaction {

    /**
     * Создаёт транзакцию.
     * @param {string} date - дата и время проведения транзакции
     * @param {number} amount - сумма транзакции
     * @param {string} category - категория транзакции
     * @param {string} description - описание транзакции
     */ 
    constructor(date, amount, category, description) {
	this.date = date;
	this.amount = amount;
	this.category = category;
	this.description = description;
	this.id = generateID();
    }
}
