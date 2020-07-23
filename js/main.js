$(function() {  

    /* IT DOESN'T WORK! :C */

     $(".search-btn").on("click", function() {
        $(this).toggleClass("search-btn--active");
        $('.search-text').toggleClass("search-text--active");
    })

    /*Fixed header on scroll*/
	let header = $("#header");
	let previews = $("#previews");
	let smoothScroll = $("#scrollUp");
    let breadcrumps = $("#breadcrumps");
	let scrollPosition = $(window).scrollTop();
    let window_size = window.matchMedia('(min-width: 990px)');

	$(window).on("scroll load resize", function() {
		scrollPosition = $(this).scrollTop();
		if( scrollPosition > 10 && window_size.matches/*large screen only*/){
			header.addClass("fixed");
			header.slideDown("fast");
            previews.css("padding-top", "110px");
            breadcrumps.css("padding-top", "110px");

        } else {
            previews.css("padding-top", "0");
            breadcrumps.css("padding-top", "0");
			header.removeClass("fixed");
			header.removeAttr("style");
		}
    })

    /*Smooth scroll to top on click*/
	$(window).on("scroll", function() {
		scrollPosition = $(this).scrollTop();
		if (scrollPosition > 600) {
			smoothScroll.addClass("show");
		} else {
			smoothScroll.removeClass("show");
		}
	})
	smoothScroll.on('click', function(scroll) {
  		scroll.preventDefault();
  		$('html, body').animate({scrollTop:0}, '300');
	});

    /*Mobile nav toggle*/
    $('#burger-btn').on('click', function() {
        $(this).toggleClass('burger--active');
        $('.mobile-nav').toggleClass('mobile-nav--active');
    })

    /*Email validation*/
	$(".contact-submit").on("click", validate);
	function validateEmail(email) {
		let re = /.+@.+\..+/;
   		return re.test(String(email).toLowerCase());
	}
	 function sendForm() {
   		$(".error").text("Form sending...").fadeIn().fadeOut(2000);
 	}
 	function validate() {
    	let email = $(".contact-email").val();
    	let $error = $(".error");
    	$error.text("");

    if (validateEmail(email)) {
     	$error.fadeOut();
     	sendForm();
    } else {
     	$error.fadeIn();
     	$error.text("The email is not valid");
    }
    return false;
    }

    $(".contact-email").on("click", function() {
    	$(".error").text("The email is required").fadeIn();
    })
});

/*Owl carousel*/
$('#owl').owlCarousel({
    loop:true,
    dots: false,
    nav: true,
    navText: ["", ""],   
    responsive:{
        0:{
            items:1
        },           
        480:{
            items:2
        },       
        770:{
            items:3
        },
        990:{
            items:4
        },
        1020:{
            items:4
        }
    }
})

/*Slick slider*/
 $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });

 $('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        focusOnSelect: false,
        arrows: false,
        infinite: false,
        responsive: [{
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                focusOnSelect: true,
                infinite: true,
            }
        }, {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
        }
        }]
    });

 $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    let currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
 });

 $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    let goToSingleSlide = $(this).data('slick-index');
    $('.slider-single').slick('slickGoTo', goToSingleSlide);
 });





