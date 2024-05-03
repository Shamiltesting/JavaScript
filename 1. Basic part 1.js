//Переменная – это именуемая область памяти, имя которой можно использовать для осуществления доступа к данным.//

//Объявление переменной, это когда мы через ключевые слова: "var", "let", "const" даем имя переменной. Например: "let clubs"//

//Иницализация переменной, это когда мы задаем значение в переменную//

/*Правила при выборе имени переменной: 
1. имена должны описывать и отображать предназначение данных, которые хранятся в переменной
2. использовать понятные слова
3. избегайте сокращений и аббревиатуры, название переменной должна быть ясна для всех.*/

/*Имеются ограничения при названии переменных. Нельзя давать имя переменной:
1. где название начинается с цифры
2. в названии которого есть пробелы
3. названия с резервированными словами: this, return и тд.*/

/*Если название переменной имеет два слова, то применяется два способа:
1. camelCase: let nameHere(используют в js)
2. snike_Case: let  name_here(используют в python)*/

/*Регист в названиях переменных имеют значения. Принято давать имя переменной с маленькой буквы.
Только когда у нас вид переменной константа(const), то объявляться она будет с большой буквы.
Константа(const)- это вид переменной, название которой невозможно поменять после ее объявления(но есть исключения)*/

/*Понятие "Hoisting". То есть поднятие или всплывание переменной. Только c объявлением переменной var работает hoisting. Например:
console.log(name);
var name = "Shamil"; // В данном случае выведет значение "Shamil"
Если же мы попробуем используя "let" или "const", то выведет ошибку:
console.log(name);
let name = "Shamil";*/

/*Типы данных: 
1. Примитивы:
- string(строка)
- number(цифра)- к ним относят NaN, infinity и -infinity
- boolean(логическое значение)
- null(пустота)
- undefided(пустота, которую можно заполнить)
- symbol(символ)
- bigIn(большое целое число, 2 возведенное в 53 степень(2 * 53))
2. Объекты: массивы[], объекты{}, функции и классы.*/

/*Динамическая типизация- это явления в JS, когда в одну переменную можно задавать несколько значений. Например:
var whichType = 3;
var whichType = "string";
var whichType = false;
console.log(whichType);// мы видим, что выведет логическое значение "false", несмотря на то, что до этого инициализировали переменную под другими типами значений.
Это и есть динамическая типизация*/

/*Операторы- это символ или ключевое слово, которое указывает исполнять определенное действие или операцию над данными(значениями), или как еще называют над "операндами".
Например: 4 + 4, оператор это +, а цифры это операнды */

/*Унарный минус:
var number = 12;
var number = -number;
console.log(number);*/ //переводит число в отрицательное значение

/*Бинарный минус:
var number = 12;
var number2 = 6;
console.log(number - number2); работает по принципу вычитания*/ 

/*Арифметические  операции:
1. Добавление(+)
2. Отнимание(-)
3. Деление(/)
4. Умножение(*)
5. Остаток от деления(%)
6. Возведение в степень(**)
7. Инкремент(++)
8. Декремент(--)
9. Унарный плюс(+)
10. Унарный минус(-)*/

/*Хочется отметить чтобы логическое значение true будет равно 1, false будет равен 0
Пример с оператором бинарный плюс(+):*/
/*var equalOne = true;
var number = 10;
var result = equalOne + number;
console.log(result);*/

//Пример с оператором бинарный плюс(+)://
/*var equalZero = false;
var number = 10;
var result = equalZero + number;
console.log(result);*/

//Если попробовать применить бинарный минус со string и number://
/*var string = "55";
var number = 5;
console.log(string - number);*/// то string переведет в типа number и произойдет обычное вычитание от числа

//Если попробовать применить бинарный плюс со string и number://
/*var string = "55";
var number = 5;
console.log(string + number);*/// то произойдет конкатенация, то есть будет слипание number в string 

//С логическими значениями тоже произойдет конкатенация://
/*var string = "string here: ";
var boolean = true;
console.log(string + boolean);*/ 

//Унарный плюс способен менять string в number://
/*var string = "55";
var number = +string;
console.log(string);
console.log(number);
console.log(typeof string);
console.log(typeof number);*/

//Примеры с типами данных как "null", "undefined", "NaN" и операторами "бинарный" минус и плюс(результат будет одинаков)://
/*let number = 5;
let a = null;// "null" будет равняться 0
console.log(number - a);*/

/*let number = 5;
let a = undefined;// "undefuned" будет равняться 0
console.log(number + a);*/

/*let number = 5;
let a = NaN;// "NaN" будет равняться 0
console.log(number + a);*/

//Если попробуем умножить string на number:
/*let notNumber = "text" * 5;
console.log(notNumber);// выведет NaN*/

/*Остаток от деления: 
console.log(12 % 6);
console.log(12 % 5);
console.log(4 % 3);
console.log(-4 % 3);
console.log(-6 % 2);
console.log(NaN % 2)*/

/*Левоасациативные операции:
var a = 5 + 3 + 1;
console.log(a);*/

/*Правоасациативные операции:
var a = 5;
var b = 1;
var c = a = b;
console.log(a);*/

/*Возведение в степень: 
console.log(2 ** 3);
console.log(2 ** 3 ** 2);//тут будет правоасациативная операция
console.log(-2 ** 2);\\ таким образом не будет работать
console.log(-(2 ** 2));//выведет -4
console.log((-2) ** 2);//выведет 4 */

/*Инкремент\декремент постфиксный:
let a = 5;
console.log(a++);
console.log(a);
let b = 3;
console.log(b--);
console.log(b);*/

/*Инкремент\декремент префиксный:
let a = 5;
console.log(++a);
console.log(a);
let b = 3;
console.log(--b);
console.log(b);*/

// Операции сравнения в JS://

/*Оператор равенства(==). Сравнивает два значения:
console.log("2" == 1)
console.log("001" == 1)
console.log(true == 1)
console.log(false == 1)
console.log("" == "0")*/

/*Оператор строгого равенства(===). Сравнивает значения по равенству значения и по типу данных. 
Если значения равны по значения и типу данных, то возвращает true, если нет, false:
console.log(0 === false)
console.log("" === false)
console.log("" === 0)*/

/*Оператор неравенства(!=), сравнивает значения по неравенству значения. Если значения равны, то возвращает false, если не равны, то true:
console.log(0 != false)
console.log(11 != 11)
console.log(1 != true)*/

/*Оператор строгого неравенства(!==), сравнивает значения по неравеству значения так и по типу данных. 
Если значения равны и тип данныйх разный, то возвращает false, если нет, то true:
console.log(0 !== false)
console.log(11 !== 21)
console.log(1 !== true)*/

/*Оператор больше(>), оператор меньше(<), оператор больше или равно(>=), оператор меньше или равно(<=):
console.log(true > false)
console.log(0 < true)
console.log(false >= 0)
console.log(4 < 5)*/

//Сравнение "string"://
/*console.log("a" > "b")//буква, которая стоит раньше в unicode, та и будет меньшей
console.log("a" > "A")//маленькие буквы больше больших 
console.log("A" > "1")//буквы больше цифр
console.log("1" > "$")//цифры больше символов
console.log("Judo" > "Jiu Jitsu")//если пуквы равны, то сравнение идет по последующим буквам
console.log("Jiu Jitsu" > "Jiu Jits")//если все буквы равны, но одно из слов короче, то оно будет считаться меньшим 
console.log("a" > "A")*/

//null и undefined равны между собой://
/*let n = null;
console.log(null == undefined);
console.log(n == undefined);
console.log(undefined == undefined);*/

//Попробуем перевести null и undefined в number://
/*console.log("If null reverse to number it will be: " + (+null));//если null перевести в number, то будет 0
console.log("If undefined reverse to number it will be: " + (+undefined));*/ //если undefined перевести в number, то будет NaN

//null c 0 парктически везде будет false://
/*console.log("null > 0: " + (null > 0)); 
console.log("null < 0: " + (null < 0));
console.log("null == 0: " +(null == 0));
console.log("null >= 0: " + (null >= 0));*/ //только тут true

//в случае с undefined везде будет выводить false://
/*console.log("undefined > 0: " + (undefined > 0));
console.log("undefined < 0: " + (undefined < 0));
console.log("undefined == 0: " + (undefined == 0));
console.log("undefined >= 0: " + (undefined >= 0));*/

//NaN не равен ничему, даже самому себе:
/*var a = "Hello" * 3; //выведет NaN
console.log('a=' + a);
console.log('a === NaN? ' + (a === NaN));
console.log('a == NaN? ' + (a == NaN));
console.log('a > NaN ' + (a > NaN));
console.log('a < NaN ' + (a < NaN));*/

//Но как тогда нам узначить, что результат операции вышел NaN? Для этого испольуют isNaN
/*let a = "Hello" * 3;
console.log("Is a equal NaN ? " + isNaN(a));*/



//Логические операторы: "AND"(&&), "OR"(||), "NOT"(!):

// Оператор "&& возвращает true, если все операнды являются true

//Оператор "||" возвращает true, если хотя бы один операнд true, в другом случае false

//Оператор "!" инвертирует значение на false, если при этом оно было true: !true=> false.

//При этом 0, "", null, undefined, NaN => будет инвертировать в false, все остальное будет true.

//Оператор нулевого слияния "??": выводит первый операнд, если он не является "null" и "undefined":
/*console.log(7 ?? 5);
console.log(null ?? 5);
console.log(undefined ?? 10 ?? 5);
console.log(null ?? undefined ?? 10);
console.log(null ?? undefined);*/  