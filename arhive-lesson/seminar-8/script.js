"use strict";
// Домашка
/*1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.*/
document.addEventListener('DOMContentLoaded', () => {
    console.log('Все теги прогрузились');
});

/*2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.*/
window.onload = () => {
    console.log('Страница загрузилась');
};

/*3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование.*/
const parent = document.querySelector('.container');

parent.addEventListener('click', (e) => {
    if (e.target.classList.contains('super_element')) {
        console.log(`Класс "super_element" присутствует в элементе "${e.target.tagName.toLowerCase()}".`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${e.target.tagName.toLowerCase()}".`);
    }
});

/*4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."*/
const textarea = document.querySelector('textarea');

textarea.addEventListener('mouseenter', () => {
    console.log('Вы навели на textarea.');
});

/*5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.*/
const ulEl = document.querySelector('ul');

ulEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.textContent);
    }
})

/*6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

Это происходит из-за всплытия событий в DOM. Когда мы кликаем на кнопку в списке, сначала срабатывает обработчик события клика для этой кнопки (задание 5). Затем событие продолжает всплывать по иерархии DOM до super_element и срабатывает его обработчик события клика (задание 3).*/

/*7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.*/
const listItems = document.querySelectorAll('li');

for (let i = 0; i < listItems.length; i++) {
    if ((i + 1) % 2 === 0) {
        listItems[i].style.backgroundColor = 'yellow';
    }
}

// Семинар: Задание 1
const btnEL = document.querySelector('.btn');

window.onload = () => {
    console.log('Страница загрузилась');
}

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Страница загрузилась');
}); // изображения, стили и скрипты, могут быть еще не загружены

window.addEventListener('load', function (e) {
    console.log('Страница загрузилась');
}); // полная загузка страницы

btnEL.onclick = () => {
    console.log('Событие onclick');
};

btnEL.addEventListener('click', (e) => {
    console.log('Событие addEventListener');
});

// Задание 2
const btnEls = document.querySelectorAll('.btn-2');
const btnEl4 = document.querySelector('.btn-4');
const btnEl5 = document.querySelector('.btn-5');

btnEls.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log(event.target.innerHTML);
    });
});

let count = 0;

const counter = () => {
    console.log(`На кнопку нажали ${++count} раз`);
}

btnEl4.addEventListener('click', counter)

btnEl5.addEventListener('click', (e) => {
    btnEl5.textContent = 'Вы нажали на эту кнопку';
});

// Задание 3
const titleBtnEl = document.querySelector('.titleH1');
const deleteTitleBtnEl = document.querySelector('.deleteTitleH1');
const overBtnEl = document.querySelector('.overBtn');

titleBtnEl.addEventListener('click', (e) => {
    const title = document.createElement('h1');
    title.innerText = 'Новый заголовок';
    titleBtnEl.after(title);
});

deleteTitleBtnEl.addEventListener('click', (e) => {
    const titles = document.querySelectorAll('h1');
    if (titles.length > 0) {
        titles[titles.length - 1].remove();
    }
});

overBtnEl.addEventListener('mouseover', (e) => {
    console.log('Вы навели на данную кнопку');
});

overBtnEl.addEventListener('mouseleave', (e) => {
    console.log('Наведения на кнопку больше нет');
});

// Задание 4
const addBtnEl = document.querySelector('.addBtn');
const menuEl = document.querySelector('.menu');
const removeBtnEl = document.querySelector('.removeBtn');
const classBtnEl = document.querySelector('.addClassBtn');

let counetEl = 0;

addBtnEl.addEventListener('click', (e) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list');
    li.innerText = 'новый элемент списка' + ++counetEl;
    menuEl.appendChild(li);
    li.addEventListener('click', (e) => {
        e.target.remove();
    });
});

removeBtnEl.addEventListener('click', (e) => {
    const firstLi = menuEl.querySelector('li');
    if (firstLi) {
        menuEl.removeChild(firstLi);
    }
})

menuEl.addEventListener('click', (e) => {
    console.log(e.target);
});

classBtnEl.addEventListener('click', (e) => {
    e.target.setAttribute('class', 'click')
})