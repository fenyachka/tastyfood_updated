(function ($) {
    "use strict"

    /* 1. Preloader */
    $(window).on('load', function () {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });

    /* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".navbar").removeClass("fixed-top");
            $('#back-top').fadeOut(500);
        } else {
            $(".navbar").addClass("fixed-top");
            $('#back-top').fadeIn(500);
        }
    });



    // 3.Scroll Up
    $('#back-top a').on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // 4. ---- Hero slider - index.html page
    $('.slider').owlCarousel({
        loop: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoplay: true,
        margin: 0,
        autoHeight: false,
        smartSpeed: 800,
        items: 1,
        animateIn: 'fadeInDown', // add this
        animateOut: 'fadeOut', // and this
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false
            }
        }
    });
    var owl = $('.slider');
    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h1, p, span, .hero-btn').removeClass('animate__fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('span').addClass('animate__animated animate__fadeInLeft').css('animation-delay', '0.2s');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animate__animated animate__fadeInLeft').css('animation-delay', '0.4s');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animate__animated animate__fadeInLeft').css('animation-delay', '0.6s');
        $('.owl-item').not('.cloned').eq(item).find('.hero-btn').addClass('animate__animated animate__fadeInLeft').css('animation-delay', '0.8s');
    });


    // 
    /* 5. data-bg */
    $("[data-bg]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg") + ")")
        $(this).css("background-position", "center")
    });


    /* 6. Testimonials slider*/
    $('.slider-testimonials').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*  7, Fancybox window call  */
    $('[data-fancybox="gallery"]').fancybox({

        buttons: [
            //"zoom", //additional buttons
            //"share",
            //"slideShow",
            //"fullScreen",
            //"download",
            // "thumbs",
            "close"
        ],
    });

    /* 8. Datepicker */
    $('#datepicker1').datepicker();

    // 9. Time Picker
    $('#timepicker').timepicker();

    /* 10. Nice Selectorp  */
    var nice_Select = $('select');
    if (nice_Select.length) {
        nice_Select.niceSelect();
    }


    // 11. Portfolio Filter
    $(document).ready(function () {

        $(".filter-button").click(function () {
            var value = $(this).attr('data-filter');

            if (value == "all") {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else {
                //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
                //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');

            }
        });

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");

    });

    /*-----------------------------------------------------
    12. Gallery Isotope
    ------------------------------------------------------*/

    var $grid = $('.js-isotope').isotope({
        itemSelector: '.js-isotope__item',
        transitionDuration: '0.8s',
        percentPosition: true,
        masonry:{
            columnWidth: '.js-isotope__grid-size'
        }
      });
      $('.portfolio-list li a').on("click", function () {
        var value = $(this).attr('data-cat');
          $grid.isotope({
            filter: value
          });
        $('.portfolio-list li a').removeClass('active');
        $(this).addClass('active');
      })
      
})(jQuery);