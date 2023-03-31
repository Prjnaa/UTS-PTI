 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        }
    },
  });

  var video = document.getElementById("bg-video");
  var startButton = document.getElementById("button1");
  var card = document.getElementsByClassName("slide-container")[0];
  var startButton2 = document.getElementById("button2");

  startButton.onclick = function() {
    video.play();
    setTimeout(function() {
      card.style.display = "none";
    }, 100);

    video.addEventListener('ended', function() {
      video.currentTime = 0;
      video.pause();
      startButton.style.opacity = 0;
      startButton.style.pointerEvents = 'none';
      setTimeout(function() {
      startButton.style.display = "none";
    }, 100);
    window.location.href = "HomeScreen.html";
  }, false);
}

  
  startButton2.onclick = function() {
    video.play();
    setTimeout(function() {
      card.style.display = "none";
    }, 100);

    video.addEventListener('ended', function() {
      video.currentTime = 0;
      video.pause();
      startButton.style.opacity = 0;
      startButton.style.pointerEvents = 'none';
      setTimeout(function() {
      startButton.style.display = "none";
    }, 100);
    window.location.href = "https://www.google.com"; // mengarahkan ke google.com
  });
};
