import Notiflix, { Notify } from 'notiflix';

let delay = document.querySelector('[name="delay"]');
let step = document.querySelector('[name="step"]');
let amount = document.querySelector('[name="amount"]');
const submit = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
