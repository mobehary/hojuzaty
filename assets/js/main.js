$("#switcher").click(function() {
    let takeingOff = $("#takingOff").val();
    let landing = $("#landing").val();

    $("#takingOff").val("");
    $("#landing").val("");

    $("#landing").val(takeingOff);
    $("#takingOff").val(landing);
});




$(document).ready(function() {
  $('input[name="round-trip"]').on('change', function() {
      if ($('#round-trip').is(':checked')) {
          $('#return-date').removeClass("d-none");
      } else {
          $('#return-date').addClass("d-none");
      }
      if ($('#multi-cities').is(':checked')) {
          $('#reservation-container').removeClass("d-none");
          $('#repeater-link').removeClass("d-none");
      } else {
          $('#reservation-container').addClass("d-none");
          $('#repeater-link').addClass("d-none");
      }
  });
});

$(document).ready(function() {
  $('#reservation-container').repeater({
    defaultValues: {
      
    },
    show: function () {
      $(this).slideDown();
    },
    hide: function (remove) {
      $(this).slideUp(remove);
    },
    isFirstItemUndeletable: true,
    selector: '.repeater'
  });

  $('#add-reservation').click(function() {
    var newReservation = $('#another-reservation').clone();
    newReservation.find('input').val('');
    $('#reservation-container').append(newReservation);
  });
  $('#remove').click(function() {
    $(this).closest('.repeater').remove();
  });
});

$('.counter-btn').click(function (e) { 
  e.stopPropagation();
 });

 $(document).ready(function() {

  $(".increase").click(function() {
      let target = $(this).data("target");
      let currentValue = $("#" + target).text();
      $("#" + target).text(parseInt(currentValue) + 1);
  });

  $(".decrease").click(function() {
      let target = $(this).data("target");
      let currentValue = $("#" + target).text();
      if (parseInt(currentValue) > 0) {
          $("#" + target).text(parseInt(currentValue) - 1);
      }
  });
});

$(".hotel-reservation").change(function() {
  var code = $(this).find(":selected").val();
  if(code === "other") {
    $("#travellers_and_class").removeClass("d-none");
  }
  else{
    $("#travellers_and_class").addClass("d-none");
  }
});

let title = document.querySelectorAll('.personal-title .item');

title.forEach(element => {
  element.onclick = function () {
    title.forEach(element => {
      element.classList.remove("active");
    });
    this.classList.add("active");
  }
});

function preloader_end() {
  $('#loader').fadeOut();
  $('#loader-mask').delay(350).fadeOut('slow');
};
window.addEventListener("load", preloader_end);


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

function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imagePreview').css('background-image', 'url('+e.target.result +')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL(this);
});

$('.domestic-carousel .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav:true,
    loop: true,
    dots: false,
    rtl: document.documentElement.lang == "ar" ? true : false,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:false,
        },
        1000:{
            items:2
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

$(function() {
  $('.date-range').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});




var input = document.querySelector("#mobile-number");
  window.intlTelInput(input, {
    initialCountry: "in",
	separateDialCode: true,
    utilsScript: true,
});
