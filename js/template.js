var id_generator = function(){
  var i = 0;
  $('section').map(function(){
    $(this).attr("id" , i+=1);
  });
}

var left_slide = function(){
  $(document).on("keydown" , function(e){
    var current;
    $('section').each(function(){
      if($(this).css("left") == "0px"){
        current = $(this);
      }
    });
    if(e.which == 13 || e.which == 32 || e.which == 39 || e.which == 40 || e.which ==34 && current.hasClass("left-slide") && current.attr("id") != $('section:last').attr("id")){
      e.preventDefault();
      current.css("left" , 0 - $(window).width());
      current.next().css("left" , 0);
    }else if(e.which == 33 || e.which == 37 || e.which == 38 && current.hasClass("left-slide") && current.attr("id") != $('section:first').attr("id")){
      e.preventDefault();
      current.css("left" , 0 + $(window).width());
      current.prev().css("left" , 0);
    }
  });
}

var place_section = function(){
  for(var i = 0 ; i < $('section').size() ; i++){
    $('section:eq('+i+')').css('left' , i* $(window).width());
  }
}

jQuery(function($){
  $('section').css('width' , $(window).width() + "px");
  $('section:first').css("left" , 0);
  id_generator();
  place_section();
  left_slide();
});
