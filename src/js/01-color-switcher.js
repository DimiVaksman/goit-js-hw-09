
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
    intervalId = setInterval(() => {
        console.log('start')
        body.style.backgroundColor = getRandomHexColor();
      }, 1000);


    };
const onClickStop = () => {
    clearInterval(intervalId);
buttonStart.disabled = false;
buttonStop.disabled = true;
console.log('stop')

}

buttonStart.addEventListener('click' , onClickStart);
buttonStop.addEventListener('click' , onClickStop);


