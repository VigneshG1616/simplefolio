import initTilt from './js/tilt';
import initSr from './js/sr';

import './style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

$(function(){
  // get hash value
  var hash = window.location.hash;
  // now scroll to element with that id
  $('html, body').animate({ scrollTop: $(hash).offset().top });
});

initSr();
initTilt();
