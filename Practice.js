/*Практика
Задача 1: Необходимо написать программу, которая будет выводить информацию в зависимости от условий, при которых число будет выводиться с правильным словом: 
"год", "года" или "лет". Например: "29 лет" или "4 года". Год получать через prompt().
Проверить, что пользователь ввел число, и это число не является отрицательным.*/

let digitInput = +prompt("Введіть вік");
if (digitInput % 10 === 1) {
    console.log(digitInput + " рік");
} else if (digitInput % 10 == 2 || digitInput % 10 == 3 || digitInput % 10 == 4) {
    console.log(digitInput + " роки");
} else {
    console.log(digitInput + " років");
}



/*Задача 2: Напишите программу, которая будет принимать два значения, первое это единица измерения (километры, часы и килограммы),
второе значение это количество, а затем переводить эти значения:
Километры в метры
часа в минуты
Килограммы в граммы
Сделать вывод полученной информации в виде – 10 км это 10000 м. 1 час это 60мин. 1 кг. это 1000 грм.*/

let unit = "километр";
let quantity = 3;

switch (unit) {
    case "километр":
        console.log(quantity + " " + unit + " это " + quantity * 1000 + " метр");
        break;
    case "час": 
        console.log(quantity + " " + unit + " это " + quantity * 60 + " минут");
        break;
    case "килограмм": 
        console.log(quantity + " " + unit + " это " + quantity * 1000 + " грамм");
        break;
        default:
        console.log("Другая еденица измерения");
        }



//Задача 3: Напишите программу на JavaScript, которая принимает число от пользователя и определяет, является ли введенное число четным или нечетным.

let userDigit = 701;
if (userDigit % 2 === 0) {
    console.log("Чиcло " + userDigit + " - парное");
} else {
    console.log("Чиcло " + userDigit + " - непарное");
}



/*Задача 4: Калькулятор скидки
Создайте программу, которая запрашивает у пользователя сумму покупки и определяет, какая скидка будет применена в зависимости от суммы:
Если сумма меньше или равна 1000 грн, скидка составляет 5%.
Если сумма больше 1000 грн, но меньше или равна 5000 грн, скидка составляет 10%.
Если сумма больше 5000 грн, скидка составляет 15%.
 */

let purchaseAmount = 4999;
let discount = 0;
if (purchaseAmount <= 1000) {
    discount = 0.05;
} else if (purchaseAmount > 1000 && purchaseAmount <= 5000) {
    discount = 0.10;
} else {
    discount = 0.15;
}

let pAWithDiscount = purchaseAmount - (purchaseAmount * discount);
console.log("The purchase amount is: " + purchaseAmount + " UAH");
console.log("The discount equal: " + discount * 100 + "%");
console.log("The amount with discount equal:  " + pAWithDiscount + " UAH");



/*Задача 5: Вам необходимо нарисовать в консоли прямоугольный треугольник из звездочек (или плюсиков, или какого-нибудь другого символа): 
на первой строке – одна звездочка, на второй две, и так далее. Решение оформите в виде функции, куда передаются два параметра: 
высота треугольника и символ, которым его нужно "рисовать".*/

function triangle(hight, symbol) {
    for (i = 0; i <= hight; i++) {
        let space = " ";
        for (j = 0; j <= i; j++) {
            space += symbol;
        }
        console.log(space);
    }
} 
triangle(5, "*")



//Задача 6: Вывести на экран сумму чисел от 1 до 100 включительно, не кратных 3://

var result = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3  && i !== 0) continue; {
    result += i;
    }
}
console.log(result);



//Задача 7: Написать функцию pow(x,y) которая будет принимать 2 числа, первое это число, которое мы будем сводить в степень, второе в которую степень.

function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    console.log(result);
}

pow(2, 3);



//Задача 8: Написать свою реализацию функции isNaN, не используя методы isNaN/ Number.isNaN

function isNaNFunction(a) {
    if (a <= Infinity || a === " ")  
        {
            console.log(false);
        } 
    else {
        console.log(true);
    }    
    }
    isNaNFunction(NaN);


    console.log(isNaN("Any text"))



/*Задача 9:  Проверка теории вероятности. Напишите функцию, которая будет генерировать определенное количество случайных чисел в диапазоне от 100 до 1000 включительно. 
Подсчитать количество четных и нечетных среди них. Вычислить процентное соотношение – будет ли оно близко к 50%50? 
Пример функции checkProbabilityTheory(count). Параметр count будет указывать, сколько раз будет генерироваться случайное число.*/

    function checkProbabilityTheory(count) {
        var evenDigit = 0;
        var oddDigit = 0;
        var percentEvenD = 0;
        var percentOddD = 0;
        for(i = 0; i < count; i++) {
            var rndDigits = Math.floor(Math.random()* 901 + 100);

            if (rndDigits % 2 === 0) {
                evenDigit++;
            }
            else {
                oddDigit++;
            } 
            console.log(rndDigits);
            percentEvenD = Math.round(evenDigit * 100 / count);
            percentOddD = Math.round(oddDigit * 100 / count);
        }
            return `Total digits: ${count}
Even digits: ${evenDigit}
Odd digits: ${oddDigit}
Even digits= ${percentEvenD}% / Odd digits= ${percentOddD}%`
        
        
    }
    console.log(checkProbabilityTheory(30));



/*Задача 10: Создайте объект с как минимум тремя свойствами (постарайтесь проявить фантазию). Напишите метод getInfo(),
который будет выводить все свойства объекта в виде пар "ключ: значение". Обратите внимание: метод должен работать даже после добавления новых свойств к объекту.

Например так:
obj.getInfo(); // Правильная информация об объекте
obj.newProperty = 'Новое свойство!'; // Добавили свойство к объекту
obj.getInfo(); // Выводит все свойства, включая только что добавленное.*/

let seriaA = {
    "club": "Inter",
    "coach": "Hector Cuper",
    "captain": "Javier Zanetti",
    "scorer": "Christian Vieri",
    "assist": "Alvaro Recoba",
    getInfo: function() {
        for(let i in this){
            if(typeof this[i] !== "function") {
                console.log(i + " : " + seriaA[i]) 
            }
        }
    }

}
console.log("Appear current data:");
seriaA.getInfo();
seriaA.city = "Milan"
console.log("appear data after added new property:");
seriaA.getInfo();
