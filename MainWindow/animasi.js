$(document).ready(function() {
    $("#Makan").on("click", function() {
      $("#gambar").attr("src", "../Select_Character/bg_assetChar/Scene - Yellow Character/(Scene) Eat Burger/Versi Gif.gif");
      $("#gambar").attr("loop", false);
    });
  
    $("#Tidur").on("click", function() {
      $("#gambar").attr("src", "../Select_Character/bg_assetChar/Scene - Yellow Character/(Scene) Sleep/Versi Gif.gif");
      
    });
  
    $("#Obat").on("click", function() {
      $("#gambar").attr("src", "../Select_Character/bg_assetChar/Scene - Yellow Character/(Scene) Minum Obat/Versi Gif.gif");
    });
  
    $("#Main").on("click", function() {
      $("#gambar").attr("src", "../Select_Character/bg_assetChar/Scene - Yellow Character/(Scene) Play (2)/Versi Gif.gif");
    });
  });

