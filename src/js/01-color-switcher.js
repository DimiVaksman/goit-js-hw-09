
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
    buttonStart.style.backgroundColor = 'grey';
    buttonStart.style.color = 'black'
    buttonStop.style.backgroundColor = 'blue';
    buttonStop.style.color = 'yellow'
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
buttonStart.style.backgroundColor = 'blue';
buttonStart.style.color = 'yellow';
buttonStop.style.backgroundColor = 'grey';
buttonStop.style.color = 'black'
}

buttonStart.addEventListener('click' , onClickStart);
buttonStop.addEventListener('click' , onClickStop);


