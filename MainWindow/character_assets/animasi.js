$(document).ready(function() {
  const image = $("#gambar");
  const originalImg = image.attr('src');
  let intervalId = null;

  var makan= document.getElementById("makan");
  var tidur= document.getElementById("tidur");
  var obat= document.getElementById("obat");


  $(makan).on("click", function() {
    clearInterval(intervalId);
    image.attr('src', "character_assets/Yellow Character/Anak//Makan Ice Cream.gif");
    image.css('transform', `scale(1.5)`);
    intervalId = setInterval(function(){
      image.css('transform', `scale(1)`);
      image.attr('src', originalImg);
      clearInterval(intervalId);
    }, 2200);
  });

  $(tidur).on("click", function() {
    clearInterval(intervalId);
    image.attr('src', "character_assets/Yellow Character/Anak/Tidur.gif");
    image.css('transform', `scale(1.8)`);
    intervalId = setInterval(function(){
      image.css('transform', `scale(1)`);
      image.attr('src', originalImg);
      clearInterval(intervalId);
    }, 2200);
  });

  $(obat).on("click", function() {
    clearInterval(intervalId);
    image.attr('src', "character_assets/Scene - Yellow Character/(Scene) Minum Obat/Versi gif.gif");
    image.css('transform', `scale(1.5)`);
    intervalId = setInterval(function(){
      image.css('transform', `scale(1)`);
      image.attr('src', originalImg);
      clearInterval(intervalId);
    }, 3000);
  });

  $("#main").on("click", function() {
    image.attr("src", "../Select_Character/bg_assetChar/Scene - Yellow Character/(Scene) Play (2)/Versi Gif.gif");
  });
});
