# Documentation

## `function getUniqueTransactionTypes(transactions)`

Получить все уникальные типы транзакций.

 * **Parameters:** `transactions` — `array` — - массив транзакций.
 * **Returns:** `array` — Массив строк с уникальными типами транзакций.

## `function calculateTotalAmount(transactions)`

Подсчитать общую сумму транзакций

 * **Parameters:** `transactions` — `array` — - массив транзакций.
 * **Returns:** `number` — общая сумма транзакций

## `function calculateTotalAmountByDate(transactions, year = null, month = null, day = null)`

Подсчитать общую сумму транзакций по дате. При отсутствии одного из параметров даты, подсчёт происходит по оставшимся.

 * **Parameters:**
   * `transactions` — `array` — - массив транзакций.
   * `[year=null]` — `number` — - год транзакции.
   * `[month=null]` — `number` — - месяц транзакции.
   * `[day=null]` — `number` — - день транзакции.
 * **Returns:** `number` — общая сумма транзакций по данной дате.

## `function getTransactionByType(transactions, type)`

Получить транзакции по типу.

 * **Parameters:**
   * `transactions` — `array` — - массив транзакций.
   * `type` — `string` — - тип транзакции, может быть "debit" или "credit".
 * **Returns:** `array` — все транзакции данного типа.

## `function getTransactionsInDateRange(transactions, startDate, endDate)`

Получить все транзакции за указанный промежуток.

 * **Parameters:**
   * `transactions` — `array` — - массив транзакций.
   * `startDate` — `string` — - начальная дата в формате "yyyy-mm-dd".
   * `endDate` — `string` — - конечная дата в формате "yyyy-mm-dd".
 * **Returns:** `array` — все транзакции за указанный период.

## `function getTransactionsByMerchant(transactions, merchantName)`

Получить все транзакции с участием данного коммерсанта.

 * **Parameters:**
   * `transactions` — `array` — - массив транзакций.
   * `merchantName` — `string` — - название коммерсанта.
 * **Returns:** `array` — все транзакции с данным коммерсантом.

## `function calculateAverageTransactionAmount(transactions)`

Подсчитать объем средней транзакции.

 * **Parameters:** `transactions` — `array` — - массив транзакций.
 * **Returns:** `number` — средний объем транзакции.

## `function getTransactionsByAmountRange(transactions, minAmount, maxAmount)`

Получить транзакции с суммой в заданном диапазоне.

 * **Parameters:**
   * `transactions` — `array` — - массив транзакций.
   * `minAmount` — `number` — - минимальная сумма транзакции.
   * `maxAmount` — `number` — - максимальная сумма транзакции.
 * **Returns:** `array` — все транзакции в заданном диапазоне суммы.

## `function calculateTotalDebitAmount(transactions)`

Подсчитать общую сумму дебитовых транзакций

 * **Parameters:** `transactions` — `array` — - массив транзакций.
 * **Returns:** `number` — общая сумма дебитовых транзакций.

## `function getTransactionsByMonth(transactions, month)`

Получить все транзакции совершенные в определенный месяц.

 * **Parameters:**
   * `transactions` — `array` — - массив транзакций.
   * `month` — `number` — - месяц 1-12.
 * **Returns:** `array` — все совершенные в данном месяце транзакции.

## `function findMostTransactionsMonth(transactions)`

Найти месяц с наибольшим количеством транзакций

 * **Parameters:** `transactions` — `array` — - массив транзакций.
 * **Returns:** `number` — месяц в котором совершено наибольшее число транзакций.

## `function findMostDebitTransactionMonth(transactions)`

Найти месяц с наибольшим количеством дебитовых транзакций

 * **Parameters:** `transactions` — `array` — - массив транзакций.
 * **Returns:** `number` — месяц в котором совершено наибольшее число дебитовых транзакций.

## `function mostTransactionTypes(transactions)`

Найти превалирующий тип транзакций.

 * **Parameters:** `transactions` — `array` — - массив транзакций.
 * **Returns:** `string` — - превалирующий тип транзакций. Может быть "debit", "credit" или "equal".

## `function getTransactionsBeforeDate(transactions, date)`

Получить все транзакции до заданной даты.

 * **Parameters:**
   * `transactions` — `array` — - массив транзакций.
   * `date` — `string` — - дата в формате "yyyy-mm-dd".
 * **Returns:** `array` — все транзакции до данной даты.

## `function findTransactionById(transactions, id)`

Найти транзакцию по её ID.

 * **Parameters:**
   * `transactions` — `array` — - массив транзакций.
   * `id` — `number` — - ID транзакции.
 * **Returns:** `object` — транзакция с данным ID.

## `function mapTransactionDescriptions(transactions)`

Вывести все описания транзакций

 * **Parameters:** `transactions` — `array` — - массив транзакций.
 * **Returns:** `array` — все описания транзакций.
