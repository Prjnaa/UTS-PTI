$(document).ready(function () {
  const image = $("#gambar");
  const originalImg = image.attr("src");
  let intervalId = null;

  $("#makan").on("click", function () {
    clearInterval(intervalId);
    image.attr(
      "src",
      "character_assets/Scene - Yellow Character/(Scene) Eat Burger/Versi Gif.gif"
    );
    image.css({
      transform: "scale(1.25)",
      "margin-top": "0px","right":"39%"
    });
    intervalId = setInterval(function () {
      image.css({
        transform: "scale(1)",
        "margin-top": "-20px","right":"41%"
      });
      image.attr("src", originalImg);
      clearInterval(intervalId);
    }, 1200);
  });

  $("#tidur").on("click", function () {
    clearInterval(intervalId);
    image.attr(
      "src",
      "character_assets/Yellow Character/Anak/Tidur.gif"
    );
    image.css({
      transform: "scale(1.75)","right":"37%"
    });
    intervalId = setInterval(function () {
      image.css({
        transform: "scale(1)", "right": "41%"
        
      });
      image.attr("src", originalImg);
      clearInterval(intervalId);
    }, 3000);
  });

  $("#obat").on("click", function () {
    clearInterval(intervalId);
    image.attr(
      "src",
      "character_assets/Yellow Character/Anak/Minum Obat.gif"
    );
    image.css({
      transform: "scale(1.45)",
      "margin-top": "-18px","right":"40%"
    });
    intervalId = setInterval(function () {
      image.css("transform", `scale(1)`);
      image.attr("src", originalImg);
      clearInterval(intervalId);
    }, 3000);
  });

  $("#main").on("click", function () {
    window.location.href = "../coba_main_game/index.html"
  });
});
