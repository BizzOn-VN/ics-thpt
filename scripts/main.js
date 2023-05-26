'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
$(".smd-roll").click(function(){
        $('html,body').animate({
        scrollTop: $(".ct-thcs").offset().top -$(".page-header").height()
      }, 'slow');
  });
$('.slider-learning-space').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:true,
	    items:1,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
$('.slider-material').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    items:1,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  draggable: false
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: false,
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
   centerPadding: '0px',
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
      	arrows: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
$(".ico-hide").click(function(){
	$(this).parents(".blk-more").removeClass("active");
})
// $(".s-more").click(function(){
// 	$(this).parents(".md-row").children(".blk-more").addClass("active");
// })

(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});
$(".page-header .container .right-content .main-nav ul li a.hl").click(function(){

	// $(this).toggleClass("arrow-down");
	$(this).parents("li").toggleClass("active");
});
$(".toggle-icon").click(function(){
	$(this).toggleClass("toggle-icon-active");
	$(".main-nav").toggleClass("active");
	$(".page-header .container").toggleClass("ctn-active");
});
$(".ico-close-menu").click(function(){
	$(".main-nav").removeClass("active");
	$(".page-header .container").removeClass("ctn-active");
})
// $('.home-gellerys-slider').owlCarousel({
//     margin:10,
//     loop:true,
//     autoWidth:true,
//     items:4
// })
function getMaxHeight(){
  var maxHeight = 1;
  	
  	$( ".training-programs .grid-md-6" ).each(function() {
  		$(".training-programs .grid-md-6").css("height","auto");
	 	var hhdhdhd=$(this).outerHeight();
	 	if(maxHeight<hhdhdhd){
	 		maxHeight=hhdhdhd;
	 	}
	});
  	$(".training-programs .grid-md-6").css("height",maxHeight);
}  
getMaxHeight();
window.onload = function(){ 
	$('.home-gellerys-slider .owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    items:1,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1000:{
	            items:2
	        }
	    }
	})
	getMaxHeight();
	
	$('.slider-asset').owlCarousel({
	    loop:true,
	    margin:2,
	    nav:true,
	    items:1,
	    afterInit : attachEvent,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
	function attachEvent(elem){
	   var height_slider_asset= $(".slider-asset .thumb img").height();
		$("button.owl-next").css("top",15);
	 }

	// function height_slider_asset(){
	// 	var height_slider_asset= $(".slider-asset .thumb img").height()/2;
	// 	$(".page-asset .slider-asset.owl-carousel .owl-nav button.owl-next").css("top",height_slider_asset);
	// 	$(".page-asset .slider-asset.owl-carousel .owl-nav button.owl-prev").css("top",height_slider_asset);
	// }	
	// height_slider_asset();
	window.onresize=function(){
		getMaxHeight();
		height_slider_asset();
	};
};
function height_slider_asset(){
	setInterval(function(){ 
		var height_slider_asset= $(".slider-asset .thumb img").height()/2;
		$(".page-asset .slider-asset.owl-carousel .owl-nav button.owl-next").css("top",height_slider_asset);
		$(".page-asset .slider-asset.owl-carousel .owl-nav button.owl-prev").css("top",height_slider_asset);
	}, 300);
	
}	
height_slider_asset();
window.onresize=function(){
	height_slider_asset();
};
// window.onresize=function(){
// 	getMaxHeight();
// };
$('.question .text-1 .md-close').click(function(){
	$(this).addClass('active');
	$(this).removeClass('active-1');
	$('.question .text-1 .md-open').addClass('active-1');
	$('.question .text-1 span').addClass('active');
	$('.question .text-1 span').removeClass('active-1');
});
$('.question .text-1 .md-open').click(function(){
	$(this).addClass('active');
	$(this).removeClass('active-1');
	$('.question .text-1 .md-close').addClass('active-1');
	$('.question .text-1 span').addClass('active-1');
	$('.question .text-1 span').removeClass('active');
});


$('.question .text-2 .md-open').click(function(){
	$(this).addClass('active');
	$(this).removeClass('active-1');
	$('.question .text-2 .md-close').addClass('active-1');
	$('.question .text-2 span').addClass('active-1');
	$('.question .text-2 span').removeClass('active');
});
$('.question .text-2 .md-close').click(function(){
	$(this).addClass('active');
	$(this).removeClass('active-1');
	$('.question .text-2 .md-open').addClass('active-1');
	$('.question .text-2 span').addClass('active');
	$('.question .text-2 span').removeClass('active-1');
});


$('.question .text-3 .md-open').click(function(){
	$(this).addClass('active');
	$(this).removeClass('active-1');
	$('.question .text-3 .md-close').addClass('active-1');
	$('.question .text-3 span').addClass('active-1');
	$('.question .text-3 span').removeClass('active');
});
$('.question .text-3 .md-close').click(function(){
	$(this).addClass('active');
	$(this).removeClass('active-1');
	$('.question .text-3 .md-open').addClass('active-1');
	$('.question .text-3 span').addClass('active');
	$('.question .text-3 span').removeClass('active-1');
});

$('.question .text-4 .md-open').click(function(){
	$(this).addClass('active');
	$(this).removeClass('active-1');
	$('.question .text-4 .md-close').addClass('active-1');
	$('.question .text-4 span').addClass('active-1');
	$('.question .text-4 span').removeClass('active');
});
$('.question .text-4 .md-close').click(function(){
	$(this).addClass('active');
	$(this).removeClass('active-1');
	$('.question .text-4 .md-open').addClass('active-1');
	$('.question .text-4 span').addClass('active');
	$('.question .text-4 span').removeClass('active-1');
});


$('.md-slide .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoWidth:true,
    items: 3,
    dots: false,
    responsive:{
          0: {
            items: 1
        },
        479: {
            items: 1
        },
        768: {
            items: 2
        },
        979: {
            items: 3
        }
    }
});

$(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
});



// var height_col = $('.md-col-slide-1').outerHeight();

// $('.md-col-slide-2').css('height',height_col);


function height_col(){
	setInterval(function(){ 
		var height_col = $('.md-col-slide-1').outerHeight();

		$('.md-col-slide-2').css('height',height_col);
	}, 300);
	
}	
height_col();
window.onresize=function(){
	height_col();
};
$(".page-header .container .right-content .main-nav ul li a").click(function(){
	var data_landding_page=$(this).attr('data-landding-page');
	$('html,body').animate({
	  scrollTop: $(data_landding_page).offset().top
	}, 'slow');
});
$("page-header-homehome .btn-register-header").click(function(){
	var data_landding_page_1=$(".btn-register-header a").attr('data-landding-page');
	alert(data_landding_page_1);
	$('html,body').animate({
	  scrollTop: $(data_landding_page_1).offset().top
	}, 'slow');
});

new WOW().init();


// ===== ẩn  .blk-meta khi scroll xuống (<992px) ==== 
var btn =$(".page-header .container .right-content .blk-meta");

$(window).scroll(function() {
  if ($(window).scrollTop() > 56.75) {
    btn.addClass('hide');
  } else {
    btn.removeClass('hide');
  }
});

// ===== padding top .page-main ==== 
function padding_page_main(){
	if($(window).width()>992){
		var height_header=$(".page-header").outerHeight();
		$('.page-main').css("padding-top",height_header+2);
	}
}
padding_page_main();

window.onresize=function(){
	
	padding_page_main();
};


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


