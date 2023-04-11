import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const buttonEl = document.querySelector('button');
const timetEl = document.querySelector('timer');

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
        const timerId = setInterval();

        // console.log(convertMs(new Date(selectedDates)));
      });
    }
  },
});
