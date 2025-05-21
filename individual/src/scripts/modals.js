const modalOverlay = document.querySelector("#modal-overlay");

let modals = [];

/**
 * Класс для управления модальными окнами
 * @param {HTMLElement} modalElement - Элемент модального окна
 * @param {HTMLElement} button - Кнопка для открытия модального окна
 */  
export class Modal {

    constructor(modalElement, button) {
	this.modalElement = modalElement;
	this.button = button;
	if(button) {
	    this.button.addEventListener("click", (e) => {
		this.open();
	    });
	}
	modals.push(this);
    }

    /**
     * Открывает модальное окно и затемняет фон
     */  
    open(){
	this.modalElement.style.display = "grid";
	modalOverlay.style.display = "block";
    }

    /**
     * Закрывает модальное окно и убирает затемнение фона
     */  
    close() {
	this.modalElement.style.display = "none";
	modalOverlay.style.display = "none";
    }
}

/**
 * Инициализирует обработчик закрытия всех модалок при клике на фон
 */  
export function initModals() {
    modalOverlay.addEventListener("click", (e) => {
	modals.forEach( modal => modal.close());
    });
}
