//Циклы 
/*let x = 0;
while (x < 4) {
    console.log("The x = " + x++);
}*/

//Несколько слов о локальных изменеия: 
/*let x = 5;
let local = "Наружное изменение";
while (x) {
    x--;
    let local = "Внутренее изменение"
    console.log("Внутри цикла \"local\" = " + "\"" + local + "\"");
}
console.log("По окончанию цикла x = " + x);
console.log("local вне цикла будет \"" + local + "\"" ); */

//Цикл может закончится так и неначавшись:
/*while (false) {
    console.log("При фолсе цилк даже не начинает свои итерации");
}
console.log("Конец");*/

//Неограниченное количество инетраций в цикле:
/*while (true) {
    console.log("Нескончаемые итерации");
} 
console.log("Конец задания");*/

// Цикл "do while":
/*let x = 3;
do {
    x++;
    console.log("The iteration of cycle is equal \"4\" and \"X\" is = " + x);
}
while (x < 7) {
}
console.log("Outside of cycle \"X\" = " + x);*/

/*let x = 0;
do {
    x += 2;//в каждой итерации будет добавлятся 2 
    console.log("Всего интераций будет 3, где к \"x\" будет добавляться 2. А именно \"x\" = " + x);
}
while (x < 5) {
     console.log("По итогу цикла \"x\" = " + x);
     x += 2;//эта строка кода добавляется еще 2 к конечней цифре, которой равен "x" в конце цикла
 }
 console.log("К \"x\" прибавилось еще 2 и он равен : " + x);*/

 // В случае когда условие "while" false, "do" хотя бы раз отработает:
/*do {
    console.log("Одна итерация при \"false\" условии");
 }
 while(false);*/

 //Цикл "For":
/*let x = 3;
 for (let i = 0; i < 3; i++) {
    console.log("Будет 3 итерации, где \"i\" = " + i);
    x += 3;
 }
 console.log("\"x\" должен быть равен 12. Смотрим \"x\" = " + x);*/

 //Можна также делать обратный отчет в цикле:
 /*let j;
 for (i = 4, j = "Hello"; i > 0; j += " +" ) { //можем задавать значение переменной внутри самого цикла, как это сделано с переменной "j"
    i -= 1; //за счет этой строки будет идти обратный отсчет в цикле 
    console.log("К слову \"Hello\" бует прибавлятся плюсик в каждом цикле. Смотрим: \"j\"= " + j);
 }
 console.log("По итогу \"i\" будет ноль. Смотрим \"i\"= " + i);*/

 //Кейс с локальной переменной:
 /*for (var x = 0; x < 5; x++) {
    console.log("Должно вывести 5 итераций. В середине цикла \"x\" = " + x);
 }
 console.log("В не цикла \"x\"= " + x);*/

 //"break" и "continue" ручное управление циклом:

 /*let i = 0; 
 for (; ;) {
    if (i === 7) {
        console.log("По окончанию \"i\"  должен быть 7")
        break;//прирываем цикл
    }
    console.log(i);
    i++;
 }
 console.log("\"i\" = " + i);*/

 /*for (var i = 5; i--;) {
    if (i === 2) {
        console.log("Инераций будет 2. А \"i\" будет равен 2");
        break;
    }
    console.log("\"i\" = " + i);
 } 
 console.log(i);*/

 // Команды "continue" пропускает ход
/*let x = 10;
 for (var i = 0; i < x; i++) {
    if (i % 2) continue; //эта строка кода задает условие только четное число, а "continue" говорит чтобы все остальные в цикле
        console.log("Показывать только четные числа. \"i\" будет показывать только четные числа. Итераций будет 5")
        console.log("\"i\" = " + i);
    }
 console.log("По итогу \"i\" будет равен 10"); 
 console.log("Смотрим: \"i\" = " + i);*/

 //Тоже самое можно сделать без "continue" и с другим условием:
 /*for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) { // как мы видим "continue" отсутствует и добавился оператор "===" с цифрой "0"
        console.log("Показывать только четные числа. \"i\" будет показывать только четные числа. Итераций будет 5");
        console.log("\"i\" = " + i);
    }
 }
 console.log("По итогу \"i\" будет равен 10"); 
 console.log("Смотрим: \"i\" = " + i);*/

 //Цикл в цикле. 

 //попробуем сделать таблицу умножения: 
/*let digit = 5;
 console.log("Сделаем умножение к числу 5 от 0 до 10")
 for (var i = 0; i <= 10; i++) {
    console.log("digit * i = " + digit * i);
 }*/

//А теперь все таблицу умножения:

/*for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) { //мы видим цикл в цикле
        console.log(i + " * " + j + " = " + i * j);
    }
    console.log("СЛЕДУЮЩАЯ ЦИФРА");
}*/

//В случае, есля хотим умножать только парные цифры:
/*for (var i = 1; i <= 10; i++) {
    if(i % 2) 
        continue; 
    for (var j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
    console.log("СЛУДУЮЩАЯ ЦИФРА");
}*/

//Метки в цикле:
/*label: for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        if ( j === 5) {
            console.log("СЛЕДУЮЩАЯ ЦИФРА");
            continue label; //мы видим что благодоря условию "j === 5" и команде "continue label", умножение будет происходит пропуская цифру 5   
        }
        console.log(i + " * " + j + " = " + i * j);
    }
    console.log("СЛЕДУЮЩАЯ ЦИФРА")
}*/

/*label: for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        if (j === 5) {
            break label; //мы видим что благодоря условию "j === 5" и команде "break label", умножение будет происходит только до цифры 5(не включая 5) 
        } 
        console.log(i + " * " + j + " = " + i * j);
    }
    console.log("СЛЕДУЮЩАЯ ЦИФРА");
}*/

/**Functions
 Функции – это блоки кода, которые можно вызвать из любого места в программе.
 Они позволяют сгруппировать определенный фрагмент кода и использовать его во многих местах.
 Без необходимости повторять сам код.
 В JavaScript есть несколько способов определения функции:
 - Function Declaration
 - Function Expression 
 - Arrow Functions
 */

 // Function declaration:
 /*function test() { //объявляем функцию 
    console.log("Привет от функции"); // тело функции
 }
 test(); // данной строкой вызывается функция: пишется ее название и круглые скобочки*/

 /*test(); // мы можем вызвать функции в начале кода
 function test() { //объявляем функцию 
    console.log("Привет от функции"); // тело функции
 }*/

 // Давайте поместим в функцию какую то логику используя "prompt":
/*function digit() {
    let a = +prompt("Введите цифру");//"prompt" это вызов всплывающего окна с возможностью ввода цифр
    console.log(a * a);// введенное цифра в поле будет умножаться на само себя
 }
 console.log("Функция будет умножать введенное цифру на саму себя")
 digit();*/

 //Функция – единственный способ создать локальную область видимости
/*var outside = "Переменная в не функции";
function test() {
    var inside = "Переменная внутри функции";
    console.log("В СЕРЕДИНЕ ФУНКЦИИ")
    console.log("\"inside\" = "  + inside);
    console.log("\"outside\" = " + outside);
}
test();
console.log("A ТЕПЕРЬ В НЕ ФУНКЦИИ");
console.log("\"outside\" = " + outside);
console.log("\"inside\" = " + inside);*///мы видим, что переменная, объявленная в функции, не будет выводиться в не этой функции.

//Есть возможность инициализировать одну и ту же переменную задавая разные значения. В не функции будут одни значения, а внутри функции другие:
/*let outside = "Переменная в не функции";
function test() {
    let outside = "Переменная внутри функции";
    console.log("В СЕРЕДИНЕ ФУНКЦИИ");
    console.log("\"inside\" = " + outside);
}
test();
console.log("А ТЕПЕРЬ В НЕ ФУНКЦИИ");
console.log("\"outside\" = " + outside);*/

//Внутри функции тоже происходит динамическая типизация, то есть возможность менять значения переменной:
/*function changeValue() {
    var digit = 5;
    console.log("Задаем переменной вначале цифру : " + digit);
    var digit = "cейчас тут текст";
    console.log("А потом делаем ее \"string\" " + digit);
}
changeValue();*/

//Внутри функции переменные "всплывают" точно так же, как и в основном скрипте:
/*function test() {
    var digit = 5;
    console.log("Задаем переменной вначале цифру : " + digit);
    var digit; 
    console.log("Несмотря на то, что мы не инициализировали переменную \"digit\", она все равно будет выводить цифру " + digit);
} 
test();*/

//Function Expression:
/*let digitOnItSelf = function() { //таким образом мы задаем функцию
    let a = +prompt("Enter digit to calculate");
    console.log(a * a);
}
digitOnItSelf();*/

//Ту же самую функцию можно и по-другому написать: 
/*digitOnItSelf();
function digitOnItSelf() {
    let a = +prompt("Enter digit to calculate");
    console.log(a * a);
}*/

//И еще один способ написания все той же функции: 
/*var digitOnItSelf = function() {
    let a = +prompt("Enter digit to calculate");
    console.log(a * a);
}
digitOnItSelf();*/

//Function Expression полезно использовать, когда в одной переменной хотим использовать несколько функций: 

/*var hotelName = "Olive";
let winterDiscount;
switch (hotelName) {
    case "Staro": 
    winterDiscount = function () {
        let price = 500;
        let session = "winter";
        if (session === "winter") {
            price -= 150;
            console.log("In \"Staro\" the price on " + session + " = " + price + " UAH");
        }
        }
        break;
        case "Olive":
            winterDiscount = function () {
                let price = 200;
                let session = "winter";
                if(session === "winter") {
                    price -= 60;
                    console.log("In \"Olive\" the price on " + session + " = " + price + " UAH");
                }
            }
            break;
    }
    winterDiscount ();*/

    //Есть определенные рекомендации, что и как должна содержать функция или как она должна выглядеть. 
    //Сравним два кода с одной и той же функцией: 
    /*function calculate () { //структура данной функции есть не самая идеальная  
        let a = +prompt("Enter digit");
        console.log(a + a);
    }
    calculate ();*/

    /*let a = +prompt("Enter digit");
    function calculate () {
        let result = (a + a);
        return result// мы убрали с функции объявление/инициацию переменной и "console.log", а вместо этого добавили "return", 
        который позволяет вывести переменную с функции и неоднократно использовать переменную
    }
    let result = calculate();
    console.log(result);*/

    //Так же важно помнить, что "return" прерывает функцию:

    /*let b = 1;
    let a = +prompt("Enter digit");
    function test () {
        if (b > a) {
            return "Stop function"//мы видим что функция не будет работать до конца, а выведет "Stop function"
        }
        let result = (a * a);
        return result
    }
    let result = test ();
    console.log(result);*/

    //Передача аргументов в функцию: 
    /*let a = 5;
    function test(calculate) {//задаем функции аргумент "calculate" 
        return calculate * calculate;
    }
    let result = test(a);//избавляемся от зависимостей за счет аргумента. 
    //Это означает, что мне стоит только поменять значение в переменной "a" и функция будет использовать эти изменения 
    console.log(result);*/

    //Аргументов(параметров) функции можно указывать сколько угодно:
    /*function info(name, city, age) {
        console.log("My name is " + name + ". Im from " + city + " and I " + age + " year age");
    }
    info("Shamil", "Dishni Mohkh", 34);*/
    
    //Так же возможно задавать значение по умолчанию:
    
    /*function test(name = "Shamil") {//задаем значение по умолчанию
        let introduction = "Hello! My name is ";
        return introduction + name;
    }
    console.log(test());
    console.log(test("not John"));*/

    //Callback функция- это передача названия функции в саму функцию, это функция в функции.
    
    /*function discount(appearing, session) {
        let price = 500;
        if (session === "winter") {
            appearing(price -= 100);// "appearing" является callback функция в данной функции. 
        }
    }
    discount(console.log, "winter");*/

    
 