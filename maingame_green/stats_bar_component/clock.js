window.onload = function () {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let lastTime = null;
  let duration = 15;

  let savedTime = localStorage.getItem("savedTime");
  if (savedTime) {
    let savedDate = new Date(savedTime);
    hours = savedDate.getHours();
    minutes = savedDate.getMinutes();
    seconds = savedDate.getSeconds();
  }

  function updateClock(currentTime) {
    if (!lastTime) lastTime = currentTime;
    let timeElapsed = currentTime - lastTime;

    if (timeElapsed >= duration) {
      lastTime = currentTime;
      seconds++;

      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }

      if (hours >= 24) {
        hours = 0;
      }

      let hoursString = hours < 10 ? "0" + hours : hours;
      let minutesString = minutes < 10 ? "0" + minutes : minutes;

      document.getElementById("clock").innerHTML =
        hoursString + ":" + minutesString;

      let currentDate = new Date();
      localStorage.setItem("savedTime", currentDate);
    }

    requestAnimationFrame(updateClock);
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(requestAnimationFrame(updateClock));
    } else {
      requestAnimationFrame(updateClock);
    }
  });

  requestAnimationFrame(updateClock);
};
