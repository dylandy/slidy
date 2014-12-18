var left_slide = function(){
  $(document).on("keydown" , function(e){
    if(e.which == 13 || e.which == 32 || e.which == 39 || e.which == 40 || e.which ==34){
      $('#slide-body').animate({"left" : '-=' + $(window).width() + "px"}, 300 );
    }else if(e.which == 33 || e.which == 37 || e.which == 38){
      $('#slide-body').animate({"left" : '+=' + $(window).width() + "px"} , 300 );
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
