
import anime from 'animejs/lib/anime.es.js';

anime({
    targets: 'div',
    translateX: 50,
    rotateZ: '1turn',
    duration: 3000,
  });

const buttonStart = document.querySelector('[data-start]');
console.log(buttonStart);
const buttonStop = document.querySelector('[data-stop]');
console.log(buttonStop)
const body = document.querySelector('body');
console.log(body)

intervalId = null;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
const onClickStart = () => {
    buttonStart.disabled = true;
    buttonStop.disabled = false; 

    buttonStart.style.color = 'grey';
    buttonStop.style.color = 'yellow';
    // buttonStart.hidden = true;
    // buttonStop.hidden = false;


    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
      }, 1000);


    };
const onClickStop = () => {
    clearInterval(intervalId);
// buttonStart.hidden = false;
// buttonStop.hidden = true;
buttonStart.disabled = false;
buttonStop.disabled = true;
buttonStart.style.color = 'yellow';
buttonStop.style.color = 'grey'
}

buttonStart.addEventListener('click' , onClickStart);
buttonStop.addEventListener('click' , onClickStop);

