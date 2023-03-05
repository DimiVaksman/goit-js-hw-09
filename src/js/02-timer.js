import { set } from "animejs";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';



const startBtn = document.querySelector('[data-start]');
console.log(startBtn) ;
startBtn.disabled = true;

const calnderItem = document.querySelector('#datetime-picker')
console.log(calnderItem)
const refs = {
    days : document.querySelector('[data-days]'),
    hours : document.querySelector('[data-hours]'),
    minutes : document.querySelector('[data-minutes]'),
    seconds : document.querySelector('[data-seconds]'),
    timer : document.querySelector('.timer'),

}



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0].getTime() < Date.now()){
            // window.alert("Please choose a date in the future");
           Report.warning('Error', 'Please choose a date in the future', 'Yes, sir!');
        }
        else{
            selectedDate = selectedDates[0].getTime();
            startBtn.disabled = false;
        }
    },
  };




flatpickr(calnderItem, options);




function pad (value) {
    return String(value).padStart(2,0)
}

  const timer = {
    intervalId: null,
    start(){

            intervalId = setInterval(() => {
            const currentTime = Date.now()
            const deltaTime = selectedDate - currentTime;
            const time = convertMs(deltaTime);
            upDateTimer(time);
            calnderItem.disabled = true;
            startBtn.disabled = true;
            if(deltaTime <= 1000){
            stop();
            }

        }, 1000);
    }

  }
function stop() {
clearInterval(intervalId);
calnderItem.disabled = false;
return
}

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
function upDateTimer({ days, hours, minutes, seconds }){
refs.days.textContent = `${days}`;
refs.hours.textContent = `${hours}`;
refs.minutes.textContent = `${minutes}`;
refs.seconds.textContent = `${seconds}`;
}

  startBtn.addEventListener('click', timer.start); 