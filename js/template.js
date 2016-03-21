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
    if( current.hasClass("left-slide") ){
      if( current.attr("id") === '1'){
        if(e.which == 13 || e.which == 32 || e.which == 39 || e.which == 40 || e.which ==34){
          current.css("left" , 0 - $(window).width());
          current.next().css("left" , 0);
        }
      }else if( current.attr("id") == $("section").size() ){
        if(e.which == 33 || e.which == 37 || e.which == 38){
          current.css("left" , 0 + $(window).width());
          current.prev().css("left" , 0);
        }
      }else{
        if(e.which == 13 || e.which == 32 || e.which == 39 || e.which == 40 || e.which ==34){
          e.preventDefault();
          current.css("left" , 0 - $(window).width());
          current.next().css("left" , 0);
        }else if(e.which == 33 || e.which == 37 || e.which == 38){
          e.preventDefault();
          current.css("left" , 0 + $(window).width());
          current.prev().css("left" , 0);
        }
      }
    }
  });
}

//var object_fly_in_animation = function(){
//  $(".fly-in").
//}

jQuery(function($){
  place_section(function(){
    id_generator();
    left_slide();
  });
  
});
