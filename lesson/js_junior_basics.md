# Основы JavaScript для начинающего разработчика

## 1. Переменные и типы данных
- let, const, var
- string, number, boolean, null, undefined, object, symbol, bigint

## 2. Операторы
- Арифметические: +, -, *, /, %, **
- Сравнения: ==, ===, !=, !==, >, <, >=, <=
- Логические: &&, ||, !
- Присваивания: =, +=, -=, *=, /= и др.

## 3. Управляющие конструкции
```js
if (условие) {
  // код
} else if (другое_условие) {
  // код
} else {
  // код
}

switch (выражение) {
  case значение1:
    // код
    break;
  default:
    // код
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (условие) {
  // код
}

do {
  // код
} while (условие);
```

## 4. Функции
```js
function имя(параметры) {
  // код
  return значение;
}

const имя = function(параметры) {
  // код
};

const имя = (параметры) => {
  // код
};
```

## 5. Работа со строками
```js
let s = "Привет, мир!";
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.split(", "));
console.log(s.replace("мир", "JavaScript"));
console.log(s.length);
```

## 6. Массивы и их методы
```js
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.shift();
arr.unshift(0);
console.log(arr.slice(1, 3));
console.log(arr.indexOf(2));
arr.forEach(x => console.log(x));
let newArr = arr.map(x => x * 2);
```

## 7. Объекты
```js
let obj = { name: "Ivan", age: 20 };
console.log(obj.name);
obj.city = "Moscow";
for (let key in obj) {
  console.log(key, obj[key]);
}
```

## 8. Множества и карты
```js
let set = new Set([1, 2, 2, 3]);
let map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a"));
```

## 9. Ввод и вывод
- alert("Привет!");
- prompt("Введите имя:");
- console.log(...)

## 10. Исключения
```js
try {
  throw new Error("Ошибка!");
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Конец");
}
```

## 11. Работа с файлами
- В браузере напрямую нельзя, используйте File API или fetch для загрузки данных.

## 12. Генераторы массивов
```js
let squares = Array.from({length: 10}, (_, i) => i * i);
```

## 13. Импорт модулей
```js
// В ES6+
import { имя } from './module.js';
export function имя() {}
// В Node.js
const fs = require('fs');
```

## 14. Классы и ООП
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Привет, я ${this.name}`);
  }
}
let p = new Person("Иван");
p.sayHello();
```

## 15. Аннотирование типов (TypeScript)
```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## 16. Lambda, map, filter, reduce, forEach
```js
let arr = [1,2,3];
console.log(arr.map(x => x * 2));
console.log(arr.filter(x => x > 1));
console.log(arr.reduce((a, b) => a + b, 0));
arr.forEach((v, i) => console.log(i, v));
```

## 17. Работа с библиотеками (пример)
```js
// fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
```

## 18. Комментарии и документация
```js
// Однострочный комментарий
/* Многострочный
   комментарий */
/**
 * Документация для функции
 */
function foo() {}
```

## 19. Срезы (slice) для строк и массивов
```js
let s = "abcdefg";
console.log(s.slice(1, 4));    // 'bcd'
console.log(s.slice(0, 3));    // 'abc'
console.log(s.slice(3));       // 'defg'
console.log(s.split('').reverse().join('')); // 'gfedcba'

let arr = [10, 20, 30, 40, 50];
console.log(arr.slice(1, 4));   // [20, 30, 40]
console.log(arr.slice(-3));     // [30, 40, 50]
console.log([...arr].reverse()); // [50, 40, 30, 20, 10]
```

---

Это краткий справочник по основам JavaScript для джуниор-разработчика. Освоив эти темы, вы сможете уверенно писать и читать код на JS.
