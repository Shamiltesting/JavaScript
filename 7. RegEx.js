//Регулярные выражения

//RegEx- это объект, который можно создать литералом
var italyClubs= "Inter, Juventus, Milan, Roma, Lazio";
var re = /Milan/;
console.log(typeof re);
console.log(italyClubs.search(re));//пытаемся найти совпадение между переменной и RegEx. Будет отображать первый индекс значения(символов) слвпадения
console.log(italyClubs.search(/Parma/));//если не находит совпадение, то будет выводить -1
console.log(re.test(italyClubs));//провереят строку на наличие значения(символов).Выводи true- если есть и false- если нет

//Однако мы пока что не увидели ничего такого, что не мог бы indexOf();
var email1 = "shamil@gmail.com";
var email2 = "akhmadov@yahoo.com"
var re = /@gmail|@ukr/;//знак | в регулярных веражения означает "или"
console.log(email1 + " : " + email1.search(re));//здесь нам выведет, так как есть совпадение по одному выражению, а именно @gmail. 
console.log(email2 + " : " + email2.search(re));//нет совпадений с @yahoo
//Через "test" будет выводит true или false 
console.log("Тестируем первую почту " + re.test(email1));
console.log("Тестируем первую почту " + re.test(email2));

//Перечень альтернативных вариантов можно заключить в скобочки 
var email1 = "shamil@gmail.com";
var email2 = "akhmadov@yahoo.com";
var re = /(@gmail|@aol).com/ //с точкой не все так просто
console.log(email1 + " : " + re.test(email1));
console.log(email2 +  " : " + re.test(email2)); 

//Спец симводлы. Если стоит точка ".", это означает что любые символы перед точкой
var email1 = "shamil@gmail.com";
var email2 = "akmadovcom@";
var re = /.com/
console.log(email1 + "is " + re.test(email1));
console.log(email2 + "is " + re.test(email2));//здесь тоже будет выводить true несмотря на то, что в email2 нет регулярки .com

var str = "Здесь в значении есть символ \" | \". Что бы найти этот символ надо экранировать его"
var re = /\||\./ //символ "\" экранирует cимвол |, далее идет символ или(|), снова экранирование точки "." 
console.log("str" + " is " + re.test(str));

//Можем искать диапазон значений 
var email1 = "shamil@gmail.com"
var re = /[zpqo]/;//тут мы задаем диапазон, то есть хотя бы одно значение из диапазона должно присутствовать в значении переменной email1
console.log(email1 + " is " + re.test(email1));

// /[a-z]/ диапазон значений от a до z 
// /[0-9]/ дипазон значений от 0 до 9
// /[a-zA-Z0-9]/ Все буквы в независимости от регистра и все цифры
//Cокращения
// /\d/ это тоже самое что и \[0-9]\
// /\w/ это тоже самое что и \[a-zA-Z0-9_]\ и плюс знаки подчеркивания 
// /\s/ это разные пробелные симвомлы 

//Мы можем комбенировать два подхода:
var string = "Этот 3 числа будет турнир";
var re = /[0-3].* турнир/;//.* это пробелы и слова, которые стоят между 3 и турнир
console.log("Есть совпание в string c регуляркой " + re.test(string));

//Диапазон кроме:
var string = "В этом тексте нет латинских букв";
var re = /[^\w]/;//символ ^ указывает, есть ли что то помимо латинских букв  
console.log("в string есть совпадение с re: " + re.test(string));
console.log("Индекс символа, который начинается после латинских букв: " + string.search(re));

//Тут мы указывает: есть что то кроме мельнких букв а-я  :
var string = "Начинается с большой буквы";
var re = /[^а-я]/;
console.log(re.test(string));//мы видим, что есть большая буква "Н" в стринге
console.log(string.search(re));//и ее индекс равен 0

//Теперь мы указываем в регулярке, что есть что то кроме а-я и "Н" 
var string = "Начинается с большой буквы";
var re = /[^а-яН]/;
console.log(re.test(string));//мы видим, что есть пробелы в стринге
console.log(string.search(re));//и ее индекс равен 10

//А теперь выведем false. В таком случает в регулярном выражении нам надо указать пробел
var string = "Начинается с большой буквы";
var re = /[^а-яН\s]/;
console.log(re.test(string));//мы видим, что нет ничего такого в стринге чего небыло б не указанно в регулярке.
console.log(string.search(re));//в таком случаее индекс равен -1

// \D - все кроме цифр
// \W - все кроме букв, цифр и _
// \S - все кроме пробельных символов
//[.+()] - это означает, что в середине регулярки просто символы
//. - это все символы

//Можем указать количество повторений символов. Это называется кватификатор. 
console.log(/abc/.test("abbc"));//false
console.log(/ab{2,4}c/.test("abc"));//в фигурных скобочках говорится о том, что буквы "b" должно собержатся от 2-4 
console.log(/ab{2,4}c/.test("abbbbbbbbbbbbbbc"));//слишком много b
console.log(/ab{2,4}c/.test("abbbbc"));//true
console.log(/ab{2}c/.test("abbc"));//только два b должно быть 
console.log(/ab{2,4}/.test("abbbbbbbbbbbbbb"));//если после b в регулярке ничего не идет, значит его количество может быть неограниченно при проверке
console.log(/ab{2,}c/.test("abbbbbbbbbbbbbbbbbbc"))//тоже самое что и предыдущее только с учетем буквы "с"

//Так же есть варианты использовать в кватификаторах знаки:
console.log(/ab?c/.test("ac"));//знак ? подобен {0,1}, то есть или одна буква b или нет вообще
console.log(/ab?c/.test("ac"));//тут тоже будет true
console.log(/ab?c/.test("abbc"));//в этом случае выведет false, так как у нас метод test проверяет есть ли bb

var re = /ab+c/;//знак + говорит, что {1,}, то есть одна буква b или больше
console.log(re.test("abc"));//будет true
console.log(re.test("abbbbbbbc"));//будет true
console.log(re.test("ac"));//будет false, так как нет буквы b для провепрки

var re = /ab*c/;//знак * говорит, что {0,}, то есть нет или сколько угодно
console.log(re.test("abc"));//true
console.log(re.test("abbbbbbbbc"));//true
console.log(re.test("ac"));//true

//Немного практики. Форматы дат:
var str = "31-10-2017";
var re = /(0[1-9]|[12]\d|3[01])-(0[1-9]|1[02])-\d{4}/;
console.log(re.test(str));
console.log(str.search(re));
//Начинаем с конца: \d{4} означает 4 цифры в годе. 
//Эта часть кода (0[1-9]|1[12]) говорит: к 0 сделать конкатинацию от 1 до 9 или к 1 сделать конкатинацию от 0 до 2
//Эта часть кода 0[1-9]|[12]\d|3[01]) говорит: к 0 сделать конкатинацию от 1 до 9 или любое число, 
// которое начинается в диапазоне 1 и 2(например: 10-19/20-29) или 3 конкатинация 0,1(то есть 30 и 31)

var str = "31-04-1990";
var re = /(0[1-9]|[12]\d|3[01])-(0[1-3]|1[02]-\d{4})/;//будет false потому что (0[1-3]) это месяц только 03 включительно, а у нас 04
console.log(re.test(str));

var str = "13-10-2017saqdwfwq";
var re = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[02])-\d{4}$/ 
console.log(re.test(str));//выводит false потому что в переменной присутствуют латинские буквы, 
// а символы ^$ говорят, что значение должно соответствовать регулярке от самого начала до самого конца 

var str = " a--a abba ahja aqwrra anna";
var re = /^a[a-z]{2}a/;//когда символ ^ в начеле и не в [], это означает, что начинается с буквы "а"
console.log(re.test(str));//будет выводить false, так как значение переменной начинается с пробеда, а не с "а" 

var str = " a--a abba ahja aqwrra anna";
var re = /a[a-z]{2}a/;
console.log(re.test(str));//будет выводить true, так как есть хотя бы одно совпадение
var res = str.match(re);
console.log(res);


var str = 'Сейчас мы будем "искать" все что между "ковычек"';//делается это за счет то, что вставляется .+ между ковычками
var re = /".+"/;
console.log(re.test(str));
console.log(str.match(re)[0]);
console.log(str.search(re));

var str = 'Сейчас просто "выведем" то, что внутри "только" одних ковычек'
var re = /"[^"]+"/;//данныйх regEx будет проверять только то, что первых двух ковычек
console.log(re.test(str));
console.log(str.search(re));
console.log(str.match(re)[0]);

//Есть еще один вариант ленивого поиска
var str = 'Посмотри "как" от будет находить "совпадение"';
var re = /".+?"/;
console.log(str.match(re)[0]);
console.log(str.search(re));

//еще один пример
var str = "amlkmlkmlkmlkmlkml2121 b";
var re = /a.*?b/;
console.log(re.test(str));

//Флаги регулярных выражений 
//Простейший случай: регистронезависимый поиск
var str = "Проверь если С БолЬШОй ли буквы пишится"
var re = /большой/i//буква i, символизирует регистронезависимость
console.log(re.test(str)); 
console.log("Выведи что именно совпадает: " + str.match(re));

//Как заменить указанное в регулярке совпадение на другое:
var plyaers = "Henry, Rooney, Ronaldo, Henry, Ronaldinho";
var re = /Henry/;

var changePlayer = plyaers.replace(re, "Pires");//будет менять только первое совпадение 
console.log("Было: " + plyaers + "\nСтало: " + changePlayer);

var plyaers = "Henry, Rooney, Ronaldo, Henry, Ronaldinho";
var re = /Henry/g//буква g означает global,  то есть все совпаддения будет менять  

var changePlayer = plyaers.replace(re, "Pires");
console.log("Было: " + plyaers + "\nСтало: " + changePlayer);

//Еще один флаг- m (multiline)
var plyaers = "Henry\nRooney\nRonaldo\nRonaldinho";
var re = /^[a-zA-Z]/g
var changeFirstL = plyaers.replace(re, "*");//Мы видим, что функция replace меняет только первую букву первого слова 
console.log(changeFirstL);

var plyaers = "Henry\nRooney\nRonaldo\nRonaldinho";
var re = /^[a-zA-z]/gm//за счет m(multiline) у на в значении будут меняться первые буквы у все слов
var changeFirstL = plyaers.replace(re, "*");
console.log(changeFirstL);

//Теперь посмотрим как g влияет на match
var plyaers = "Henry, Rooney, Ronaldo, Ribery, Ronaldinho" ;
var re = /[a-z]+ry/gi
var filterByL = plyaers.match(re);
console.log(filterByL);

//Ссылка в регулярных выражениях
var re = /['"][^'"]*['"]/; 
//var str="abc\"def\"ghijk";
//var str="abc\'def\'ghijk";
//var str = "abc\"def\'ghijk";//Мы видим, что тут двойная ковычка и одинарная в середине. При отправке такого JSON значения на серевер, может быть 400я или 500я ошибка. 
console.log(re.test(str));

//Тут будет выводит false за счет *1, то есть должно заканчиватся такой же кавычкой какой и начиналось слово:
var re = /(['"])[^'"]*\1/;
// var str = "abv\'fgv\'hjv";
// var str = "adc\"yub\"asq";
// var str = "abc\"ghj\'rtg";//теперь будет false
console.log(re.test(str));
var res = str.match(re);
console.log(res);

//Теперь пример, когда будут выводится слова заключенные в любые кавычки
var players = "Henry, \"Ronaldo\", 'Rooney, 'Ronaldinho\", 'Pires'";
var re = /(['"])[^'"]+\1/g;
var selectedPlayers = players.match(re);
console.log(selectedPlayers); 

//Replace работает не только со строками, но также и с RegEx
var str = "12aaa54dfhj5546b4mn56bmi456mn456";
console.log("Пример: " + str);

var re = /\d+[a-z]+/;
var res = str.replace(re, 'JUSTSOMENEW__');
console.log(res);

//Теперь хотим поменять местами цифры и буквы
var playerNumber = "14henry7ronaldo9rooney";
var re = /(\d+)([a-z]+)/g;
var change = playerNumber.replace(re, "|$2-$1|");//будем выводить в указанном виде и порядке
console.log(change); 

//Еще примеры как можно делать replace
var playerClub = "Henry 'is player of Arsenal and France";
var re = /(Arsenal) and (France)/;
console.log("That how its look: " + playerClub);
var changePlace = playerClub.replace(re, "$2 and $1");

//var changePlace = playerClub.replace(re, "$1 $`"); //часть строки до совподения с символ `
//var changePlace = playerClub.replace(re, "$1 _$'_"); //часть строки после совподения 
//var changePlace = playerClub.replace(re, "$1 _$&_"); //совпадение целиком 

console.log(changePlace);

//Можем также находить совпадение таким образом:
var playerClub = "The player of Arsenal Henry ";
var re = /(?:Arsenal|ManUn) (?:Henry|Rooney)/;
var check = playerClub.match(re);
console.log(check);

//Есть возможность использовать Split с регулярными выражениями
var players = "Henry: Arsenal, Ronaldo_R.Madrid, Rooney:ManUn. Ronaldinho_Barcelona";
var re = /[:.,_]/i;
var separate = players.split(re);
console.log(separate);
