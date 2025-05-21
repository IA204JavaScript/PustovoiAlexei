import { makeIDGenerator, hasDatePassed, levenshteinDistance } from './utils.js'
import { Modal } from './modals.js'

let idGenerator = makeIDGenerator(0);

let tasks = [];
const tasksTable = document.querySelector("#tasks tbody");

/**
 * Класс для представления задачи
 * @param {boolean} state - Статус выполнения (true/false)
 * @param {string} desc - Описание задачи
 * @param {string} deadline - Срок выполнения в формате строки
 * @param {number} [id] - Необязательный идентификатор задачи
 */  
export class Task {
    constructor(state, desc, deadline, id) {
	this.state = state;
	this.desc = desc;
	this.deadline = deadline;
	if(!id){
	    this.id = idGenerator();
	}
	else {
	    this.id = id;
	}
	tasks.push(this);
	tasksTable.appendChild(this.toElement());
    }

    /**
     * Создает HTML-элемент строки таблицы для задачи
     * @returns {HTMLElement} Строка таблицы с данными задачи
     */  
    toElement(){
	let row = document.createElement("tr");
	let state = document.createElement("td");
	let desc = document.createElement("td");
	let deadline = document.createElement("td");
	let actions = document.createElement("td");
	let editButton = document.createElement("button");
	let deleteButton = document.createElement("button");
 
	editButton.innerHTML = "Редактировать";
	editButton.classList.add("edit-btn");
	
	deleteButton.innerHTML = "Удалить";
	deleteButton.classList.add("delete-btn");
	
	actions.appendChild(editButton);
	actions.appendChild(deleteButton);
	
	state.innerHTML = this.state ? "Выполнено" : "Невыполнено";
	desc.innerHTML = this.desc;
	deadline.innerHTML = this.deadline;
	
	row.appendChild(state);
	row.appendChild(desc);
	row.appendChild(deadline);
	row.appendChild(actions);

	row.id = "task-"+this.id;

	if (hasDatePassed(this.deadline)) {
	    row.classList.add("expired")
	}
	
	this.element = row;
	return row;
    }

    /**
     * Удаляет задачу из списка и таблицы
     */  
    remove() {
	tasks = tasks.filter(task => task !== this);
	this.element.remove();
    }

    /**
     * Обновляет данные задачи и пересоздает элемент в таблице
     * @param {boolean} state - Новый статус выполнения
     * @param {string} desc - Новое описание
     * @param {string} deadline - Новый срок
     */  
    edit(state, desc, deadline) {
	this.state = state;
	this.desc = desc;
	this.deadline = deadline;
	this.element.replaceWith(this.toElement());
    }
}

/**
 * Находит задачу по идентификатору
 * @param {number} id - Идентификатор для поиска
 * @returns {Task} Найденная задача или undefined
 */  
export function findTaskByID(id) {
    return tasks.find(task => task.id == id);
}

/**
 * Получить массив задач
 * @returns {Array} массив всех задач
 */
export function getTasks(id) {
    return tasks;
}

/**
 * Заменяет текущие задачи новым списком
 * @param {Array} newTasks - Массив новых задач
 */  
export function setTasks(newTasks) {
    while(tasksTable.firstChild) {
	tasksTable.removeChild(tasksTable.firstChild);
    }
    tasks = [];
    idGenerator = makeIDGenerator(newTasks.reduce((prev,cur) => {
	return (prev && prev.id > cur.id) ? prev : cur;
    }).id);
    newTasks.forEach((task) => {
	new Task(task.state, task.desc, task.deadline, task.id);
    });
}

/**
 * Сортирует задачи по схожести описания с запросом
 * @param {string} query - Строка для поиска
 */  
export function searchByDesc(query) {
    let sorted = [];

    if(query !== "") {
	sorted = tasks.sort((a,b) => {
	    return levenshteinDistance(query.toLowerCase(), a.desc.toLowerCase()) -
		levenshteinDistance(query.toLowerCase(), b.desc.toLowerCase());
	});
    }
    else {
	sorted = tasks.sort((a,b) => {
	    return a.id-b.id;
	});
    }
    setTasks(sorted);
}
