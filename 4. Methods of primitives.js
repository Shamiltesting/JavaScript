//Методы примитивов

/*Важный момент: 
console.log(NaN === NaN);// не будет равнятся самому себе*/

//Методы Number
//Способы записи чисел: 
console.log("Two hundred and thirty-five " + 0xEB);//чтобы число висчитывало в шестнадцатеричной системе счета используют "0x"
console.log("Научиный формат " + 2e3);//Данный формат это одно и тоже что: 2 * 10^3

//Мы можем смешивать преобразование чисел:
let result = 0xEB + 2e3;//первое значение = 235, второе = 2000
console.log(result);

/*Метод isNaN (is Not-a-Number) в JavaScript используется для проверки, является ли переданное значение нечисловым (NaN) типом.
Этот метод возвращает true, если значение NaN, и false, если значение может быть конвертировано в число.*/
/*let result = 13 * "string";
console.log(result);
console.log(isNaN(result));
console.log(isNaN(1));
console.log(isNaN(undefined));
console.log(isNaN(null));//мы видим, что в случае "null" будет true.
console.log(isNaN("string"));
console.log("_______________________________")
//Number.isNaN будет проверять есть число NaN тип числа. Эта функция позволяет более детальней проверять данные.
console.log(Number.isNaN(result));
console.log(Number.isNaN(1));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(null));
console.log(Number.isNaN("string"));*/

//Number.isInteger - используется для проверки того, является ли число целым:
/*console.log(Number.isInteger(42));
console.log(Number.isInteger(42.2));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log(Number.isInteger("string"));
console.log(Number.isInteger(false));
console.log(Number.isInteger(null));
console.log(Number.isInteger(undefined));
console.log(Number.isInteger(" "));*/

//Number.isFinite - используется для проверки того, является ли число конечным числом:
/*console.log(Number.isFinite(42));
console.log(Number.isFinite(42.2));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite("string"));
console.log(Number.isFinite(false));
console.log(Number.isFinite(null));
console.log(Number.isFinite(undefined));
console.log(Number.isFinite(" "));*/

//Number.isSafeInteger - используется для проверки того, является ли число безопасным конечным числом
//Безопасные числа включают в себя все целые числа от 2^53 + 1 до 2^53 - 1
/*console.log(Number.isSafeInteger(5));
console.log(Number.isSafeInteger(5.5));
console.log(Number.isSafeInteger("5"));
console.log(Number.isSafeInteger(2 ** 53));
console.log(Number.isSafeInteger(2 ** 53 - 1));
console.log(Number.isSafeInteger(false));*/

//Number.parseInt - этот метод используется для конвертации "string" в целое число:
/*console.log(Number.parseInt('12.45'));
console.log(Number.parseInt('12.3.4'));
console.log(Number.parseInt('12px'));
console.log(Number.parseInt('a123'));
console.log(Number.parseInt('11', 2)); // Двійкова система
console.log(Number.parseInt('ff', 16));
console.log(Number.parseInt('100', 32));*/

//Number.parseFloat - метод для конвертации "string" в число с плавающей точкой:
/*console.log(Number.parseFloat("3.14"));
console.log(Number.parseFloat("0.5"));
console.log(Number.parseFloat("123.456"));
console.log(Number.parseFloat("3.14abc"));*/

//Math - используется для округления числа:
/*console.log("floor: из 3.6 до " + Math.floor(3.6)); //вверх
console.log('ceil: из 3.1 до ' + Math.ceil(3.1)); //вниз
console.log('round: из 3.4 до ' + Math.round(3.4)); //к ближнему
console.log('round: из 3.7 до ' + Math.round(3.7)); //к дальнему*/

//округление к задаваемому знаку.
/*var n = 12.66467;
var str = n.toFixed(1); //цифра в скобочках указывает сколько знаков после запятой останется
console.log(n + ' => ' + str);*/

//Генератор случайных чисел.
/*var rnd = Math.random();
console.log('rnd=' + rnd);*/

//Немного практики: целое случайное число от 1 до 10:
/*var rnd = Math.random();
rnd *= 10;
console.log(rnd);
rnd = Math.round(rnd);//округляем число
console.log(rnd);*/

//Полезные функции с библиотеки Math:
/*console.log(Math.sqrt(25));//Возвращает квадратный корень числа
console.log(Math.pow(3, 2));//Сводит число к степени
console.log(Math.abs(-Infinity));//Возвращает абсолютное значение числа (модуль)
console.log(Math.abs(-2.34));
console.log(Math.abs(-11));
console.log(Math.max(5,52, 15, 41, 71, 6));//Возвращает самое большое число
console.log(Math.min(5,52, 15, 41, 71, 6));//Возвращает самое маленькое число*/

//Немного о точности:
/*var s = 0.1 + 0.2;
var round = s.toFixed(1);
console.log(s);
console.log(s === 0.3);//возвращает false потому переменная "s"(0.1 + 0.2(0.3)) не равно 0.3  
console.log(round == 0.3);
console.log("Добавляет к числу '\N'\ нулей, которые указаны в \"toFixed\" функции. S = " + s.toFixed(10));
console.log("Добавляет к числу '\N'\ нулей, которые указаны в \"toFixed\" функции. S = " + s.toFixed(20));
console.log(0.3 === s.toFixed(1));//возвращает false потому значение "s.toFixed(1)" будет иметь ти значения "string", то есть 0.3 не равно '0.3'
console.log(Number.isFinite(s.toFixed()));
console.log(0.3 === Number.parseFloat(s.toFixed(1)));*/ /*Number.parseFloat функция переводит "string" значение в "nunmber" поэтому у нас тут true. 
Вместо "Number.parseFloat" мы можем написать "+" и в таком случае также переведет значение в тип "number"*/ 
