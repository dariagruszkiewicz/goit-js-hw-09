const formEl = document.querySelector('.form');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      shouldResolve
        ? resolve({ position, delay })
        : reject({ position, delay });
    }, delay);
  });
};

const onSuccess = ({ position, delay }) => {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

const onFail = ({ position, delay }) => {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
};

const createPromises = ev => {
  ev.preventDefault();

  let {
    elements: { delay, step, amount },
  } = ev.currentTarget;

  let firstDelay = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {
    if (i > 1) {
      firstDelay += Number(step.value);
    }
    createPromise(i, firstDelay).then(onSuccess).catch(onFail);
  }
};

formEl.addEventListener('submit', createPromises);
