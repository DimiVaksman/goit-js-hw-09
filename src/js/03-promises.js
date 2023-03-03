// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

////////////////////////////////////////////////////




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


  const a = 5;

  console.log(a)