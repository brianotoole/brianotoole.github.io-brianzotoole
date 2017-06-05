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



// scroll on click of anchor link (a href="#")
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 900);
        return false;
      }
    }
  });
});



// form validation
function validateRegister() {
	var email, atpos, dotpos, username;

	username = $('#name').val();
	email = $('#email').val();
	atpos = email.indexOf('@');
	dotpos = email.lastIndexOf('.');
	message = $('#message').val();

	if (username == null || username == '') {
	$('#js-form-message').addClass('text-error text-large').text('* Please enter your name.');
	$('#name').focus();
	return false;
	}
	if(email == null || email == '') {
	$('#js-form-message').addClass('text-error text-large').text('* Please enter your email.');
	$('#email').focus();
	return false;
	}
	if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >= email.length) {
	$('#js-form-message').addClass('text-error text-large').text('* Please enter a valid email address.');
	$('#email').focus();
	return false;
	}
	if (message == null || message == '') {
	$('#js-form-message').addClass('text-error text-large').text('* Please enter your message.');
	$('#message').focus();
	return false;
	}
	else {
	  var datastring = $("#js-form").serialize();
	  $.ajax({
	    //send the form using formspree
	    url: "https://formspree.io/botoole518@gmail.com",
	    method: "POST",
	    data: datastring,
	    dataType: "json"
	  });
	  $('#js-form-message').addClass('text-success text-large').text('Thanks for reaching out! Your message has been sent successfully. I\'ll be in touch as soon as possible.');
	  return false;
	}
}

$(document).ready(function() {
  var canvas = $('#c')[0];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if(canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    ctx.strokeStyle = 'rgba(255, 255, 255,0.2)';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';


    var init = [];
    var maxParts = 1000;
    for(var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      })
    }

    var particles = [];
    for(var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for(var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }

    function move() {
      for(var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if(p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }

    setInterval(draw, 40);

  }
});
