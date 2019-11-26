const endTime = new Date('2020-05-05 06:45:00').getTime();

const sDay = document.querySelector('span.d');
const sHour = document.querySelector('span.h');
const sMinute = document.querySelector('span.m');
const sSecond = document.querySelector('span.s');
 
setInterval(() => {
  const nowTime = new Date().getTime();
  // const time = Math.floor((endTime - nowTime)/1000);
  
  
  const time = endTime - nowTime;
  const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
  let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 *60)) % 24);
  hours = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  sDay.textContent = days;
  sHour.textContent = hours;
  sMinute.textContent = minutes;
  sSecond.textContent = seconds;
}, 1000);


