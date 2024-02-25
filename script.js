const heading = document.querySelector('.title');
const text = document.querySelectorAll('text');

heading.textContent = 'Заголовок из js';

const heading2 = document.getElementById('heading');
const heading3 = document.querySelector('#heading');

const listEls = document.getElementsByClassName('list');
const listElsQs = document.querySelectorAll('.list');

const getTag = document.getElementsByTagName('li');

text.forEach(element => {
    console.log(element);
});

const headingEl = document.createElement('h3');
headingEl.textContent = 'Мой первый заголовок';
heading.appendChild(headingEl);

const heading4 = document.querySelector('#heading');
heading4.remove();

const buttonEl = document.querySelector('.btn');
const contentEl = document.querySelector('.content');

const textEl = document.createElement('p');
textEl.textContent = 'Тут любой текст и его много';

buttonEl.onclick = () => {
    buttonEl.textContent = 'Товар в корзине';
    contentEl.appendChild(textEl);
}

const imgEl = document.querySelector('.img');
imgEl.onclick = () => {
    imgEl.src = 'newphoto.jpg';
}