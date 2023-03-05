import { Notify } from 'notiflix/build/notiflix-notify-aio';

const alertStyle = {
  position: 'center-center',
  distance: '30px',
  borderRadius: '30px',
  timeout: 7000,
  clickToClose: true,
  cssAnimationStyle: 'from-left',
}

const body = document.querySelector('body')
body.style.backgroundColor = '#0af7ff'

const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('form.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}


refs.form.addEventListener('click' , startPromise );

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    },delay)
  });

}


function startPromise(e){
e.preventDefault();

let inputDelay = Number(refs.delay.value);
let step = Number(refs.step.value);
let amount = Number(refs.amount.value);

// for (let i = 1; i <= amount; i += 1) {                 Не зрозумію, що зробити , для того щоб правильно виконувалась позиція!!!!!!!!
//  let inputProm = inputDelay + step * i;

 for (let i = 0; i < amount; i += 1) {
  let inputProm = inputDelay + step * i;


  
createPromise(i, inputProm)
.then(({position, delay}) =>  {
  Notify.success(
    `✅ Fulfilled promise ${position} in ${delay}ms`, alertStyle
  )
  // window.alert(`✅ Fulfilled promise ${position} in ${delay}ms`)
})
.catch(({position, delay})=>{
  Notify.failure(
    `❌ Rejected promise ${position} in ${delay}ms`, alertStyle
  )
  // window.alert(`❌ Rejected promise ${position} in ${delay}ms`)
})

}
}


