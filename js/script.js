// dir
var bodyDir = $('body').css('direction')
console.log(bodyDir)
var dirAr
if(bodyDir == "rtl"){
  dirAr= true
}
else{
  dirAr = false
}

// loader
$('#loading').fadeOut(500);

// owl carousel
$(document).ready(function(){
    $('.partners .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        rtl:true,
        autoplay:true,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:4,
            },
            1000:{
                items:6,
            }
        }
    });
    
    $("header .owl-carousel").owlCarousel({
        nav: false,
        autoplay: false,
        autoplayHoverPause: true,
        responsiveClass: true,
        items: 1,
        rtl: dirAr,
        dots: true,
        margin: 20
    });
    
    $('.staff .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        rtl:dirAr,
        autoplay:true,
        nav:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });
    
    
    $("#testimonial-slider").owlCarousel({
        loop:true,
        margin:10,
        center: true,
        responsiveClass:true,
        rtl:dirAr,
        autoplay:true,
        autoplayTimeout:20000,
        nav:false,
        rtl: dirAr,
        items: 1.5,
        responsive:{
            0:{
                items:1,
            },
            992:{
                items:1.5,
            }
        }
    });
});

// scroll to top page
var btn_top = $('#scrollUp');
$(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn_top.show();
      } else {
        btn_top.hide();
      }
});

// services responsive
$('.op-pro-filter').click(function () {
    $(this).toggleClass('active');
    $('.services-nav').slideToggle();
});

// dropdown menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})
Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};
