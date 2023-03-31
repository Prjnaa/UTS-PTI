var video = document.getElementById("bg-video");
var startButton = document.getElementById("start-button");

startButton.onclick = function () {
  video.play();
  setTimeout(function () {
    startButton.style.display = "none";
  }, 100);

  video.addEventListener(
    "ended",
    function () {
      video.currentTime = 0;
      video.pause();
      startButton.style.opacity = 0;
      startButton.style.pointerEvents = "none";
      setTimeout(function () {
        startButton.style.display = "none";
      }, 100);
      window.location.href = "homeScreen.html";
    },
    false
  );
};
