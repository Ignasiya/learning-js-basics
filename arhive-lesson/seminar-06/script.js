// СЕМИНАР
const first = document.querySelector('div#block > p');
console.log(first.innerHTML); // Для всего содержимого
console.log(first.textContent); // Для текста

// и точнее и быстрее работает
const www = document.querySelector("div#block > p.www");

const link = document.querySelector("a.link");
link.textContent = 'link text js';
link.href = "https://developer.mozilla.org/ru/";

document.querySelector("img.photo").src = 'https://sport-sbor.ru/wp-content/uploads/2020/07/s1200.jpg';

let newP = document.createElement("p");
newP.textContent = "Новый тестовый элемент";
const content = document.querySelector("div.content");
content.appendChild(newP);
newP.remove();
newP = null; // не будет работать

const button = document.createElement("button");
content.appendChild(button);
button.textContent = "Отправить";
let counter = 0;
button.addEventListener("click", (e) => {
    counter++;
    e.target.textContent = "Текст отправлен";
});

// ДОМАШКА
const superlink = document.getElementById("super_link");
console.log(superlink);

const cardlink = document.querySelectorAll("a.card-link");
cardlink.forEach((element) => {
    element.textContent = 'ссылка'
});

const cardlinkBody = document.querySelectorAll(".card-body a.card-link");
console.log(cardlinkBody);

const dataNumber = document.querySelectorAll('[data-number]');
const elementWithNumber50 = Array.from(dataNumber).find(el => el.getAttribute('data-number') === '50');
console.log(elementWithNumber50);

console.log(document.querySelector('title').innerHTML);

const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentNode);

const create = document.createElement("div");
create.innerHTML = 'Привет';
document.querySelector('.card').prepend(create);

const h6 = document.querySelectorAll("h6");
h6.forEach((element) => {
    element.remove();
});