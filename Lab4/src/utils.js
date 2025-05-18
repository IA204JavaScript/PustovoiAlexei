import * as transactions from './transactions.js';

/**
 * Функция с замыканием для генерации айди ибо почему бы и нет.
 * @returns {Function}
 */
export function makeIDGenerator() {
    let id = 0;
    function generator() {
	id += 1;
	return id;
    }
    return generator;
}

/**
 * Получить первые четыре слова из строки.
 * @param {string} str - исходная строка.
 * @returns {string}
 */
export function getWords(str) {
    return str.split(/\s+/).slice(0,4).join(" ");
}
