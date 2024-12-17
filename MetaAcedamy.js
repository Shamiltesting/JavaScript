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


/* Array Plus Array: В этой задаче реализуй функцию getArraysSum, принимающую два массива чисел одинаковой длины и 
возвращающую сумму всех элементов этих массивов. Например:
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


function combineArrays(first, second) {
  let result = [];
    if(first.length === second.length) {
      for (let i = 0; i < first.length; i++) {
        result.push(first[i] + second[i]); 
      }
    }

    if(first.length !== second.length) {
      return false;
    }
  

  return result;
}


console.log(combineArrays([1, 2, 5], [3, 6, 1])); // [4, 8, 6]
console.log(combineArrays([1], [6])); // [7]
console.log(combineArrays([], [])); // []


/* Double Power: Напиши функцию doublePower, которая: принимает массив мощностей currentPowers;
возвращает новый массив с удвоенными значениями из currentPowers.
Если currentPowers пуст, то функция должна вернуть пустой массив. Например:
doublePower([100, 150, 200, 220]); // [200, 300, 400, 440]
doublePower([45, 34, 56, 67]); // [90, 68, 112, 134]
doublePower([]); // [] */


function doublePower(currentPowers) {
  let result = [];

    for (let i = 0; i < currentPowers.length; i++) {
      result.push(currentPowers[i] * 2);
    }

    if(currentPowers === 0) {
      return [];
    }

  return result;
}


console.log(doublePower([100, 150, 200, 220])); // [200, 300, 400, 440]
console.log(doublePower([45, 34, 56, 67])); // [90, 68, 112, 134]
console.log(doublePower([])); // []


/* Make Stickers: Пора запускать массовое производство роботов 🤖 А чтобы работы на линии собирались правильно, их детали нужно маркировать.
Напиши функцию makeStickers, которая:
принимает число detailsCount и строку robotPart;
возвращает массив строк в формате {{robotPart}} detail #{{n}}, например, Foot detail #1.
Если detailsCount=0, то верни пустой массив. Например:
makeStickers(3, 'Body'); // ['Body detail #1', 'Body detail #2', 'Body detail #3']
makeStickers(4, 'Head'); // ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
makeStickers(0, 'Foot'); // []*/


function makeStickers(detailsCount, robotPart) {
  let result = [];

  for (let i = 1; i <= detailsCount; i++) {
    result.push(`${robotPart + ' detail #' + i}`);  
  }

  return result;
}


console.log(makeStickers(3, 'Body')); // ['Body detail #1', 'Body detail #2', 'Body detail #3']
console.log(makeStickers(4, 'Head')); // ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
console.log(makeStickers(0, 'Foot')); // []


/* Decrypt Message: Создай функцию decryptMessage, которая: принимает строчку message; 
возвращает новую строчку, где символы из message расположены в обратном порядке.
Например:
// 'We like drinking tea!!!'
decryptMessage('!!!aet gniknird ekil eW');

// 'A coronavirus pandemic will be in 2020'
decryptMessage('0202 ni eb lliw cimednap surivanoroc A');*/


function decryptMessage(message) {
  let string = '';

  for (let i = message.length -1; i >= 0; i--) {
    string += message[i];
  }

  return string;
}

console.log(decryptMessage('!!!aet gniknird ekil eW'));// 'We like drinking tea!!!'
console.log(decryptMessage('0202 ni eb lliw cimednap surivanoroc A'));// 'A coronavirus pandemic will be in 2020'