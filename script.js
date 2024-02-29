"use strict"

// Задание 1
const divBlock = document.querySelector('div.block');
const divItem = document.createElement('div');

divItem.setAttribute('class', 'block__item');
divItem.setAttribute('class', divItem.classlist + ' block__item_1'); // Перезаписывает
divItem.textContent = 'Элемент внутри';

divBlock.appendChild(divItem);

// Задание 2
const pText = document.querySelector('div.elem div.content p.text'); // Можно без >
console.log(pText.previousElementSibling);
console.log(pText.previousSibling); // text

console.log(pText.parentElement);

console.log(pText.parentElement.previousElementSibling.src);

console.log(pText.parentElement.parentElement);

// Задание 3
const subtitle = document.querySelector('div.info h2.subtitle');
let parent = subtitle.parentElement;

while (parent) { // Пока не упреться в null, т.к. не вернет саму DOM
    console.log(parent);
    parent = parent.parentElement;
}

// Задание 4
const btnSubmit = document.querySelector('form button.btn');
const formInput = document.querySelectorAll('form input');

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    const errorMessage = document.querySelector('form #error-message');

    if (errorMessage) {
        errorMessage.remove();
    }

    formInput.forEach((element) => {
        if (element.value === '') {
            if (!errorMessage) {
                const error = document.createElement('h2');
                error.textContent = 'Вы не заполнили поле ввода';
                error.style.border = '1px solid red';
                error.setAttribute('id', 'error-message');
                element.parentElement.appendChild(error);
            }
        }
    })
})

// Домашка
const dropDown = document.querySelectorAll('div.dropdown div.menu a.dropdown-item');
dropDown.forEach((element) => {
    element.classList.add('super-dropdown')
});

const btnEl = document.querySelector('div.dropdown button.btn');
if (btnEl.classList.contains('btn-secondary')) {
    btnEl.classList.remove('btn-secondary');
} else {
    btnEl.classList.add('btn-secondary');
}

const menuEl = document.querySelector('div.dropdown div.menu');
if (menuEl.classList.contains('dropdown-menu')) {
    menuEl.classList.remove("dropdown-menu");
}

const dropdownEl = document.querySelector('div.dropdown');
dropdownEl.insertAdjacentHTML('afterend', '<a href="#">link</a>');

const menuButtonEl = document.querySelector('div.dropdown button#dropdownMenuButton');
menuButtonEl.setAttribute('id', 'superDropdown');
menuButtonEl.id = 'superDropdown'

const targetElement = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
targetElement.dataset.dd = '3';

const toggleEl = document.querySelector('div.dropdown button.dropdown-toggle');
toggleEl.removeAttribute('type');
