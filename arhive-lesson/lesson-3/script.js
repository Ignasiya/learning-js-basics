let count = 5;

function counter() {
    return count++;
}

counter();
console.log(count);

let age = Number(prompt('Сколько вам лет'));

function upAge() {
    return age + 5; // не сохранил потому что не ++
}

upAge();
console.log(`Через 5 лет Вам будет ${age}`);

const lvlUpAge = () => age + 5;
console.log(`Через 5 лет Вам будет ${lvlUpAge()}`);

const salary = (money) => {
    money *= 0.87; // money - money * 0.13
    return money * 0.75;
}

const userMoney = Number(prompt('Сколько иы зарабатываешь?'))

console.log(salary(userMoney));