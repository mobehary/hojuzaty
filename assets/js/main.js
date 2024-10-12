$("#switcher").click(function() {
    let takeingOff = $("#takingOff").val();
    let landing = $("#landing").val();

    $("#takingOff").val("");
    $("#landing").val("");

    $("#landing").val(takeingOff);
    $("#takingOff").val(landing);
});


var verificationCode = [];

$(".verification-code input[type=text]").keyup(function (e) {

  $(".verification-code input[type=text").each(function (i) {
    verificationCode[i] = $(".verification-code input[type=text]")[i].value; 
    $('#verificationCode').val(Number(verificationCode.join('')));
  });

  if ($(this).val() == '') {
    $(this).prev().focus().css("::selection", "");
  } else {
    if (event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9 || event.key == 0) {
      $(this).next().focus();
    }
  }

}); // keyup


$(document).ready(function(){
	var seconds = 60;
	$('.resend_otp').css('pointer-events', 'none');
  $('.resend_otp').css('display', 'none');
	function tick() {
	  var counter = document.getElementById("counter");
	  seconds--;
	  counter.innerHTML =
		"You can resend code after " + "00:" + (seconds < 10 ? "0" : "") + String(seconds);
	  if (seconds > 0) {
		setTimeout(tick, 1000);
	  } else {
		$('.resend_otp').css('pointer-events', 'unset');
    $('.resend_otp').css('display', 'unset');
		document.getElementById("counter").innerHTML = "";
	  }
	}
	tick();
});

$('.resend_otp').click(function(e) {
  e.preventDefault();
  var seconds = 60;
	$('.resend_otp').css('pointer-events', 'none');
  $('.resend_otp').css('display', 'none');
	function tick() {
	  var counter = document.getElementById("counter");
	  seconds--;
	  counter.innerHTML =
		"يمكنك إعادة الإرسال بعد " + "00:" + (seconds < 10 ? "0" : "") + String(seconds);
	  if (seconds > 0) {
		setTimeout(tick, 1000);
	  } else {
		$('.resend_otp').css('pointer-events', 'unset');
    $('.resend_otp').css('display', 'unset');
		document.getElementById("counter").innerHTML = "";
	  }
	}
	tick();
})




$(document).ready(function() {
    let navHeight = $('nav').innerHeight();
    let headerHeight = $('.internal-header').innerHeight();
    let result = headerHeight - navHeight;
    $('.internal-title').css('height', result);

});

$('.show-pass').click(function() {
    $(this).addClass('d-none');
    $('.hide-pass').removeClass('d-none');
    $('.password-field').prop("type", "text")
});
$('.hide-pass').click(function() {
    $(this).addClass('d-none');
    $('.show-pass').removeClass('d-none');
    $('.password-field').prop("type", "password")
});
$('.confirm-show-pass').click(function() {
    $(this).addClass('d-none');
    $('.confirm-hide-pass').removeClass('d-none');
    $('.confirm-password-field').prop("type", "text")
});
$('.confirm-hide-pass').click(function() {
    $(this).addClass('d-none');
    $('.confirm-show-pass').removeClass('d-none');
    $('.confirm-password-field').prop("type", "password")
});

$('.niceSelect').niceSelect({});

$(".flatPicker").flatpickr(
    {
        minDate: "today"
    }
);
$(".flatPicker.timePicker").flatpickr(
    {
        enableTime: true,
        noCalendar: true,
    }
);

$('.services-carousel.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    loop: false,
    dots: false,
    rtl: document.documentElement.lang == "ar" ? true : false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('.offers-carousel.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    loop: false,
    dots: false,
    rtl: document.documentElement.lang == "ar" ? true : false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('.wayana-carousel.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    loop: false,
    dots: false,
    rtl: document.documentElement.lang == "ar" ? true : false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
var input = document.querySelector("#mobile-number");
  window.intlTelInput(input, {
    initialCountry: "in",
	separateDialCode: true,
    utilsScript: true,
  });
