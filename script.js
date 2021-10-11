$(document).ready(function() {
  
    // variables 
    var toTop = $('a');
    // logic
    toTop.on('click', function() {
      $('html, body').animate({
        scrollTop: $('html, body').offset().top,
      });
    });
  
  });
  //click on anchor to scroll 