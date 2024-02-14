// Домашняя работа
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log('0 - это ноль');
    } else if (i % 2 === 1) {
        console.log(`${i} - это нечетное число`);
    } else {
        console.log(`${i} - это четное число`);
    }
}

let newArr = [1, 2, 3, 4, 5, 6, 7];
newArr.splice(3, 2);
console.log(newArr);

newArr = [];
for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 10);
    newArr.push(randomNum);
}

console.log(newArr);

const sum = newArr.reduce((acc, curr) => acc + curr, 0);
console.log("Сумма элементов массива: ", sum);

const min = Math.min(...newArr);
console.log("Минимальное число в массиве: ", min);

const has3 = newArr.includes(3);
console.log("В массиве есть число 3: ", has3);

for (let i = 1; i <= 20; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "x";
    }
    console.log(row);
}


// Семинар
let arr = [1, 2, 3];
arr.forEach(element => {
    console.log(element);
})
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

const arr2 = arr.map(element => element + 1);
console.log(arr2);

console.log(arr.length);

arr = ['a', 'b', 'c'];
console.log(arr);

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr);

arr.push(4, 5);
console.log(arr);

arr.splice(1, 2);
console.log(arr.length);

arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr.length);

for (let i = 11; i <= 33; i++) {
    console.log(i);
}

for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

for (let i = 100; i >= 0; i--) {
    console.log(i);
}

let num = Number(prompt("Введите число:"))
let count = 0
while (num <= 1000) {
    num *= 3
    count++
}
console.log(`Количество итераций ${count}`);

arr = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr.length; i++) {
    arr[i] > 3 && arr[i] < 10 ? console.log(arr[i]) : null
}

for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

arr = [2, 5, 9, 3, 1, 4];
console.log(arr.reduce((acc, cur) => acc + cur, 0));

let str = '-'
for (let i = 1; i <= 9; i++) {
    str += `${i}-`;
}
console.log(str);

arr = [2, 5, 9, 0, 3, 1, 4];
let index = 0;
while (arr[index] !== 0 && arr.length > index) {
    console.log(arr[index]);
    index++;
}

arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 10);
    if (arr[i] % 2 === 0) {
        console.log(`${arr[i]}^2 = `, Math.pow(arr[i], 2));
    } else if (arr[i] % 3 === 0) {
        console.log(`${arr[i]}^3 = `, Math.pow(arr[i], 3));
    } else {
        console.log(`${arr[i]} = `, arr[i]);
    }
}
console.log(arr);

arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let result = arr.filter(x => x === 3)
console.log(result.length);

arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);