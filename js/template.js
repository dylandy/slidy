var current;
var id_generator = function(){
  var i = 0;
  $('section').map(function(){
    $(this).attr("id" , i+=1);
  });
}

var place_section = function( callback ){
  for(var i = 0 ; i < $('section').size() ; i++){
    $('section:eq('+i+')').css('left' , i* $(window).width() + "px");
  }
  callback();
}

var left_slide = function(){
  $(document).on("keydown" , function(e){
    $('section').map(function(){
      var position = $(this).position();
      if(position.left === 0){
        current = $(this);
      }
    });
    console.log(current.attr("id"));
    if(e.which == 13 || e.which == 32 || e.which == 39 || e.which == 40 || e.which ==34 && current.hasClass("left-slide") && current.attr("id") != $('section:last').attr("id")){
      e.preventDefault();
      console.log("to right");
      console.log(current.attr("id") != $('section:last').attr("id"));
      current.css("left" , 0 - $(window).width());
      current.next().css("left" , 0);
    }else if(e.which == 33 || e.which == 37 || e.which == 38 && current.hasClass("left-slide") && current.attr("id") != $('section:first').attr("id")){
      console.log("to left");
      console.log(current.attr("id") != $('section:first').attr("id"));
      e.preventDefault();
      current.css("left" , 0 + $(window).width());
      current.prev().css("left" , 0);
    }
  });
}



jQuery(function($){
  place_section(function(){
    id_generator();
    left_slide();
  });
  
});
