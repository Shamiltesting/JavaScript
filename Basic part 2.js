//Превращение типов примитивов: 

/*Превращение в string:
let text = String(null);
console.log(text);
console.log(typeof text);

let text2 = String(11);
console.log(text2);
console.log(typeof text2);

let text3 = String(undefined);
console.log(text3);
console.log(typeof text3);*/

/*Превращение в number:
let digit = Number(null);
console.log(digit);
console.log(typeof digit);

let digit2 = Number("11");
console.log(digit2);
console.log(typeof digit2);

let digit3 = Number(undefined);
console.log(digit3);
console.log(typeof digit3);

let digit4 = Number("string");
console.log(digit4);
console.log(typeof digit4);

let digit5 = Number(true);
console.log(digit5);
console.log(typeof digit5);

let digit6 = Number(false);
console.log(digit6);
console.log(typeof digit6);*/

/*Превращение в логические значения:
let bool = Boolean("string");
console.log(bool, typeof bool);

let bool2 = Boolean(1);
console.log(bool2, typeof bool2);

let bool3 = Boolean(null);
console.log(bool3, typeof bool3);

let bool4 = Boolean(undefined);
console.log(bool4, typeof bool4);*/

/*
Условные конструкции
JavaScript имеет несколько условных конструкций, которые позволяют вам выполнять код в зависимости от определенных условий.
Основные условные конструкции включают if, else if, else, switch.*/

/*Примеры:
let digit = 4;
if(digit > 3) console.log("appear text");

if(true) console.log("if true is also appear");

if("string") console.log("string is equal true");

if("") console.log("empty string is false");*/ //пустые ковычки является false, соответсвенно не будет выводится

//Также будет false при значениях: NaN, undefined, null, 0//

//Если требуется более одной строки кода:

/*let age = 22;
if (age > 10) {
     age += 10;
    console.log("Age will be not 22, it will be: " + age);
}*/

//Если есть варианты: 

/*let ageMaster = 30;
let ageAdult = 18;
if (ageMaster < ageAdult) {
    console.log("Opens list of master competitors names");
} else {
    console.log("Opens list of adults competitors names");
}*/

//Полная форма: 

/*let price = 999;
if (price < 1000) {
    console.log("For this price possible buy Chinese smartphones");
}
else if (price === 1000) {
    console.log("For this price possible to buy European smartphones");
}
else {
    console.log("For this price possible to buy US smartphones");
}*/

//Тернарный оператор:
/*let player = "P. Maldini";
let playerNumber = (player === "P. Maldini") ? 3 : 4;
console.log(playerNumber);*/

//А как это будет выглядить при if, else конструкции:
/*let player = "P. Maldini";
let playerNumber;
if (player === "P. Maldini") {
    playerNumber = 3;
} else {
    playerNumber = 4; 
}
console.log(playerNumber);*/

//Также есть возможность объеденеть все эти конструкции: 
/*let player = "P. Maldini";
let club = "Milan";
let playerNumber;
if (player === "P. Maldini") {
    playerNumber = (club === "Milan") ? 3 : 4; 
} else if (player === "J. Zanetti") {
    playerNumber = (club === "Inter") ? 4 : 22;
} else {
    playerNumber = (club === "Juventus") ? 10 : 11;
}
console.log(player + " has " + playerNumber + " number ");*/

//Перебор вариантов "Switch":
/*let club = "Inter";
switch (club) {
    case "Inter 2":
        console.log("Ronaldo");
        break;
    case "Milan": 
        console.log("P. Maldini");
        break;
    case "Barcelona": 
        console.log("Rivaldo");
        break;
        case "Real Madrid": 
        console.log("Redondo");
        break;
        case "Juventus": 
        console.log("Z. Zidane");
        break;
        case "Inter": 
        console.log("J. Zanneti");
        break;
        default: //оператр "default" будет отображатся, если из всех кейсов нет валидных данных
        console.log("There is no player from list");
        }*/

//Если убрать "break", то switch будет перебирать кейсы до тех пор, пока не дойдет до команды "break": 
/*let club = "Real Madrid";
switch (club) {
    case "Inter 2":
        console.log("Ronaldo");
    case "Milan": 
        console.log("P. Maldini");
    case "Barcelona": 
        console.log("Rivaldo");
        case "Real Madrid": 
        console.log("Redondo");
        case "Juventus": 
        console.log("Z. Zidane");
        case "Inter": 
        console.log("J. Zanneti");
        break;
        default:
        console.log("There is no player from list");
        }*/

//Еще одна разница между let и var заключается в том, что let не выводит данные из скоупа(блока), в случае, если включен "use strict":
/*let digit = 10;
if (digit === 10) {
    let number = 3;//Если зададим переменную через "let" выведет ошибку 
    number += 5;
}
console.log(number);

let digit = 10;
if (digit === 10) {
    var number = 3;//Если зададим переменную через "var", то выведет значения переменной
    number += 5;
}
console.log(number);*/

//Для того чтобы переменная объявляемая через "let" выводило без ошибки, надо объявить переменную в не блока(скоупа):
/*let digit = 10;
let number = 3
if (digit === 10) {
    number += 5;
}
console.log(number);*/

