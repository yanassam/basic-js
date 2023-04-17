const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Преобразование числа в строку,
  const digits = n.toString().split('');
  // Находим индекс первой цифры, которая меньше ее правого соседа
  let i = 0;
  while (i < digits.length - 1 && digits[i] >= digits[i+1]) {
    i++;
  }
  // Удалить цифру с этим индексом из массива и преобразовать оставшиеся цифры обратно в число
  digits.splice(i, 1);
  return parseInt(digits.join(''));
}

module.exports = {
  deleteDigit
};
