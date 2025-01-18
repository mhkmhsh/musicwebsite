(function($){
    // variables
    elementWidth = $('ul').width(),
    containerWidth = $('nav').width(),
    difference = elementWidth-containerWidth,
    finalWidth = difference * 1.5,
    element = $('ul');
  
    $('li').on('click', function(){
      $('li').removeClass('active');
      $(this).addClass('active');
    });
    
  })(jQuery);
  
  $(document).ready(function() {
    $('.event-heading').on('click', function() {
        $(this).next('.event-details').slideToggle();
    });
  });
  
  $(document).ready(function() {
    $('.trunk-image').on('mouseenter', function() {
      $(this).find('.description').fadeIn();
    }).on('mouseleave', function() {
      $(this).find('.description').fadeOut();
    });
  });