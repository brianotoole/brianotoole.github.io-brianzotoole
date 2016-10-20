// Nav.js
// full screen nav
$(document).ready(function() {
  var trigger = $('.i-menu a'),
    isClosed = false;
  trigger.click(function() {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      trigger.removeClass('active');
      isClosed = false;
    } else {
      trigger.addClass('active');
      isClosed = true;
    }
  }
  $(trigger).click(function() {
    $('.menu-wrapper').toggleClass('open');
  });
});