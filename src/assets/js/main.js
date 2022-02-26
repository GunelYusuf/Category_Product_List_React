$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
        
    

    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 350) {
            $(".header-menu").removeClass("sticky");
        } else{
            $(".header-menu").addClass("sticky");
        }
    });
        
    
    //===== Menu More Categories
    
    $('.header-menu-vertical .menu-title').on('click', function(event) {
        $('.header-menu-vertical .menu-content').slideToggle(500);
    });
    
    $('.menu-expand').each(function(){
        var $ul = $(this),
            $lis = $ul.find('.menu-item:gt(11)'),
            isExpanded = $ul.hasClass('expanded');
        $lis[isExpanded ? 'show' : 'hide']();

        if($lis.length > 0){
            $ul
                .append($('<li class="expand">' + (isExpanded ? '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>') + '</li>')
                .click(function(event){
                    var isExpanded = $ul.hasClass('expanded');
                    event.preventDefault();
                    $(this).html(isExpanded ? '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>');
                    $ul.toggleClass('expanded');
                    $lis.toggle(300);
                }));
        }
    });
    
    $('.menu-expand-2').each(function(){
        var $ul = $(this),
            $lis = $ul.find('.menu-item:gt(9)'),
            isExpanded = $ul.hasClass('expanded');
        $lis[isExpanded ? 'show' : 'hide']();

        if($lis.length > 0){
            $ul
                .append($('<li class="expand">' + (isExpanded ? '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>') + '</li>')
                .click(function(event){
                    var isExpanded = $ul.hasClass('expanded');
                    event.preventDefault();
                    $(this).html(isExpanded ? '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>');
                    $ul.toggleClass('expanded');
                    $lis.toggle(300);
                }));
        }
    });

    
    //===== Mobile Menu
    
    $('.mobile-menu-open').on('click', function(){
        $('.mobile-off-canvas-menu').addClass('open')
        $('.overlay').addClass('open')
    });
    
    $('.close-mobile-menu').on('click', function(){
        $('.mobile-off-canvas-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });
    
    $('.overlay').on('click', function(){
        $('.mobile-off-canvas-menu').removeClass('open')
        $('.overlay').removeClass('open')
    });
    
    
    /*Variables*/
    var $offCanvasNav = $('.mobile-canvas'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active-expand');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active-expand');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active-expand');
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    
    /*Variables*/
    var $offCanvasNav = $('.mobile-main-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.mega-sub-menu, .sub-menu, .submenu-item ');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active-expand');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active-expand');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active-expand');
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    
    
    //===== Slick Slider
    
        function mainSlider() {
            
        var BasicSlider = $('.slider-active');
            
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
            
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
            
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: false,
            dots: false,
            fade: true,
			arrows: true,
            prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
    
    
    //===== Slick Slider Category
    
    $('.category-active').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                  arrows: false,
                  dots: true,
              }
            }
        ]
    });
    
    
    //===== Slick Slider Category
    
    $('.category-active-2').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                  arrows: false,
                  dots: true,
              }
            }
        ]
    });
    
    
    //===== Slick Slider Product
    
    $('.product-active').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                  arrows: false,
                  dots: true,
              }
            }
        ]
    });
    
    
    //===== Slick Slider Product 2
    
    $('.product-active-2').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                  arrows: false,
                  dots: true,
              }
            }
        ]
    });
    
    
    //===== Slick Slider Category
    
    $('.product-active-3').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                  arrows: false,
                  dots: true,
              }
            }
        ]
    });
    
    
    //===== Slick Slider Category
    
    $('.product-active-4').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                  arrows: false,
                  dots: true,
              }
            }
        ]
    });
    
    
    //===== Slick Slider Brand
    
    $('.brand-active').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                  arrows: false,
              }
            }
        ]
    });
    
    
    //===== Slick Slider Blog
    
    $('.blog-active').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [            
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            }
        ]
    });
    
    
    //===== slick Slider Special Product
    
    $('.special-products-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 800,
    });
    
    
    //===== slick Slider testimonial Active
    
    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 800,
    });
    
    
    //===== slick Slider Product Gallery
    
    $('.products-gallery-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.products-thumb',
        speed: 400,
    });
    
    $('.products-thumb').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.products-gallery-image',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
        speed: 400,
    });
    
    
    //===== slick Slider Product gallery 2
    
    $('.product-gallery-image-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.products-thumb-2',
        speed: 400,
    });
    
    $('.product-thumb-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-gallery-image-2',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        speed: 400,
    });
    
    
    //===== slick Slider Product Quick View
    
    $('.quick-view-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.quick-view-thumb',
        speed: 400,
    });
    
    $('.quick-view-thumb').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.quick-view-image',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        speed: 400,
    });
    
    
    //===== slick Slider Product Quick View
    
    $('.product-single-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-single-thumb',
        speed: 400,
    });
    
    $('.product-single-thumb').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-single-image',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        speed: 400,
    });
    
    
    //===== slick Slider Product Quick View
    
    $('.product-single-image-tab').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-single-thumb-tab',
        speed: 400,
    });
    
    $('.product-single-thumb-tab').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-single-image-tab',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        speed: 400,
        vertical: true,
    });
    
    
    //===== Slick Slider product Slide
    
    $('.single-product-image-slide').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [            
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });
    
    
    //===== Slick Slider product Slide
    
    $('.blog-gallery').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fal fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    
    //===== product quantity

    $('.add').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
    
   
    //=====  Countdown
    
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="countdown-time d-flex flex-wrap"><div class="single-countdown"><span class="countdown-amount">%D</span><span class="countdown-period">Days</span></div><div class="single-countdown"><span class="countdown-amount">%H</span><span class="countdown-period">Hours</span></div><div class="single-countdown"><span class="countdown-amount">%M</span><span class="countdown-period">Mins</span></div><div class="single-countdown"><span class="countdown-amount">%S</span><span class="countdown-period">Secs</span></div></div>'));
      });
    });
    
    //===== Shipping Form Toggle
    
    $('[data-shipping]').on('click', function () {
		if ($('[data-shipping]:checked').length > 0) {
			$('#shipping-address').slideDown();
		} else {
			$('#shipping-address').slideUp();
		}
	});
    
    
    //===== Payment  Method Select  
    
    // $('[name="radio"]').on('click', function () {

    //     var $value = $(this).attr('value');

    //     $('.single-payment .payment-details').slideUp();
    //     $('[data-method="' + $value + '"]').slideDown();

    // });

    var checked = $('.sin-payment input:checked')
    if (checked) {
        $(checked).siblings('.payment-box').slideDown(300);
    };
    $('.sin-payment input').on('change', function() {
        $('.payment-box').slideUp(300);
        $(this).siblings('.payment-box').slideToggle(300);
    });

    


    var checked = $('.payment-radio input:checked')
    if (checked) {
        $(checked).siblings('.payment-details').slideDown(500);
    };
    $('.payment-radio input').on('change', function() {
        $('.payment-details').slideUp(500);
        $(this).siblings('.payment-details').slideToggle(500);
    });
    
    
    
    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
      if ($(this).scrollTop() > 600) {
          $('.back-to-top').fadeIn(200)
      } else {
          $('.back-to-top').fadeOut(200)
      }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: 0,
      }, 1500);
    });
    
    
    //===== Price Range
    
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "€" + $( "#slider-range" ).slider( "values", 0 ) + " - €" + $( "#slider-range" ).slider( "values", 1 ) );
    
    
    
    
    
    
    
    
    
});