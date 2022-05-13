var countDownDate = new Date("6/1/2022 23:00:00").getTime();

// countdown
let timer = setInterval(function() {

  const today = new Date().getTime();
  var distance = countDownDate - today;
  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);

// pause

// document.getElementById("timer").innerHTML =
// "<div class=\"days\"> \
// <div class=\"numbers\">" + 0 + "</div>days</div> \
// <div class=\"hours\"> \
// <div class=\"numbers\">" + 0 + "</div>hours</div> \
// <div class=\"minutes\"> \
// <div class=\"numbers\">" + 0 + "</div>minutes</div> \
// <div class=\"seconds\"> \
// <div class=\"numbers\">" + 0 + "</div>seconds</div> \
// </div>";
