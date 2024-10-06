$("#switcher").click(function() {
    let takeingOff = $("#takingOff").val();
    let landing = $("#landing").val();

    $("#takingOff").val("");
    $("#landing").val("");

    $("#landing").val(takeingOff);
    $("#takingOff").val(landing);
});

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

// $("#mobile-number").intlTelInput({

// });

var input = document.querySelector("#mobile-number");
  window.intlTelInput(input, {
    initialCountry: "in",
	separateDialCode: true,
    utilsScript: true,
  });