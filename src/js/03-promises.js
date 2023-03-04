import { Notify } from 'notiflix/build/notiflix-notify-aio';

const alertStyle = {
  position: 'center-center',
  distance: '30px',
  borderRadius: '30px',
  timeout: 7000,
  clickToClose: true,
  cssAnimationStyle: 'from-left',
}

const create = document.querySelector('button')
console.log(create)
const form = document.querySelector('.form.form')
console.log(form)
const delay = document.querySelector('[name="delay"]')
console.log(delay)
const step = document.querySelector('[name="step"]')
console.log(step);
const amount = document.querySelector('[name="amount"]')
console.log(amount);
const body = document.querySelector('body')
body.style.backgroundColor = '#0af7ff'



form.addEventListener('click' , startPromise );

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

let inputDelay = Number(delay.value);
let inputStep = Number(step.value);
let inputAmount = Number(amount.value);

for (let i = 0; i < inputAmount; i += 1) {
  inputDelay += inputStep * i;


  
createPromise(i, inputDelay).then(({position, delay}) =>  {
  Notify.success(
    `✅ Fulfilled promise ${position} in ${delay}ms`, alertStyle
  )
})
.catch(({position, delay})=>{
  Notify.failure(
    `❌ Rejected promise ${position} in ${delay}ms`, alertStyle
  )
})

}
}


