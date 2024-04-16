// Домашка 
const cube = num => {
    let cube = Math.pow(num, 3);
    // let cube = num * num * num;
    return cube;
}

function pow(num, pow) {
    if (pow == 1) {
        return num;
    } else {
        return num * (num, pow - 1)
    }
}

let salary = () => {
    let input = prompt('Введите число:');

    if (isNaN(input)) {
        return 'Значение задано не верно'
    }

    let result = parseFloat(input) * 0.87;
    return `Размер заработной платы за вычетом налогов равен ${result}`;
}

let max = () => {
    let num1 = prompt('Введите первое число:');
    let num2 = prompt('Введите второе число:');
    let num3 = prompt('Введите третье число:');

    //let max = Math.max(num1, num2, num3);
    let max = null;

    if (num1 >= num2 && num1 >= num3) {
        max = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        max = num2;
    } else {
        max = num3;
    }
    console.log(`Максимальное значение: ${max}`);
}

let summ = (num1, num2) => num1 + num2;

let diff = (num1, num2) => {
    if (num1 === num2) return 0;
    else if (num1 > num2) return num1 - num2;
    else num2 - num1
}

let mult = (num1, num2) => num1 * num2;

let div = (num1, num2) => num2 !== 0 ? num1 / num2 : 0;


// Семинар
const helloUser = function (name, lastname, age) {
    return `Привет ${name} ${lastname} с возрастом ${age}`;
}

const pow = num => num * num;

const posOrNeg = num => console.log(num >= 0 ? '+++' : '---')

const sum = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

console.log(sum(1, 2, 3));

function func(num = 5) {
    console.log(num * num);
}

func(2); // 4
func(3); // 9
func(); // NaN

const funcSqrt = function (num) {
    if (num >= 0) {
        return Math.sqrt(num);
    } else {
        throw new Error('Отрицательное число');
    }
}

console.log(funcSqrt(3) + funcSqrt(4));

let numMin = (num1, num2) => {
    return num1 > num2 ? num2 : num1
}

let week = day => {
    let result = null;
    switch (day) {
        case 1:
            result = 'Понедельник';
            break;
        case 2:
            result = 'Вторник';
            break;
        case 3:
            result = 'Среда';
            break;
        case 4:
            result = 'Четверг';
            break;
        case 5:
            result = 'Пятница';
            break;
        case 6:
            result = 'Суббота';
            break;
        case 7:
            result = 'Воскресенье';
            break;
        default:
            result = 'Нет такого дня недели';
    }
    return result;
}

let helloTime = name => {
    let time = new Date().getHours();
    if (time >= 6 && time < 12)
        return `Доброе утро ${name}`;
    else if (time >= 12 && time < 17) {
        return `Добрый день ${name}`;
    }
    else if (time >= 17 && time < 23) {
        return `Добрый вечер ${name}`;
    }
    else {
        return `Доброй ночи ${name}`;
    }
}