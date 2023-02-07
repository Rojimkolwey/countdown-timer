const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");

const uclWeek = "14 Feb 2023";

function countdown() {
  const UclWeekDate = new Date(uclWeek);
  const currentDate = new Date();
  const totalSeconds = new Date(UclWeekDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysE1.innerHTML = days;
  hoursE1.innerHTML = formatTime(hours);
  minutesE1.innerHTML =formatTime(minutes);
  secondsE1.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// initial call

countdown();
setInterval(countdown, 1000);

