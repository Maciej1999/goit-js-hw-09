import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix, { Notify } from 'notiflix';

const start = document.querySelector('[data-start]');
start.disabled = true;
const days = document.querySelector('[data-days]');
const hrs = document.querySelector('[data-hours]');
const mins = document.querySelector('[data-minutes]');
const secs = document.querySelector('[data-seconds]');
const dateContainer = document.querySelectorAll('.field');
const timerContainer = document.querySelector('.timer');
timerContainer.style.display = 'flex';
dateContainer.forEach(div => {
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.marginRight = '10px';
});
let userDate;
let todayDate = new Date();

let options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < todayDate) {
      start.disabled = true;
      Notify.warning('Please choose a date in the future');
    } else if (selectedDates[0] > todayDate) {
      start.disabled = false;
      Notify.success('Waiting for the countdown to start');
      userDate = selectedDates[0].getTime();
    }
  },
};

const countdownOn = () => {
  start.disabled = true;
  Notify.success('Countdown has started');
  const timer = setInterval(() => {
    let endTime = userDate - Date.now();
    let cd = convertMs(endTime);
    if (endTime <= 0) {
      Notify.info("Time's up");
      clearInterval(timer);
    } else {
      clock(cd);
    }
  }, 1000);
};

const fp = flatpickr('input#datetime-picker', options);
start.addEventListener('click', countdownOn);

const addZero = val => {
  return String(val).padStart(2, '0');
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days =
    Math.floor(ms / day) < 10
      ? addZero(Math.floor(ms / day))
      : Math.floor(ms / day);

  const hours = addZero(Math.floor((ms % day) / hour));

  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

const clock = cd => {
  days.textContent = cd.days;
  hrs.textContent = cd.hours;
  mins.textContent = cd.minutes;
  secs.textContent = cd.seconds;
};
