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

//Все математические операции в JavaScript выполняются в двоичном виде.
// Не всякая десятичная дробь, красиво выглядящая в десятичном виде, так же красиво смотрится в бинарном.
//Способ "повысить точность" вычисления:
/*var res = (0.1 * 10 + 0.2 * 10) / 10;
console.log(res);
console.log("Будет ли 0.3 ? " + (res === 0.3));*/

//Методы string:

//Возможность через знак доллара и фигуные скобочки и косые ковычки по краям текста:
/*var str = "Текст по умолчанию";
console.log(`Я должен увидеть ${str}`);*///мы видим что переменная заключенна в ${}

/*
\b - backspace
\t - tab
\n - New line
\r - Carriage return
\f - Form feed
\u00A9 -символ юнікоду
*/

/*console.log("Попробуй с \b BACKSPACE");
console.log("Попробуй с \t TAB");
console.log("Попробуй с \n NEW LINE");
console.log("Попробуй с \r CARRIAGE RETURN");
console.log("Попробуй с \f FROM FEED");
console.log("Попробуй с \u00A9 СИМВОЛ ЮНИКОДА");*/

//Экранирование специальных символов:
/*var str = "Экранирование символа внутири string.\nЗаключаем слово \"N\" в ковычки";//Экранирование символа внутири строки делатется с помощью обратного слэша(\)
console.log(str);*/

//lenght - делает подсчет количества сиволов в стрроке:
/*var str = "ЗДЕСЬ ДОЛЖНО БЫТЬ 20";//Пробелы тоже считаются в досчете
console.log(str.length);*/

//chartAt - позволяет получить символ по определенному индексу в строке:
/*var str = "select symbol";
console.log(`Should appear the \"y\"\n${str.charAt(8)}`);//мы видим, что будет выводится буква "у" со слова "symbol"(str переменная)
console.log("Should appear the \"y\"\n" + str[8]);*/ //2й способ использования "chartAt"

//Также chartAt выводит буквы с строки и таким образом:
/*console.log("Should appear the".charAt(1));
console.log("Should appear the"[1]);*/

//Кейс когда индекс указан привышающий количество буква:
/*console.log("Should appear the".charAt(20));//выведет пустую строку 
console.log("Should appear the"[20]);//выведет undefined*/

//repeat - позволяет повторить содержимое строки несколько раз и создать новую строчку:
/*var str = "Hello";
console.log(str.repeat(3));*/

//concat - давно известная конкатенация:
/*var str = "Shamil ";
console.log(str.concat("Akhmadov"));
console.log(str.concat("Akhmadov", " QA Engineer"));*/

//endsWith - используется для проверки, заканчивается ли строка заданной подстрокой.
/*var str = "file.js";
console.log(str.endsWith("js"));
console.log(str.endsWith("file"));
console.log(str.endsWith("differentText"));
console.log(str.endsWith("js", 7));//параметр, указывающий длину основной строки, которую следует учитывать при поиске.
console.log(str.endsWith("js", 6));*/ // выведет false так как буква "j" соответсвует 7 индексу

//includes - позволяет проверить, содержится ли определенная подстрока (для строк):
/*var str = "Shamil Akhmadov";
console.log(str.includes("Shamil"));
console.log(str.includes("shamil"));
console.log(str.includes("Akhmadov", 7));//позицию, с которой начать поиск
console.log(str.includes("Akhmadov", 9));*/

//indexOf - выводит индекс первой буквы прописанного строки или буквы:
/*const str = "Hello, world!";
console.log(str.indexOf("world"));
console.log(str.indexOf("World")); //если нет совпадений по букве или по регистру, то будет выводить "-1"
console.log(str.indexOf("o", 2));
console.log(str.indexOf("o", 9));*/

//lastIndexOf- выводит индекс буквы, которая последняя в стринге
/*const str = "Hello, world!";
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));*/

/*padStart/padEnd - это методы для строк в JavaScript,
используемые для добавления дополнительных символов
(обычно пробелы) до начала или конца строки*/
/*console.log('example'.padStart(8));
console.log('example'.padEnd(8));
console.log('example'.padStart(8,'*'));
console.log('example'.padEnd(8,'*'));
console.log('example'.padStart(10,'*'));
console.log('example'.padEnd(10,'*'));*/

//trim, trimStart, trimEnd - це методи для строк, кооторые используються для удаления пробелов.
/*console.log('   hello'.trimStart());
console.log('hello   '.trimEnd());
console.log('  hello  '.trim());*/

//toLowerCase/toUpperCase - это методи для строк, которые используються для смены регистра символа в строке.
/*var str = "Вот такая странная строка";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log("И один в поле воин"[3].toUpperCase());//применяется к букве с указанным индексом
console.log("  Вот таким образом еще можно  ".toUpperCase().trim().concat("!"))*/

//replace -  используется для смены первого определенного подстроки 
//в исходной строке другой строкой или значением
//В строке нельзя ничего изменить
/*var str = "строка";
console.log("str[4]=" + str[4]);
str[5] = "F"; //Ошибка
console.log(str);*/
//Смотрим что делает "replace":
/*var str = "Какая-то строка просто для примера";
var res = str.replace('я', '_');
console.log(res);
console.log(str);
var replaceAll = str.replaceAll('','*');
console.log(replaceAll);*/

//substring/substr/slice – эти методы позволяют вам вырезать часть строки,
//указыанный индекс определяет с какой части строки будет вырезать метод.
//В простейшем случае все три работают одинаково:
/*var str = "Попробуй вырезать эту букву";
console.log(str.substr(7));
console.log(str.substring(7));
console.log(str.slice(7));*/

//Отрицательный аргумент
/*var str = "Попробуй вырезать эту букву";
console.log(str.substr(-9)); //отсчитывает с конца
console.log(str.substring(-9)); //с нуля
console.log(str.slice(-9)); //отсчитывает с конца*/

//Второй аргумент
/*var str = "Попробуй вырезать эту букву";
console.log(str.substr(10, 14)); //второй аргумент – длина
console.log(str.substring(10, 14)); //первый аргумент- это "от", второй аргумент – это до
console.log(str.slice(10, 14));*/ //первый аргумент- это "от", второй аргумент – это до

//А если отрицательное?
/*var str = "Попробуй вырезать эту букву";
console.log(str.substring(9, -1)); //-1<9 они меняются местами. Кроме того -1 приводится к 0
console.log(str.substr(9, -2)); //вообще не понимает отрицательное число, то есть у меня имеет 9 и -2 ничего не имеет - пустая строка
console.log(str.slice(9, -1));*/ //первая цифра- это с какой буквы начинается отсчет, вторая цифра- отсчет  начинается с конца строки

//Два слова про юникод
/*console.log(String.fromCharCode("97"));
console.log("a".charCodeAt(0));*/
