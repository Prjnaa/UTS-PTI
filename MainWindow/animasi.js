$(document).ready(function() {
    $("#makan").on("click", function() {
      $("#gambar").attr("src", "../MainWindow/character_assets/Scene - Yellow Character/(Scene) Eat Burger/Versi Gif.gif");
      $("#gambar").css('transform', 'scale(' + 1.25 + ')');
      $("#gambar").attr("loop", false);
    });
  
    $("#tidur").on("click", function() {
      $("#gambar").attr("src", "../Select_Character/bg_assetChar/Scene - Yellow Character/(Scene) Sleep/Versi Gif.gif");
      
    });
  
    $("#obat").on("click", function() {
      $("#gambar").attr("src", "../Select_Character/bg_assetChar/Scene - Yellow Character/(Scene) Minum Obat/Versi Gif.gif");
    });
  
    $("#main").on("click", function() {
      $("#gambar").attr("src", "../Select_Character/bg_assetChar/Scene - Yellow Character/(Scene) Play (2)/Versi Gif.gif");
    });
  });

