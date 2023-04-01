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
      transform: "scale(1.3)",
      "margin-top": "-5px",
    });
    intervalId = setInterval(function () {
      image.css({
        transform: "scale(1)",
        "margin-top": "-20px",
      });
      image.attr("src", originalImg);
      clearInterval(intervalId);
    }, 2200);
  });

  $("#tidur").on("click", function () {
    image.attr(
      "src",
      "../Select_Character/bg_assetChar/Scene - Yellow Character/(Scene) Sleep/Versi Gif.gif"
    );
  });

  $("#obat").on("click", function () {
    clearInterval(intervalId);
    image.attr(
      "src",
      "character_assets/Scene - Yellow Character/(Scene) Minum Obat/Versi gif.gif"
    );
    image.css("transform", `scale(1.5)`);
    intervalId = setInterval(function () {
      image.css("transform", `scale(1)`);
      image.attr("src", originalImg);
      clearInterval(intervalId);
    }, 3000);
  });

  $("#main").on("click", function () {
    image.attr(
      "src",
      "../Select_Character/bg_assetChar/Scene - Yellow Character/(Scene) Play (2)/Versi Gif.gif"
    );
  });
});
