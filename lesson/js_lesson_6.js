// Урок 6: Циклы и итерации
// Задание: Выведите элементы массива с помощью for, while и for...of.

const array = [1, 2, 3, 4, 5];

// Цикл for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Цикл while
let j = 0;
while (j < array.length) {
    console.log(array[j]);
    j++;
}

// Цикл for...of
for (const element of array) {
    console.log(element);
}
