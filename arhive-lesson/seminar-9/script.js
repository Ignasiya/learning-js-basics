// Домашка

/*1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.*/

const HwInput = document.querySelector('div.homework #from')
const HwSpan = document.querySelector('div.homework span')
console.log(HwInput, HwSpan);
HwInput.addEventListener('input', (e) => {
    HwSpan.textContent = event.target.value;
})

/* 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.*/

const HwMessageBtn = document.querySelector('div.homework button.messageBtn')
const HwMessage = document.querySelector('div.homework div.message')

HwMessageBtn.addEventListener('click', function (e) {
    HwMessage.classList = ("animate_animated " + "animate_fadeInLeftBig")
});

/*3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.*/

const form = document.querySelector('#myForm');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    (input1.value === '') ? input1.classList.add('error') : input1.classList.remove('error');

    (input2.value === '') ? input2.classList.add('error') : input2.classList.remove('error');

    if (input1.value !== '' && input2.value !== '') {
        form.submit();
    }
});

input1.addEventListener('input', function () {
    if (input1.value === '') {
        input1.classList.add('error');
    } else {
        input1.classList.remove('error');
    }
});

input2.addEventListener('change', function () {
    if (input2.value === '') {
        input2.classList.add('error');
        input2.classList.remove('error');
    }
});

// Задание 1
const root = document.querySelector('.content');

const formEl = document.createElement('form');
formEl.setAttribute('action', '#');

const checkBoxEl = document.createElement('input');
checkBoxEl.setAttribute('type', 'checkbox');
checkBoxEl.id = 'checkbox';

const labelEl = document.createElement('label');
labelEl.setAttribute('for', 'checkbox');
labelEl.textContent = 'Согласен с условиями';

const btnEl = document.createElement('button');
btnEl.type = 'submit';
btnEl.textContent = 'Отправить';
btnEl.setAttribute('class', 'submit');

formEl.appendChild(checkBoxEl);
formEl.appendChild(labelEl);
formEl.appendChild(btnEl);

root.appendChild(formEl);

btnEl.addEventListener('click', (e) => {
    if (!checkBoxEl.checked) {
        e.preventDefault();

        const error = formEl.querySelector('.error');
        if (!error) {
            const errorEl = document.createElement('div');
            errorEl.classList.add('error');
            errorEl.textContent = 'Необходимо согласиться с условиями';
            labelEl.after(errorEl);
        }
    }
});

// Задание 2
const radioTea = document.createElement('input');
radioTea.classList.add('radio-tea')
radioTea.type = 'radio';
radioTea.name = 'beverage';
radioTea.value = 'tea';

const radioCoffee = document.createElement('input');
radioCoffee.classList.add('radio-coffee')
radioCoffee.type = 'radio';
radioCoffee.name = 'beverage';
radioCoffee.value = 'coffee';

const labelTea = document.createTextNode('Чай');
const labelCoffee = document.createTextNode('Кофе');

const formRadioEl = document.createElement('form');
formRadioEl.setAttribute('action', '#');

root.appendChild(formRadioEl);
formRadioEl.appendChild(radioTea);
formRadioEl.appendChild(labelTea);
formRadioEl.appendChild(radioCoffee);
formRadioEl.appendChild(labelCoffee);

const message = document.createElement('p');
formRadioEl.appendChild(message);

const btnRadioEl = document.createElement('button');
btnRadioEl.type = 'submit';
btnRadioEl.textContent = 'Отправить';
btnRadioEl.setAttribute('class', 'submit');
formRadioEl.appendChild(btnRadioEl);

formRadioEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const selected = document.querySelector('input[name="beverage"]:checked');

    if (selected) {
        const beverageValue = selected.value;

        if (beverageValue === "tea") {
            message.textContent = "Чай закончился";
        } else if (beverageValue === "coffee") {
            message.textContent = "Кофе закончился";
        }
    }
});

// Задание 3
const formPassEl = document.createElement('form');
formRadioEl.setAttribute('action', '#');

const inputPassEL = document.createElement('input');
inputPassEL.type = 'password';

const btnPassEl = document.createElement('button');
btnPassEl.type = 'submit';
btnPassEl.textContent = 'Отправить';

formPassEl.appendChild(inputPassEL);
formPassEl.appendChild(btnPassEl);
root.append(formPassEl);

inputPassEL.addEventListener('input', (e) => {
    const input = event.target.value.toLocaleLowerCase();
    if (input === 'password') {
        inputPassEL.style.border = '4px solid green'
    } else {
        inputPassEL.style.border = '4px solid red'
    }
})

// Задание 4
const inputEl = document.createElement('input');
inputEl.type = 'text'

const titleEl = document.createElement('h1');
titleEl.textContent = 'Заголовок';

root.appendChild(inputEl);
root.appendChild(titleEl);

inputEl.addEventListener('keyup', (e) => {
    titleEl.textContent = event.target.value;
})