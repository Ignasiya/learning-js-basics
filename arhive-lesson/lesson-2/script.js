let userAnswer = prompt('Зимой и летом одним цветом');

if (userAnswer === '') {
    alert('Пустое значение');
} else if (userAnswer === 'елка') {
    alert('Молодец');
} else {
    alert('Не угадал');
}

alert((2 > 3) ? 'скидки' : 'нет скидок');

(userAnswer.toLowerCase() === 'елка') ? alert('Молодец') : alert('Не угадал');