// clickable button

function copyCoupon(e) {
  let text = e.innerHTML.trim();
  navigator.clipboard.writeText(text);
  e.innerHTML = "Copied!";
  setInterval(() => {
    e.innerHTML = text;
  }, 1000);
}
const setEndDate1 = "Nov 15, 2022 0:0:0";
const setEndDate2 = "Nov 10, 2022 0:0:0";

function startCountDownDate(dateValue) {
  const countDownDate = new Date(dateValue).getTime();
  return countDownDate;
}

function countDownTimer(start, id) {
  const now = new Date().getTime();
  const distance = start - now;
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // add 0 at the beginning if days, hours, minutes, seconds values are less than 10
  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // Output the result in an element with countdown-timer-x"

  document.querySelector("#" + id).innerHTML = `
                    <div id="day" class="box">${days}</div>
                    :
                    <div id="hours" class="box">${hours}</div>
                    :
                    <div id="minutes" class="box">${minutes}</div>
                    :
                    <div id="second" class="box">${seconds}</div>
  
  `;

  if (distance < 0) {
    document.querySelector("#" + id).innerHTML = `
                      <div id="day" class="box red-box">00</div>
                      :
                      <div id="hours" class="box red-box">00</div>
                      :
                      <div id="minutes" class="box red-box">00</div>
                      :
                      <div id="second" class="box red-box">00</div>
    `;
  }
}
var cdd1 = startCountDownDate(setEndDate1);
var cdd2 = startCountDownDate(setEndDate2);
const stop1 = setInterval(function () {
  countDownTimer(cdd1, "counter1");
}, 1000);
const stop2 = setInterval(function () {
  countDownTimer(cdd2, "counter2");
}, 1000);
countDownTimer(cdd1, "counter1");
countDownTimer(cdd2, "counter2");
