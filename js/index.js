$(document).ready(function() {        
  $('.pour')
    .delay(500)
    .animate({
      height: '700px',
      left: '655px'
      }, 1000)
    .animate({ 
      left: '690px'
      }, 700)
     .animate({ 
      left: '660px'
      }, 700)
    .animate({ 
      left: '675px',
      bottom: '900px',
      height: '50px'
      }, 700)                             
    .animate({
      opacity: '0'
    }, 100)
  
  $('.liquid')
    .delay(1000)
    .animate({
      height: '250px'
    }, 2900)
  .delay(4000)
  .animate({
    height: '0px'
    }, 2500)
                              
  $('.grounds')
  .delay(1100)
   .animate({
    top: '55%'
  }, 3000)                     .delay(3900)
  .animate({
    top: '85%'
    }, 2200)
});