/*Объект JavaScript - это сложный тип данных, который позволяет сохранять коллекцию значений и функций,
 которые связаны между собой. Объекты позволяют организовывать данные в виде пар- ключ:значения,
 где каждый ключ – это строка (иногда называют "свойство"),
 а значение может быть разным типом данных, включая другие объекты, массивы, числа, строки, функции и т.п.*/

 /*var user = {
    name: "Shamil",
    lastName: "Akhmadov"
 }

 //Вывести значение свойства можно двумя способами:
 console.log(user.name);//1й способ
 console.log(user["lastName"]);*///2й способ

 //Через точку можно не только обращаться к свойству, но и задавать его:
 /*var user = {
    name: "Shamil",
    lastName: "Akhmadov"
 }
 user.age = 34;
 console.log(user);
 console.log(typeof user);//как мы види тип у нас "object"
 console.log(user.name + " " + user.lastName);//Есть возможность таким образом выводить значения свойста
 console.log("User age = " + user.age);*/

 //Есть возможность менять значения свойства: 
/*var user = {
    name: "Shamil",
    lastName: "Akhmadov"
}
user.name = "Ahmad"
console.log("New name is- " + user.name);*/

//Удаляется свойство следующим образом:
/*var user = {
    name: "Shamil",
    lastName: "Akhmadov"
}
delete user.name
console.log(user.name);*/

//Может показаться, что свойства в объекте это просто переменные, но есть разница:
/*var x = 12;
var object = {
    "user name": "Shamil",
    for: x,
    "2name": "Ahmad",
    14: true,
    'stop!': "stop"
}
console.log(object["user name"]);
console.log(object.for);
console.log(object["2name"]);
console.log(object[10 + 4]);
console.log(object["stop!"]);

var userName = "stop!"
console.log(object[userName]);*///и еще таким образом мы можем добавлять свойство в объект

//Свойством объекта может быть другой объект:
/*var user = {
    name: "Shamil",
    lastName: "Akhmadov",
    skills: {
        manualTesting: 5,
        apiTesting: 5,
        testDocumentation: 5,
        sql: 5

    }
}
console.log(user.name);
console.log(user.skills);
console.log(user.skills.sql);*/

// Очень интересная штука вычисляемые имена свойств
/*var position = "QA";
var engineer = {
    name: "Shamil",
    lastName: "Akhmadov",
    skills: {
        manualTesting: 5,
        apiTesting: 5,
        testDocumentation: 5,
        sql: 5
    },
    [position]: true
}
console.log(engineer[position]);*/

// Свойством объекта может быть даже функция, точнее сказать метод

/*var seriaA = {
    clubs: {
        club1: "Inter", 
        club2: "Milan",
        club3: "Juventus",
        club4: "Roma"
    },
    players: function() {
        console.log("J.Zanetti is captain team " + seriaA.clubs.club1 + " and P.Maldini is captain team " + seriaA.clubs.club2);
    }
}
seriaA.players();*/

//Другой способ записи функции: 
/*var seriaA = {
    clubs: {
        club1: "Inter", 
        club2: "Milan",
        club3: "Juventus",
        club4: "Roma"
    },
    players: function() {
        return "J.Zanetti is captain of " + seriaA.clubs.club1 + " and P.Maldini is captain of " + seriaA.clubs.club2;
    }
}
console.log(seriaA.players());*/

//Уже известные гетеры и сетеры: 
/*var engineers = {
    engineer1: {
    name: "Shamil",
    lastName: "Akhmadov",
    position: "QA",
    skills: {
        manualTesting: 5,
        apiTesting: 5,
        testDocumentation: 5,
        sql: 5    
        }
    },
    engineerInfo(){
        return "QA Engineer Shamil skilled by: " + engineers.engineer1.skills;
    }, 
    getNameQA () {
        return engineers.engineer1.name; 
    },
    setNameQA (name) {
        engineers.engineer1.name = name;
    }
}
console.log(engineers.getNameQA());
engineers.setNameQA("NEW NAME");
console.log(engineers.getNameQA());*/

//Стоит отметить, что get не позволяет перезаписывать значение свойства, get фиксирует его:
/*var engineers = {
    name: "Shamil",
    lastName: "Akhmadov",
    skills: {
        manualTesting: 5,
        apiTesting: 5,
        testDocumentation: 5,
        sql: 5         
    },
    get engineerSkills () {
        return engineers.skills.manualTesting;
    }
}
console.log(engineers.engineerSkills);
engineers.engineerSkills  = 2;
console.log(engineers.engineerSkills);*/

//Если же мы хотим изменить(перезаписать) значение свойства, то нам надо добавить в код "set":
/*var engineers = {
    name: "Shamil",
    lastName: "Akhmadov",
    skills: {
        manualTesting: 5,
        apiTesting: 5,
        testDocumentation: 5,
        sql: 5         
    },
    get engineerSkills () {
        return engineers.skills.manualTesting;
    },
    set engineerSkills (number) {
        engineers.skills.manualTesting = number;
    }
}
console.log(engineers.engineerSkills);
engineers.engineerSkills  = 2;
console.log(engineers.engineerSkills);*/

//Функция - это ЗНАЧЕНИЕ, так же, как число или строка
/*function test() {
    console.log("Text from function");
    return "text from return of function";
}

var x = 1;
console.log(x);
x = test ;
x ();
console.log("x = " + x());*/

//Соответственно – методом может быть и функция, объявлена ​​где угодно!
/*function abilities () {
    console.log("manualTesting, apiTesting, testDocumentation, sql");
}

var engineer = {
    name: "Shamil",
    lastName: "Akhmadov",
    skills: abilities
}
engineer.skills();*/

//Важно понимать, что значения переменной это не значение свойства.
/*var name = "Ahmad";
var lastName = "Akh";

var engineer = {
    name: "Shamil",
    lastName: "Akhmadov",
    test: function (position) {
        //console.log(name + " " + lastName +  " is not " + position)//тут значения переменных
        //console.log(engineer.name + " " + engineer.lastName + " is a " + position);//тут значения свойства объекта
    }
}
engineer.test("QA");*/

//this- контекст исполнения:

/*var engineer = {
    name: "Ahmad",
    lastName: "Akhmadov",
    position: "Developer"
}

var engineer2 = {
    name: "Shamil",
    lastName: "Akhmadov",
    position: "QA",
    responsibilities: function(salary) {
        console.log(this.position +  " should testing backend and frontend of web and mobile app." + " The salary is " + salary);
        //мы видим, что "this" выводит значение свойства, с того объекта, где непосредственно находится функция. В данном случае это объект "engineer2"
    }   
}
engineer2.responsibilities("2200 $ per month")*/

//Мы помним, что this выводит данные в зависимости от того, откуда вызванно функцию, но при "Use strict" mode и его отсутсвии контекст "this" ведет себя по разному:
/*var login = 'global Login';
function test() {
 console.log("The name is " + this.name);
}
test();*/ 

//Если "Use strict" mode включен, то при данном скрипте функция будет выводить ошибку, если нет, то будет выводить значение переменной глобально
//Отключаем "Use strict" и смотрим что происходит и пишим код:
/*var user =  {
    name: "Ahmad",
    age: 16,
    global: test,//этот скрипт позволяет нам вытягивать имя в объекте(Ahmad) за счет функции "test", которая прописанна высше
    local: function() {
        console.log("The name is " + this.name)
    }
};
user.global();*/

//Жангируем методами:
/*var engineer1 = {
    name: "Ahmad",
    age: 16,
    getInfo: function() {
        console.log("The name is " + this.name + " and age " + this.age);
    }
}

var engineer2 = {
    name: "Shamil",
    age: 34
}

engineer1.hasJob = true;//добавляем в объект "engineer2" свойство "hasJob" значение которого "true"
engineer2.getInfo = engineer1.getInfo;//помещаем функцию в объект "engineer2" 

engineer1.getInfo();
engineer2['getInfo']();
console.log(engineer1);
console.log(engineer2);*///выводи весь объект "engineer2"

//Бывают кейсы, когда контекст теряется за счет того, что функция может быть прописанна в фукции:
/*var engineer1 = {
    name: "Ahmad",
    age: 16,
    method: function() {
        function test() {
            console.log("The name is " + this.name + " age " + this.age)
        }
        test();//Здесь теряется контектс "this"
    }
}
engineer1.method();*/// имя и возраст не будет выводится 

//Как избежать подобных ситуаций? Делается это за счет аргументов функции "obj,key":
/*var engineer1 = {
    name: "Ahmad",
    age: 16,
    method: function() {
        function test(obj, key1, key2) {
            console.log("The name is " + obj[key1] + " age " + obj[key2])
        }
        test(this, 'name', 'age');
    }
}
engineer1.method();*/

//Можно еще вот так сделать:
/*var engineer1 = {
    name: "Ahmad",
    position: "Developer",
    additional: function () {
        var here = this;//фиксируем контекст в переменной "here"
        console.log(this);
        console.log(typeof this);
        console.log(here);

        function test() {
            console.log("Здесь будет имя программиста " + here.name)//here- это и есть объект "engineer1"
            here.skills = {hardSkills: 5}//добовляем в объект "engineer1" свойство "skills", который вмещает в себя ключ значение "hardSkills: 5"
        }
        test()
    }
}
engineer1.additional();
console.log(engineer1.skills.hardSkills);*/

//Функция также можеть быть объектом 
/*var engineer = {
    name: "Shamil",
    age: 34,
    position: "QA"
}

function pullIn(option2) {
    //console.log("Name of enineer is " + this.name + " and position is " + this.position)//чтобы выводить данные таким образом надо использовать метод "call"
    //console.log("Name of enineer is " + option2.name + " and position is " + option2.position)
}//чтобы выводить данные таким образом мы должны указать аргумент в функции и привязать его с объектом
pullIn.call(engineer);
pullIn(engineer)*/

//Как мы можем проверить есть ли свойство в объекте:
/*var engineer = {
    name: "Shamil",
    age: 34,
    position: "QA",
    skills: undefined
}
console.log("Хотим проверитть есть ли свойство \"skills\" в объекте \"engineer\"");

if (engineer.skills === undefined) {
    console.log("Такого свойста нет");
}*/

//Предыдущий способ прорверки на дает 100% проверку так как свойство может небыть в объекте вообще или быть, но иметь значение "undefined", в обеих случаях if будет true
//Для для более точной проверки существоует "in". Посмотрим как он применяется:
/*var engineer = {
    name: "Shamil",
    age: 34,
    position: "QA",
    skills: undefined
}
console.log("Хотим проверитть есть ли свойство \"skills\" в объекте \"engineer\"");

if("skills" in engineer) {
    console.log("Да, свойство \"skills\" есть в объекте \"engineer\"" );
}
else {
    console.log("Нет, в объекте \"engineer\" нет свойста \"skills\"");
}

console.log("\nПроверим есть ли в объекте свойство \"experience\"");

if("experience" in engineer) {
    console.log("Да, свойство \"experience\" есть в объекте \"engineer\"" );
}
else {
    console.log("Нет, в объекте \"engineer\" нет свойста \"experience\"");
}*/

//Перебор свойства в объекте:
/*var obj1 = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    7:  "another",
    x: 22,
    y: 32,
    z: 42
}

for(let i = 0; i in obj1; i++) {
    console.log("object = " + obj1[i]);
}*/
//Мы видим, что данный способ обрывается при переборе значений в объекте, так как индексация идет нестрого по счету
//Что бы избежать этого используют "[key]". Посмотрим как он применяется:
/*var obj1 = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    7: "another",
    a: 22,
    b: 32,
    c: 42
}
for (let key in obj1) {
    console.log("object = " + obj1[key]);
}*/

//Объект – тип ссылки!
/*var engineer = {
    name: "Shamil",
    age:34,
    position: "QA"
}

var x = engineer;// делаем отсылку на объект
for (let i in x) {
    console.log(x[i]);
}

//Можем менять значения свойств в объекте:
console.log("Age will be not 34 and pisition will changed to \'Developer\'")
x.age = 24;
console.log(x);
x.position = "Developer";
console.log(x.position);
//В объекте "engineer" так же происходят изменения:
console.log(engineer);*/

//Поговорим немного о методах.
//Метод "keys" выводит все ключи(свойства) объекта:
/*var QATeam = {
    project: "Elysium",
    members: 30,
    section: {
        department1: "Manual",
        department2: "Automation",
        department3: "Security",
        department4: "Performance"
    },
    print: function() {
        console.log(QATeam.project);
    },
    get countMembers() {
        return this.members
    },
    set count(count) {
        this.members = count;
    }
}

    let keys = Object.keys(QATeam);
    console.log(keys);*/

    //Метод "value" выводит все значения объекта:
    /*var QATeam = {
        project: "Elysium",
        members: 30,
        section: {
            department1: "Manual",
            department2: "Automation",
            department3: "Security",
            department4: "Performance"
        },
        print: function() {
            console.log(this.project)
        },
        get countMembers() {
            return this.members
        },
        set count(count) {
            this.members = count;
        }
    }
    let value = Object.values(QATeam);
    console.log(value);*/

    //Метод "Entries" возвращает пару ключ:значение
    /*var engineers = { 
            QAEngineer: {
                name: "Shamil",
                age: 34,
                experience: "more than 3 years"
            },
            developer: {
                name: "Ahmad",
                age: "15",
                experience: "less than 1 year"
            },
            appear: function() {
                console.log(this.QAEngineer.experience);
            },
            get DevAge() {
                return this.developer.age 
            },
            set checkAge(years) {
                this.developer.age = years;
            }            
        }
        let entries = Object.entries(engineers);
        console.log(entries);*/