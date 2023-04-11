const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  bodyEl.style.background = getRandomHexColor();
};

btnStart.addEventListener('click', () => {
  timerId = setInterval(changeColor, 1000);
  btnStart.setAttribute('disabled', '');
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStart.removeAttribute('disabled');
});
