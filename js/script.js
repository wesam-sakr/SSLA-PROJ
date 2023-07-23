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

$(".play-icon").click(function(){
    document.querySelector(".vid-wrapper video").play();
    $(this).addClass("d-none");
    $(".pause-icon").removeClass("d-none");
    $('.video-cover-img').slideUp("slow")
})

$(".pause-icon").click(function(){
    document.querySelector(".vid-wrapper video").pause();
    $(this).addClass("d-none");
    $(".play-icon").removeClass("d-none");
    $('.video-cover-img').slideDown( "slow" )
})


// owl carousel
$(document).ready(function(){

    $('.partners .owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        responsiveClass:true,
        rtl:dirAr,
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
                items:5,
            },
            function(){

                
            }
        }
    });
    var owl = $('.partners .owl-carousel');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
        var n = Math.ceil($('.partners .owl-item.active').length/2) ;
        console.log(n);
        $('.partners .owl-item.active').each(function (){
            if(this.hasClass('partner')) {
                this.classList.remove('partner');
            }    
        })
        
        var aAitem = $('.partners .owl-item.active')[n]
        $(aAitem).toggleClass("partner")
    })
    $('.article .owl-carousel').owlCarousel({
        // loop:true,
        margin:20,
        // responsiveClass:true,
        rtl:dirAr,
        // autoplay:true,
        nav :true,
        dots: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
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
        // responsiveClass:true,
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
    $('.dropdown-menu').each( function(){
    if(!this.hasClass('show')) {
        this.classList.remove('show');
    } else this.classList.add('hide');
    })

    if(!this.hasClass('show')) {
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
