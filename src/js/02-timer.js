import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const buttonEl = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let timerId = null;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      buttonEl.setAttribute('disabled', '');
    } else {
      buttonEl.removeAttribute('disabled', '');
      buttonEl.addEventListener('click', () => {
        timerId = setInterval(() => {
          const addLeadingZero = value => String(value).padStart(2, '0');
          const timeToNow = convertMs(new Date(selectedDates) - new Date());
          console.log(timeToNow);
          daysEl.textContent = addLeadingZero(timeToNow.days);
          hoursEl.textContent = addLeadingZero(timeToNow.hours);
          minutesEl.textContent = addLeadingZero(timeToNow.minutes);
          secondsEl.textContent = addLeadingZero(timeToNow.seconds);
          if (
            daysEl.textContent === '00' &&
            hoursEl.textContent === '00' &&
            minutesEl.textContent === '00' &&
            secondsEl.textContent === '00'
          ) {
            clearInterval(timerId);
            window.alert('Hooray!');
          }
        }, 1000);
      });
    }
  },
});
