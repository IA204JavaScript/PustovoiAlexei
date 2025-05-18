import {submitForm, tableClick} from './ui.js'

// Ну типа добавляем лисенеры шмисенеры
document.querySelector("#transaction-add").addEventListener("submit", submitForm);
// А тут новомодное делегирование событий
document.querySelector("#transactions-table").addEventListener("click", tableClick);
