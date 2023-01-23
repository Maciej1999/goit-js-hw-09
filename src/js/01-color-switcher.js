const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let timer;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
start.addEventListener('click', () => {
  start.disabled = true;
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});
stop.addEventListener('click', () => {
  start.disabled = false;
  clearInterval(timer);
});
