$(document).ready(function(){
  let savedPosition = localStorage.getItem('healthPosition');
  if (savedPosition) {
    $('#health_filler').css('top', savedPosition);
  }

  $(document).on('keydown', function(e){
    if(e.which == 38){
      $('#health_filler').animate({top: '-=.5px'}, 1);
    }
    if(e.which == 40){
      $('#health_filler').animate({top: '+=.5px'}, 1);
    }
  });

  $(window).on('beforeunload', function(){
    var currentPosition = $('#health_filler').css('top');
    localStorage.setItem('healthPosition', currentPosition);
  });
});

