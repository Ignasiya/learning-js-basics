// Домашка
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}
for (const key in numbers) {
    if (Object.hasOwnProperty.call(numbers, key)) {
        const element = numbers[key];
        console.log(element);
    }
}

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach((product) => {
    product.price = product.price * 0.85;
});
console.log(products);


const productsArray = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

console.log(productsArray.filter((product) => {
    return product.hasOwnProperty('photos') && product.photos.length > 0;
}));

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const result = en.reduce((obj, key, index) => {
    obj[key] = ru[index];
    return obj;
}, {});

console.log(result);

// Семинар
const week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}
console.log(week[1]);

const user = {
    name: 'Иван',
    surname: 'Иванов',
    age: 20
}
console.log(user.surname + '-' + user.name + '-' + user.age);

user.middleName = prompt('Введите Отчество');
delete user.surname;
console.log(user);

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const daysWeek = {};

for (let i = 0; i < arr1.length; i++) {
    daysWeek[arr1[i]] = arr2[i];
}
console.log(daysWeek);

const obj = {
    x: 1,
    y: 2,
    z: 3
};
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        obj[key] = obj[key] ** 2;
    }
}
console.log(obj);

const obj2 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

let sum = 0;

for (const key in obj) {
    if (typeof obj[key] === 'object') {
        for (const innerKey in obj[key]) {
            sum += obj[key][innerKey];
        }
    }
}
console.log(sum);

const riddles = {};
riddles.question = 'Кто милее всех на свете?';
riddles.answer = 'Белоснежка';
riddles.tries = 0;

riddles.askQuestion = function () {
    const userAnswer = prompt(this.question);

    if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
        console.log('Правильно!');
    } else {
        if (this.tries < 2) {
            this.tries++;
            if (this.tries == 1) {
                console.log('Подсказка 1: Ответ начинается с буквы "Б"');
            } else if (this.tries == 2) {
                console.log('Подсказка 2: В имени содержится снег');
            }
            this.askQuestion();
        } else {
            console.log('Вы проиграли');
        }
    }
};

riddles.askQuestion();