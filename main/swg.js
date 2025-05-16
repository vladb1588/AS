function calcul(wl) {
    console.log('введите число 1')
    console.log('введите число 2')
    console.log('введите оператор')
}
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Введите текст: ', (answer) => {
  console.log('Вы ввели:', answer);
  readline.close();
});