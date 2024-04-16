let count = 0;
while (count < 3) {
    console.log('Hello');
    count++;
}

for (let i = 0; i < 3; i++) {
    console.log('Hello');
}

for (let j = 0; j <= 2; j++) {
    console.log(j);
}

for (; ;) {
    // infinity    
}

let pass;
do {
    if (count >= 3) {
        alert('Пароль не верный!');
    }
    pass = Number(prompt('Введите пароль: '));
    count++;

} while (pass !== '123');

const arr = ['hello', false, null]; // верный
arr = 5;
arr.push(1);
console.log(arr[0]);
console.log(arr.length);
console.log(arr[arr.length - 1]);

let arrNew = [];
arrNew = 6;

const user = [];

user.push(prompt('Ваше имя'), Number(prompt('Ваш возраст')));

const numbers = [2, 3, 5, 9, 19];
alert(`Запомни цифры ${numbers}`)

console.log(numbers.pop());

const word = 'example';
const arrWord = word.split('');
arrWord.push(arrWord.pop().toUpperCase());
arrWord.join('');

const nums = [5, 2, 3, 7, 19, 7, 13, 3];

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element >= 5) {
        console.log(element);
    } else {
        continue;
    }
}

console.log(nums.indexOf('3'));

const arrAnswers = ['елка', 'ёлка', 'ель'];
const userAnswer = prompt('Зимой и летом одним цветом')

for (let i = 0; i < arrAnswers.length; i++) {
    const element = arrAnswers[i];
    if (element === userAnswer) {
        alert('Молодец');
        break;
    }
}