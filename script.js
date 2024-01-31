"use strict"

// Домашка
let numA = +prompt('Enter a');
let numB = +prompt('Enter b');
(numA <= 1 && numB >= 3) ? 'Условия выполнены' : 'Условия не выполнены';

let test = true;
test ? console.log('+++') : console.log('---');

let day = 15;
let decade = '';

if (day >= 1 && day <= 10) {
    decade = "первую";
} else if (day >= 11 && day <= 20) {
    decade = "вторую";
} else if (day >= 21 && day <= 31) {
    decade = "третью";
} else {
    decade = "некорректное число дня";
}

console.log('Число попадает в ' + decade + ' декаду месяца.');

let num = Number(prompt("Введите число"));

if (typeof num === 'number' && !isNaN(num)) {
    console.log(
        `В числе ${num} количество 
        сотен: ${Math.floor((num % 1000) / 100)}, 
        десятков: ${Math.floor((num % 100) / 10)}, 
        единиц: ${num % 10}`);
} else {
    console.log("Это не число!")
}

// Семинар
/* let userAge = prompt('Enter your age:');
let userName = prompt('Enter you name:');
console.log("Age" + userAge, "Name" + userName);

let numA = 13;
let numB = 5;
console.log(numA % numB);

let numC;
let numD = null;

console.log(numC, numD); // undefined

console.log('abc' * 3); // NaN

console.log(1 / 0); // infinity
console.log(-1 / 0); // -infinity

console.log('3' * '2'); // 6

"use strict"
a = 13;
console.log(a);

let numE = '3.4';
let numF = '2.5';
console.log(+numE + +numF);
console.log(Number(numE) + Number(numF));
console.log(parseInt(numE) + parseInt(numF));

let numG = prompt('a = ');
let numH = prompt('b = ');

console.log(Number(numG) + Number(numH));
console.log(Number(numG) - Number(numH));
console.log(Number(numG) / Number(numH));
console.log(Number(numG) * Number(numH));
console.log(Number(numG) % Number(numH));

let input = Number(prompt('Enter number:'));

if (typeof input === 'number' && !isNaN(input)) {
    if (input > 5) {
        console.log("Число больше 5")
    } else if (input < 5) {
        console.log("Число меньше 5")
    } else {
        console.log("Число равно 5")
    }
} else {
    console.log("Это не число!")
}

let booleanValue = true;
let numericalValue = 354;
let stringValue = "This is a String";
let stringObject = new String("This is a String Object");
console.log(typeof booleanValue) // displays "boolean"
console.log(typeof numericalValue) // displays "number"
console.log(typeof stringValue) // displays "string"
console.log(typeof stringObject) // displays "object"

let test1 = +prompt('Первое число');
let test2 = +prompt('Второе число');

if (test1 === test2) {
    console.log("value are equal")
}

(test1 > test2) ? test2 : test1;

let test3 = +prompt('Число');
(test3 > 0 ?? test3 < 15) ? 'Условия выполнены' : 'Условия не выполнены'; */