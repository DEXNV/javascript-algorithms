/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  if (typeof str !== 'string'){
    return "Не тот тип данных";
  }

  if ((str === "") || (str === " ")) return str;

  const output = str.trim()
  return output.split(' ').map(word => {
          return `${word[0].toUpperCase()}${word.slice(1, word.length)}`;
    }).join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"