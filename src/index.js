import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const PROMPT_DELAY = 1000;
let setId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonClick = document.querySelector(`body`);
const buttonStart = document.querySelector(`button[data-action="start"]`);
const buttonStop = document.querySelector(`button[data-action="stop"]`);

buttonClick.addEventListener(`click`, e => {
  if (e.target.dataset.action === `start`) {
    setId = setInterval(() => {
    buttonClick.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
    }, PROMPT_DELAY);
    buttonStart.disabled = true;
  }
  if (e.target.dataset.action === `stop`) {
    clearInterval(setId);
    buttonStart.disabled = false;
  }
});



