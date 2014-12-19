var left_slide = function(){
  $(document).on("keydown" , function(e){
    var left = parseInt($('#slide-body').css("left"));
    var window_width = $(window).width();
    var slide_count = $('section').size();
    if(e.which == 13 || e.which == 32 || e.which == 39 || e.which == 40 || e.which ==34){
      e.preventDefault();
      $('#slide-body').css("left" , left - window_width );
    }else if(e.which == 33 || e.which == 37 || e.which == 38){
      e.preventDefault();
      $('#slide-body').css("left" , left + window_width);
    }
  });
}

var place_section = function(){
  for(var i = 0 ; i < $('#slide-body').children().size() ; i++){
    $('section:eq('+i+')').css('left' , i* $(window).width());
  }
}

jQuery(function($){
  $('section').css('width' , $(window).width() + "px");
  place_section();
  left_slide();
});
