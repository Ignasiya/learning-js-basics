const videoEl = document.createElement('video');
videoEl.classList.add('video');
videoEl.setAttribute('src', 'media/video.mp4');
videoEl.setAttribute('preload', 'metadata');

const root = document.querySelector('.root-media');
root.appendChild(videoEl);

const panelEl = document.createElement('div');
panelEl.classList.add('panel');
const playEl = document.createElement('div');
const pauseEl = document.createElement('div');
const stopEl = document.createElement('div');
playEl.classList.add('play');
stopEl.classList.add('stop');
pauseEl.classList.add('pause');

playEl.addEventListener('click', e => {
    videoEl.play();
    playEl.style.display = 'none';
    pauseEl.style.display = 'block';
})

pauseEl.addEventListener('click', e => {
    videoEl.pause();
    playEl.style.display = 'block';
    pauseEl.style.display = 'none';
})

stopEl.addEventListener('click', e => {
    videoEl.pause();
    videoEl.currentTime = 0;
    playEl.style.display = 'block';
    pauseEl.style.display = 'none';
})

const rangeEl = document.createElement('input');
const currentTimeEl = document.createElement('p');
currentTimeEl.innerHTML = '0.00'
rangeEl.classList.add('duration');
rangeEl.type = 'range';
rangeEl.min = 0;
rangeEl.max = 100;
rangeEl.value = 0;

rangeEl.addEventListener('change', e => {
    videoEl.currentTime = e.target.value / 100 * videoEl.duration;
})

videoEl.addEventListener('timeupdate', e => {
    rangeEl.value = Math.round(videoEl.currentTime / videoEl.duration * 100);
    currentTimeEl.innerHTML = (videoEl.currentTime / 100).toFixed(2);
})

const volumeEl = document.createElement('input');
volumeEl.classList.add('volume');
volumeEl.type = 'range';
volumeEl.min = 0;
volumeEl.max = 100;
volumeEl.value = 0;

videoEl.addEventListener('loadeddata', e => {
    volumeEl.value = videoEl.volume * 100;
})

volumeEl.addEventListener('change', e => {
    videoEl.volume = e.target.value / 100;
});

root.appendChild(panelEl);
panelEl.appendChild(playEl);
panelEl.appendChild(pauseEl);
panelEl.appendChild(stopEl);
panelEl.appendChild(currentTimeEl);
panelEl.appendChild(rangeEl);
panelEl.appendChild(volumeEl);