import Notiflix, { Notify } from 'notiflix';

let delay = document.querySelector('[name="delay"]');
let step = document.querySelector('[name="step"]');
let amount = document.querySelector('[name="amount"]');
const submit = document.querySelector('.form');

const createPromise = (position, delay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
};

const submitHandler = event => {
  event.preventDefault();
  let targetDelay = Number(delay.value);
  let targetStep = Number(step.value);
  let targetAmount = Number(amount.value);

  for (let i = 1; i <= targetAmount; i++) {
    createPromise(i, targetDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    targetDelay += targetStep;
  }
};

submit.addEventListener('submit', submitHandler);
