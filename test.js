function main() {
    console.log("ивет, мир!");
}

main();alert('Hello, World!'); // Выводит всплывающее окно с сообщением "Hello, World!"

console.log('Hello, World!'); // Выводит сообщение "Hello, World!" в консоль
console.info('Hello, World!'); // Выводит информационное сообщение "Hello, World!" в консоль
console.error('Hello, World!'); // Выводит сообщение об ошибке "Hello, World!" в консоль
console.warn('Hello, World!'); // Выводит предупреждающее сообщение "Hello, World!" в консоль

document.write('Hello, World!'); // Записывает сообщение "Hello, World!" в документ

var num = 5; // Объявление переменной num и присвоение ей значения 5
console.log("переменная: ", num); // Выводит значение переменной num в консоль

const cont = 5; // Объявление константы cont и присвоение ей значения 5
let sdf = 5; // Объявление переменной sdf и присвоение ей значения 5
console.log("константа: ", cont); // Выводит значение константы cont в консоль

var numb = Number("5"); // Преобразование строки "5" в число и присвоение его переменной numb
console.log(Math.PI); // Выводит значение числа Пи в консоль
console.log(Math.min(1, 2, 3, 4, 5)); // Выводит минимальное значение из списка чисел в консоль
console.log(Math.max(1, 2, 3, 4, 5)); // Выводит максимальное значение из списка чисел в консоль

if (num == sdf && num == cont || num == numb) {
    // Если num равно sdf и cont, или num равно numb, выполняется этот блок
    console.log("Это правда");
} else if (num || !numb) {
    // Иначе, если num истинно или numb ложно, выполняется этот блок
    console.log("Это правда");
}

var arrr = new Array(1, 2, 3, 4, 5); // Создание массива arrr с элементами 1, 2, 3, 4, 5
var arr = [1, true, "asd", 2.3323, num]; // Создание массива arr с различными типами данных
console.log(arr[2]); // Вывод третьего элемента массива arr в консоль

arr[1] = 5; // Изменение второго элемента массива arr на 5
console.log(arr.length); // Вывод длины массива arr в консоль

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // Создание матрицы (двумерного массива)
console.log(matrix[1][1]); // Вывод элемента матрицы из второй строки и второго столбца в консоль

for (var i = 0; i < 5; i++) {
    // Цикл for, который выполняется 5 раз, выводя значение i в консоль
    console.log(i);
}

while (num < 10) {
    // Цикл while, который выполняется, пока num меньше 10
    console.log(num);
    num++;
}

do {
    // Цикл do...while, который выполняется хотя бы один раз, пока num меньше 10
    console.log(num);
    num++;
} while (num < 10);

for (let i = 0; i < 5; i++) {
    // Цикл for, который выполняется 5 раз
    if (i == 2) {
        break; // Прерывает выполнение цикла, если i равно 2
    }

    if (i == 2) {
        continue; // Переходит к следующей итерации цикла, если i равно 2
    }

    console.log(i); // Выводит значение i в консоль
}

var arr = [1, 2, 3, 4, 5]; // Создание массива arr с элементами 1, 2, 3, 4, 5
for (let i = 0; i < arr.length; i++) {
    // Цикл for, который проходит по всем элементам массива arr
    console.log(arr[i]); // Выводит каждый элемент массива arr в консоль
}

for (let i of arr) {
    // Цикл for...of, который проходит по всем элементам массива arr
    console.log(i); // Выводит каждый элемент массива arr в консоль
}

alert("Hello, World!"); // Выводит всплывающее окно с сообщением "Hello, World!"

var data = confirm("Hello, World!"); // Выводит окно с кнопками ОК и Отмена, возвращает true, если нажата ОК, и false, если Отмена
console.log(data); // Выводит значение переменной data в консоль
if (data) {
    // Если нажата кнопка ОК
    console.log("Пользователь нажал ОК");
} else {
    // Если нажата кнопка Отмена
    console.log("Пользователь нажал Отмена");
}
prompt("Hello, World!", "Введите что-нибудь"); // Выводит окно с полем ввода и сообщением "Hello, World!"

function add(a, b) {
    // Функция принимает два аргумента и возвращает их сумму
    return a + b;
}

function summf(arr) {
    // Функция принимает массив и возвращает сумму его элементов
    let summ = 0;
    for (let i of arr) {
        summ += i;
    }
    return summ;
}

var n = 0; // Объявление переменной n и присвоение ей значения 0
function hz(wl) {
    // Функция для обработки клика по кнопке
    n++;
    console.log();
    wl.innerHTML = "вы нажали на кнопку:   " + n; // Изменение содержимого элемента
    wl.style.backgroundColor = "red"; // Изменение цвета фона элемента
}

function onMause(wl) {
    // Функция для обработки ввода в текстовое поле
    console.log(wl.value); // Вывод значения текстового поля в консоль
    console.log("onMause"); // Вывод сообщения в консоль
}

// Пример изменения стиля элемента
var text = document.getElementById('text'); // Получение элемента с id 'text'
text.title = "new text"; // Изменение атрибута title элемента
console.log(text.title); // Вывод значения атрибута title в консоль
text.style.color = "red"; // Изменение цвета текста элемента
text.style.backgroundColor = "black"; // Изменение цвета фона элемента
text.innerHTML = "new <br> string"; // Изменение содержимого элемента

// Пример функции для обработки клика по кнопке
function hz(wl) {
    n++; // Увеличение значения переменной n
    console.log();
    wl.innerHTML = "вы нажали на кнопку:   " + n; // Изменение содержимого элемента
    wl.style.backgroundColor = "red"; // Изменение цвета фона элемента
}

// Пример функции для обработки ввода в текстовое поле
function onMause(wl) {
    console.log(wl.value); // Вывод значения текстового поля в консоль
    console.log("onMause"); // Вывод сообщения в консоль
}

// Пример получения элементов по классу и вывода их содержимого
var spans = document.getElementsByClassName('simple-text'); // Получение всех элементов с классом 'simple-text'
for (let index = 0; index < spans.length; index++) {
    console.log(spans[index].innerHTML); // Вывод содержимого каждого элемента в консоль
}

// Пример добавления обработчика события для формы
document.getElementById.addEventListener("submit", checkForm); // Добавление обработчика события submit для формы

// Пример функции для проверки формы
function checkForm(event) {
    event.preventDefault(); // Предотвращение отправки формы
    var form = document.getElementById('main-form'); // Получение формы по id
    const name = form.name.value; // Получение значения поля name
    const pass = form.pass.value; // Получение значения поля pass
    const repass = form.repass.value; // Получение значения поля repass
    const gender = form.satate.value; // Получение значения поля gender

    if (pass !== repass) {
        // Если пароли не совпадают, выводится сообщение об ошибке
        alert("Пароли не совпадают");
        return false;
    }

    var fail = "";
    if (name === "" || pass === "" || repass === "" || gender === "") 
        // Проверка на заполненность всех полей
        fail = "заполните все поля";
    else if (name.length <= 1 || name.length >= 10)
        // Проверка длины имени
        fail = "введите корректное имя";
    else if (pass.split('&').length > 1)
        // Проверка корректности пароля
        fail = "введите корректный пороль";

    if (fail !== "") {
        // Если есть ошибки, выводится сообщение об ошибке
        document.getElementById('err').innerHTML = fail;
    } else {
        // Если ошибок нет, перенаправление на другой сайт и вывод сообщения об успешной отправке формы
        window.location = "https://www.youtube.com/@itproger";
        alert("Форма заполнена правильно");
    }

    console.log("Имя:", name); // Вывод значения поля name в консоль
    console.log("Пароль:", pass); // Вывод значения поля pass в консоль
    console.log("Пол:", gender); // Вывод значения поля gender в консоль

    return false; // Предотвращает отправку формы
}