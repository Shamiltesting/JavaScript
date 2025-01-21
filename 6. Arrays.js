/*
Массивы
В JavaScript массив(Array) является структурой данных, позволяющей сохранять коллекцию элементов в одной переменной.
Массивы в Javacript могут содержать разные типы данных: числа, строки, объекты, функции и другое.
Каждый элемент в массиве имеет уникальный индекс, позволяющий доступится к нему и взаимодействовать с ним.
*/ 

/*var a = [];
//Массив очент не привередливый, туда можно поместить все что угодно
var array = ['John', 14, true];
console.log(array);*/

//Добавление значения
var players = ['Henry', 'Shevchenko', 'Ronaldo'];
players[3] = 'Batistuta';
console.log(players);
//Теперь изменим какое то значение:
players[0] = 'Figo';
console.log(players);

//Можно удалить значение, но так делать не желательно
//Оператор delete удалияет значение, в таком случае вместо удаленного значения в его индексе будет undefined. 
var randomTypesValue = [1, null, undefined, 'String', [1, 2, 3], {'name': 'John'}];
delete randomTypesValue[0];
console.log(randomTypesValue);
console.log(randomTypesValue[0]);

//Массив может иметь свойства
var players = ['Henry', 'Shevchenko', 'Ronaldo'];
console.log("Length of array " + players.length);
//Свойство length доступна для записи
players.length = 15;//Но так лучше не деалть 
console.log("Array length is " + players.length);

//Массив имеет ссылочный тип
var x = [1, 2, 3, 4, 5, 6];
var y = x;
y[0] = "value change";
console.log(x);
console.log(y);

//Как понять, что перед вами масив
var arr = [1, 2, 3];
console.log(typeof arr);

var notArr = {
    0: "Andrii",
    1: "Shevchenko",
    length: 2
}
console.log(typeof notArr);

//Метод Array.isArray() используется для проврки, является ли объект массивом. 
//Возвращает true, если объект является массивом и false если нет.

console.log(Array.isArray(arr));
console.log(Array.isArray(notArr));

//Перепираем массив
let arr = ["one", "two", "three", "four"];
arr[5] = "also some digit";

for (let i = 0; i < arr.length; i++) {
    console.log("arr [" + i + "] = " + arr[i]);
}

//Можем попробовать через for in цикл. В этом цикле выведется "arr.newIndex = "так тоже можем добавить значение в массив";"
let arr = ["one", "two", "three", "four"];
arr.newIndex = "another way to add value in array";

for (let i in arr) {
    console.log("arr [" + i + "] = " + arr[i]);
}

//Но какого будет длина массива
console.log("length of arr = " + arr.length);

//Как это будет выглядить через клисический for
for (let i = 0; i < arr.length; i++) {
    console.log("arr [" + i + "] = " + arr[i]);
}

//Методы массива:

//Превращение массива в строку
var array = [1, 2, 3, 4, 5];
array[10] = 9;
console.log(array);
console.log("Change array to string: " + array.toString());
console.log("join array: " + array.join());
console.log("Input something in joined array: " + array.join(' '));//с указываем разделитель 

//Метод toString превращает объект на его строчную вариант
var object = {
    0: "first",
    1: "second",
    2: "third",
    length: 3
};

var string = object.toString();
console.log(string);
console.log(typeof string);
console.log(typeof true.toString());

//Посмотри на разницу
var array = [1, 2, 3, 4];
console.log(array);//обычный вывод массива
console.log("And now this variation " + array);//при конкатинации с строкой массив становится строкой

//Действие противоположное join - split
var stringToArr = "Transform string to array";
var array = stringToArr.split(' ');
console.log(array);

//Склееваниe массивов- concat
var digitsArr = [1, 2];
var stringArr = ["one", "two"];
var concatArr = digitsArr.concat(stringArr);
console.log(concatArr);

//C помощью concat можно передавать разные параметры и не обязательно чтобы это был массив
var digitsArr = [1, 2];
var addNewParam = digitsArr.concat(["one, two"], true, null, undefined, 10);
console.log(addNewParam);

//Можем склеевать цифры массива вот таким образом
var a = [3, 3];
var b = [10, 10];
var plusArrayDigits = a + b;
console.log(plusArrayDigits);
console.log(typeof plusArrayDigits);//в таком случае тип будет не массив, a string
//сначала тройка с массива а, потом к тройке массива а подягивается десятка массива b, и далее остается десятка массива b

//indexOf() и lastIndexOf() работает и в массиве
var arsenal = ["Henry", "Viera", "Pires", "Gilberto", "Cole"];
console.log(arsenal.indexOf('Viera'));
console.log(arsenal.lastIndexOf("Cole"));

//Вирежем кусок массива
var array = [1, 2, 3, 4, 5, 6];
var newArr = array.slice(3);//c 3го и до конца 
console.log(newArr);
var newArr = array.slice(2, 5);//c 2го по 5й
console.log(newArr);
var newArr = array.slice(3, 1);//пустой массив
console.log(newArr);
var newArr = array.slice();//вернет весь масив
console.log(newArr);
var newArr = array.slice(-4, -1);//c конца 
console.log(newArr);
console.log("The original array remains unchanged. array = " + array);
console.log("And of course there will be changes here. x = " + newArr);

//Метод reverse() делает задом наперед
var arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

//Сортировка массива
var array = [15, 4, 20, 8, 10, 90];
console.log("Before sort: " + array);
array.sort();
console.log("After sort: " + array);

/*По умолчанию sort() строки сортируется по их кодам Unicode, а числа сортируются как строки.
Однако вы можете использовать собственную функцию сравнения для определения кастомного порядка сортировки*/
var array = [2, 38, 14, 5, 19, 21];
console.log("Before sort: " + array);
array.sort(mySort);


function mySort(a, b) {
    return a - b;
}
console.log("After sort: " + array);


//Можно наоборот 
var array = [90, 5, 17, 34, 82, 40];
array.sort(function(a, b) {
    return b - a
});
console.log("After sort: " + array); 

//Также можно функцию в виде =>
var array = [40, 33, 3, 8, 10, 17];
array.sort( (a, b) => {
    return a - b
});
console.log("After sort: " + array);    

//Теперь посмотрим как sort() будет работать с строкой
var players = ["Zanetti", "Lizarazu", "Fabregas", "Zidane", "Davids"];
players.sort();
console.log("After sort: " + players); 

//Манипуляции с массивом
//pop- выталкивает последний элемент массива
var array = ["string", 44, true, 55];
console.log("original array = " + array);
var removeLastEl = array.pop();
console.log("now array icludes: " + array + ". Removed element is- " + removeLastEl);

//push- вталкивает в конец массива элемент
var array = [14, "string", false];
console.log("Thats how look array before push: " + array);
var inputEl = array.push(19, "New string");
console.log("Аnd this after push: " + array); 
console.log(inputEl);//отображает количество элементов в массиве.

//shift() забирает первый элемент с массива
var array = ["first", 33, "string", 1];
var takeFirstEl = array.shift();
console.log("The \"array\" will be without firts element: " + array + "\nThat will be in \"takeFirstEl\": " +takeFirstEl);


//метод unshift() cмещение массива- справа добавляя элементы
var array = [44, "string", false];
var newArray = array.unshift(1, 2);
console.log("That what include the \"array\": " + array + "\nhow many elements in \"newArray\": " + newArray);

//Метод splice, используется для изменения содержимого массива: вставка, удаление и замена элементов.
//Вырезать кусочек из середины массива
var array = [1, 2, 3, 4, 5];
console.log("In begin array include: " + array);
var newArr = array.splice(1,2);//забираем с массива элементы с индексом 1 и 2  
console.log("new array include: " + newArr + "\nold array after splice include: " + array);


//Можем вставить в середину кусочек
var array = [1, 2, 3, 4, 5];
console.log("Before splice the array include: " + array);
var newArr = array.splice(3, 0, "a", "b");//новые элементы "a" и "b" будут вставлятся в середину начиная с 3го индекса
console.log("New array include: " + newArr + "\nAfter splice array include: " + array);

//Можно вырезать и вставить
var array = [1, 2, 3, 4, 5];
console.log("Before splice the array include: " + array);
var newArr = array.splice(1, 2, "a", "b");//забрали элменты с индексом 1 и 2, вставили "a" и "b"
console.log("New array include: " + newArr + "\nAfter splice array include: " + array);


//Используем метод forEach c функцией
var array = [5, 8, 10, 22];
array.forEach(function(v) {
    console.log(v * 2)
});
console.log(array);


//Стрелочная функция тоже доступна
var array = [1, 10, 5, 8];
array[7] = 40;//добавили в массив элемент под индексом 7
array.forEach((v) => {
    console.log(v * 2)
});
console.log(array);


//Это нам доступно и через цикл 
var array = [1, 10, 5, 8];
array[7] = 40;

for(let i = 0; i < array.length; i++) {
    console.log(array[i] * 2)
};
console.log(array);


//Благодоря map() создаем новый массив исходя из уже существуещего
var array = [1, 8, 5, 4];
var elementsX2Array = array.map(function(v) {
    return v * 2
});
console.log(array);
console.log(elementsX2Array);   


//Полная перечень аргументов
var array = [5, 7, 3, 8];
var newArr = array.map(function (item, i, array) {
    //console.log(array);//изначальный массив
    //console.log(i);//итерации
    return ' ' + i + ' : ' + (item * 10)
});
console.log("array " + array);
console.log("newArray " + newArr);


//Фильтрация массива
var array = [5, 7, 3, 8];
var afterFilter = array.filter(checker);
console.log(array);
console.log(afterFilter);

function checker(item) {
    return item < 8
};


//Проверка every и some
var array = [5, 7, 5, -4, 1];
console.log("Is EVERY element positive: " + array.every(checker));
console.log("Is SOME element positive: " + array.some(checker));

function checker(item) {
    return item > 0
};