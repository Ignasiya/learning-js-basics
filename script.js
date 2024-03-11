const data = JSON.parse(dataInfo);
const container = document.querySelector('div.container');
const homework = document.querySelector('div.homework');

data.forEach(element => {
    const divEl = document.createElement('div');
    const titleEl = document.createElement('h1');
    const textEl = document.createElement('p');
    const imgEl = document.createElement('img');

    titleEl.textContent = element.heading;
    textEl.textContent = element.text;
    imgEl.src = element.url;
    imgEl.style.width = element.width + 'px';
    imgEl.style.height = element.height + 'px';

    container.appendChild(divEl)
    divEl.appendChild(imgEl);
    divEl.appendChild(titleEl);
    divEl.appendChild(textEl);
    divEl.classList.add(element.class);
});

function displayData(data) {

    data.forEach(element => {
        const divEl = document.createElement('div');
        const capsuleEl = document.createElement('h1');
        const statusEl = document.createElement('p');
        const launch = document.createElement('p');

        capsuleEl.textContent = element.capsule_serial;
        statusEl.textContent = element.status;
        launch.textContent = element.original_launch;

        homework.appendChild(divEl)
        divEl.appendChild(capsuleEl);
        divEl.appendChild(statusEl);
        divEl.appendChild(launch);
        divEl.classList.add('news-container');
    });
}