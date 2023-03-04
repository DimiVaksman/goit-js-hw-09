import { Notify } from 'notiflix/build/notiflix-notify-aio';






// const makeOrder = dish => {
//   const DELAY = 1000;



// return new Promise((resolve,reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
// if(passed){
//   resolve('hier euere Gericht')
// } else{
//   reject('gibts keine Tomaten')
// }
//     }, DELAY)
//   })

// }

// makeOrder('Brot').then(onMakeOrderSucces).catch(onMakeOrderError);

// function onMakeOrderSucces(result)  {
//   console.log('onMakeOrderSucces')
//   console.log(result)
// }

// function onMakeOrderError(error)  {
//   console.log('onMakeOrderError')
//   console.log(error)
// }


// const makeOrder = dish => {
// return Promise.resolve('hier euere Gericht')

// }

// makeOrder('Brot').then(onMakeOrderSucces);

// function onMakeOrderSucces(result)  {
//   console.log('onMakeOrderSucces')
//   console.log(result)
// }

// function onMakeOrderError(error)  {
//   console.log('onMakeOrderError')
//   console.log(error)
// }


  // fetch('https://pokeapi.co/api/v2/pokemon/1')
  // .then(r => r.json())
  // .then(pokemon => {
  //   console.log(pokemon)
  // })
  // .catch( error => {
  //   console.log('das ist fehler')
  //   console.log(error)
  // })

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

for (let i = 1; i <= inputAmount; i += 1) {
  inputDelay += inputStep;


  
createPromise(i, inputDelay).then(({position, delay}) =>  {
  Notify.success(
    `✅ Fulfilled promise ${position} in ${delay}ms`
  )
})
.catch(({position, delay})=>{
  Notify.failure(
    `❌ Rejected promise ${position} in ${delay}ms`
  )
})
e.currentTarget.reset()
}
}


