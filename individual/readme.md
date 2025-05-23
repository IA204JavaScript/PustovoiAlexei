# Менеджер задач

## Установка и запуск

### Предварительные требования
- Современный браузер
- Любой веб сервер.

### Шаги для запуска
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/IA204JavaScript/PustovoiAlexei.git
   cd individual
   ```
2. Запустите веб-сервер:
   ```bash
   ./start.sh
   ```
3. Откройте приложение в браузере по адресу `http://localhost:8000`

## Автор
**Алексей Пустовой** - студент группы IA2404

## Описание проекта

### Цель
Создание интуитивного веб-приложения для управления задачами с расширенными возможностями поиска и экспорта данных.

### Основные функции
1. **Управление задачами**
   - Добавление новых задач с описанием и сроком выполнения
   - Редактирование существующих записей
   - Отметка о выполнении
   - Удаление задач

2. **Работа с данными**
   - Экспорт всех задач в JSON-файл
   - Импорт задач из JSON-файла
   - Автоматическая генерация уникальных ID

3. **Поиск и фильтрация**
   - Поиск по описанию с учетом опечаток (алгоритм Левенштейна)
   - Визуальное выделение просроченных задач
   - Сортировка по ID

4. **Интерфейс**
   - Drag-and-drop загрузка файлов
   - Модальные окна для форм ввода
   - Адаптивный дизайн

## Примеры использования

### Добавление задачи
1. Нажмите кнопку "Добавить задачу"
2. Заполните форму:
   ```javascript
   // Пример программного добавления
   new Task(false, "Подготовить отчет", "2024-03-25");
   ```
3. Нажмите "Сохранить"

![Форма добавления задачи](images/1.jpg)

### Поиск задач
```javascript
// Поиск по точному совпадению
searchByDesc("отчет");

// Поиск с учетом опечаток (расстояние Левенштейна)
searchByDesc("отчот");
```

### Экспорт данных
```javascript
// Экспорт текущего списка задач
exportAsJSON(getTasks());
```

## Архитектура проекта

### Технологии
- **Ядро**: Vanilla JavaScript (ES6+)
- **Хранение данных**: In-memory массив объектов, экспорт/импорт JSON файла.
- **Поиск**: Алгоритм Левенштейна
- **Интерфейс**: HTML/CSS

### Структура файлов
```
.
└── src
    ├── assets
    │   └── images
    ├── index.html
    ├── index.js
    ├── scripts
    │   ├── modals.js
    │   ├── tasks.js
    │   ├── ui.js
    │   └── utils.js
    └── styles
        ├── main.css
        └── reset.css
```

## Особенности реализации

### Генератор ID
Реализация через замыкания для сохранения состояния:
```javascript
const generator = makeIDGenerator(100);
console.log(generator()); // 101
console.log(generator()); // 102
```

### Валидация дат
Автоматическая проверка просроченных задач:
```javascript
hasDatePassed("2023-12-31"); // Возвращает true
```

### Алгоритм поиска
Использование алгоритма Левенштейна:
```javascript
levenshteinDistance("кот", "ток"); // Результат: 2
```

## Справочные материалы
1. [Документация JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript)
2. [Алгоритм Левенштейна](https://ru.wikipedia.org/wiki/Расстояние_Левенштейна)
3. [File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API)
