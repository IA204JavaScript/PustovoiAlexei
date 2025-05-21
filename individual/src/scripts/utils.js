import { setTasks } from './tasks.js'

/**
 * Функция с замыканием для генерации айди ибо почему бы и нет.
 * @returns {Function}
 */
export function makeIDGenerator(begin) {
    let id = begin;
    function generator() {
	id += 1;
	return id;
    }
    return generator;
}

/**
 * Преобразует объект в JSON и скачивает как файл
 * @param {Object} obj - Данные для экспорта
 */  
export function exportAsJSON(obj) {
    const jsonString = JSON.stringify(obj, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = URL.createObjectURL(blob);
    link.download = "export.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Обрабатывает строку жсон и ставит блин эти таскс...
 * @param {string} jsonString - жсон стрка
 */  
function importFromJSON(jsonString) {
    const data = JSON.parse(jsonString);
    setTasks(data);
}

/**
 * Обрабатывает загруженный JSON файл с задачами
 * @param {File} file - Файл для обработки
 */  
export function handleFile(file) {
    if (file.type !== "application/json") {
	alert("Please upload a valid JSON file.");
	return;
    }
     
    const reader = new FileReader();
    reader.onload = () => {
	const jsonString = reader.result;
	importFromJSON(jsonString);
    };
    reader.readAsText(file);
}

/**
 * Проверяет, прошла ли указанная дата
 * @param {string} dateString - Дата в формате YYYY-MM-DD
 * @returns {boolean} true если дата в прошлом
 */  
export function hasDatePassed(dateString) {
  const inputDate = new Date(dateString + "T00:00:00");
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return inputDate < today;
}

/**
 * Вычисляет расстояние Левенштейна между двумя строками
 * @param {string} s - Первая строка
 * @param {string} t - Вторая строка
 * @returns {number} Число необходимых изменений
 */ 
export function levenshteinDistance(s, t) {
    if (!s.length) return t.length;
    if (!t.length) return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
	arr[i] = [i];
	for (let j = 1; j <= s.length; j++) {
	    arr[i][j] =
		i === 0
		? j
		: Math.min(
		    arr[i - 1][j] + 1,
		    arr[i][j - 1] + 1,
		    arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
		);
	}
    }
    return arr[t.length][s.length];
};
