/* Simple Maths Test: В этой задаче вспомним как работать с числами. Создай функцию checkNumber, которая принимает целое число и проверяет его по 3 критериям:
Это число положительно?
Это число парное?
Это число кратно 10?
Функция должна вернуть массив с результатами проверок в виде булевых значений: true или false. Например:
checkNumber(3); // [true, false, false]
checkNumber(10); // [true, true, true]
checkNumber(0); // [false, true, true]
checkNumber(-1); // [false, false, false] */

function checkNumber(number) {
    return [
      number > 0,
      number % 2 === 0,
      number % 10 === 0
    ];
}

console.log(checkNumber(3));
console.log(checkNumber(10));
console.log(checkNumber(0));
console.log(checkNumber(-1));


/* Array of Numbers: Напиши функцию createArray, которая принимает целое число N и возвращает массив, содержащий все целые числа от 1 до N включительно. 
Если N = 0, верни пустой массив. Например:
createArray(1); // [1]
createArray(3); // [1, 2, 3]
createArray(0); // [] */

function createArray(N) {
    let result = [];
    
    for (let i = 1; i <= N; i++) {
      result.push(i);
    }
  
    if (N === 0) {
      return []
    }
  
    return result;
  }
    
  console.log(createArray(1));
  console.log(createArray(3));
  console.log(createArray(0));


/* Array Plus Array: В этой задаче реализуй функцию getArraysSum, принимающую два массива чисел одинаковой длины и возвращающую сумму всех элементов этих массивов. Например:
getArraysSum([1, 2], [3, 4]); // 10 (1 + 2 + 3 + 4)
getArraysSum([1, 2, 3, 4], [5, 6, 7, 8]); // 36
getArraysSum([], []); // 0 */


function getArraysSum(arr1, arr2) {
  let result  = 0;

  if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
          result += arr1[i] + arr2[i];
      }
  }

  return result
}


console.log(getArraysSum([5, 5], [5, 5]));
console.log(getArraysSum([15, 25], [35, 15]));
console.log(getArraysSum([], []));


/* Combine Arrays: Реализуй функцию combineArrays, которая: принимает 2 массива чисел одинакового размера (first и second); 
возвращает массив чисел, где result[i] — это сумма чисел first[i] и second[i]. Например: 
combineArrays([1, 2, 5], [3, 6, 1]); // [4, 8, 6]
combineArrays([1], [6]); // [7]
combineArrays([], []); // [] */
