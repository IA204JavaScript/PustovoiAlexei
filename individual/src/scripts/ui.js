import { Modal } from './modals.js'
import { Task, findTaskByID, getTasks, searchByDesc } from './tasks.js'
import { exportAsJSON, handleFile } from './utils.js'


const appendModal = new Modal(document.querySelector("#add"), document.querySelector("#add-task"));
const editModal = new Modal(document.querySelector("#edit"));

let editingID = 0;

/**
 * Обработчик добавления новой задачи через форму
 * @param {Event} e - Событие отправки формы
 */  
function addTask(e) {
    e.preventDefault();
    const form = new FormData(document.querySelector("#add form"));
    const formData = Object.fromEntries(form);
    
    new Task(false, formData.description, formData.deadline);
    appendModal.close();
}

/**
 * Обработчик редактирования существующей задачи
 * @param {Event} e - Событие отправки формы
 */  
function editTask(e) {
    e.preventDefault();
    const task = findTaskByID(editingID);
    if(!task) {
	console.log("aaa");
	return;
    }
    
    const formDataTemp = new FormData(document.querySelector("#edit form"));
    const formData = Object.fromEntries(formDataTemp);
    
    task.edit(formData?.complete, formData.description, formData.deadline);
    editModal.close();
}

/**
 * Обработчик кликов по кнопкам в таблице (редактирование/удаление)
 * @param {Event} e - Событие клика
 */  
function tableListen(e) {
    if (e.target.nodeName === "BUTTON") {
	const target = e.target;
	const id = target.parentElement.parentElement.id.substring(5);
	const task = findTaskByID(id);
	if(target.classList.contains("edit-btn")) {
	    editingID = id;
	    let form = document.querySelector("#edit form");
	    form.elements["description"].value = task.desc;
	    form.elements["deadline"].value = task.deadline;
	    editModal.open();
	}
	if(target.classList.contains("delete-btn")) {
	    task.remove();
	}
	
    }
}

/**
 * Экспортирует задачи в JSON файл
 * @param {Event} e - Событие клика
 */  
function exportJSON(e) {
    exportAsJSON(getTasks());
}

/**
 * Инициализирует все обработчики событий интерфейса
 */
export function initUI() {
    document.querySelector("#add form").addEventListener("submit", addTask);
    document.querySelector("#edit form").addEventListener("submit", editTask);
    document.querySelector("#tasks tbody").addEventListener("click", tableListen);
    document.querySelector("#export").addEventListener("click", exportJSON);

    const uploadArea = document.querySelector("#dragdrop");
    const fileInput = document.querySelector("#file-input");

    uploadArea.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", () => {
	if (fileInput.files.length > 0) {
	    handleFile(fileInput.files[0]);
	}
    });

    uploadArea.addEventListener("dragover", (e) => {
	e.preventDefault();
	uploadArea.classList.add("hover");
    });

    uploadArea.addEventListener("dragleave", () => {
	uploadArea.classList.remove("hover");
    });

    uploadArea.addEventListener("drop", (e) => {
	e.preventDefault();
	uploadArea.classList.remove("hover");
	if (e.dataTransfer.files.length > 0) {
	    handleFile(e.dataTransfer.files[0]);
	}
    });

    document.getElementById("search").addEventListener("input", (e) => {
	const query = e.target.value;
	searchByDesc(query);
    });
}
