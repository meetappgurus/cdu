$(document).ready(function() {


    $('.clients-logo-inner').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 0,
        // slidesToShow: 5,
        speed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }]
    });


    // ==================================================================
    //                        HOME PAGE OUR WORK SLIDER JS Start
    // ==================================================================                           

    function setBoundries(slick, state) {
        if (state === 'default') {
            slick.find('ul.slick-dots li').eq(4).addClass('n-small-1');
        }
    }

    // Slick Selector.
    var slickSlider = $('.h-our-work-slider');
    var maxDots = 4;
    var transformXIntervalNext = -18;
    var transformXIntervalPrev = 18;

    slickSlider.on('init', function(event, slick) {
        $(this).find('ul.slick-dots').wrap("<div class='slick-dots-container'></div>");
        $(this).find('ul.slick-dots li').each(function(index) {
            $(this).addClass('dot-index-' + index);
        });
        $(this).find('ul.slick-dots').css('transform', 'translateX(0)');
        setBoundries($(this), 'default');
    });

    var transformCount = 0;
    slickSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var totalCount = $(this).find('.slick-dots li').length;
        if (totalCount > maxDots) {
            if (nextSlide > currentSlide) {
                if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
                    if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
                        transformCount = transformCount + transformXIntervalNext;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
                        var nextSlidePlusOne = nextSlide + 1;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('n-small-1');
                        $(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
                        var pPointer = nextSlide - 3;
                        var pPointerMinusOne = pPointer - 1;
                        $(this).find('ul.slick-dots li').eq(pPointerMinusOne).removeClass('p-small-1');
                        $(this).find('ul.slick-dots li').eq(pPointer).addClass('p-small-1');
                    }
                }
            } else {
                if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
                    if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
                        transformCount = transformCount + transformXIntervalPrev;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
                        var nextSlidePlusOne = nextSlide - 1;
                        $(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('p-small-1');
                        $(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
                        var nPointer = currentSlide + 3;
                        var nPointerMinusOne = nPointer - 1;
                        $(this).find('ul.slick-dots li').eq(nPointer).removeClass('n-small-1');
                        $(this).find('ul.slick-dots li').eq(nPointerMinusOne).addClass('n-small-1');
                    }
                }
            }
        }
    });

    $('.h-our-work-slider').slick({
        dots: true,
        arrows: true,
        // fade:true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // speed: 2000,
    });


    // ==================================================================
    //                        HOME PAGE OUR WORK SLIDER JS END
    // ==================================================================  



    $('.team-person-slider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // speed: 2000,

        responsive: [{
            breakpoint: 1400,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 3,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $('.work-features-slider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // speed: 2000,

        responsive: [{
            breakpoint: 1400,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 3,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $('.awards-slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // speed: 2000,

        responsive: [{
            breakpoint: 1400,
            settings: {
                autoplay: false,
                autoplaySpeed: 2000,
                slidesToShow: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }]
    });
    $(".prev-btn").click(function() {
        $(".awards-slider").slick("slickPrev");
    });

    $(".next-btn").click(function() {
        $(".awards-slider").slick("slickNext");
    });
    $(".prev-btn").addClass("slick-disabled");
    $(".awards-slider").on("afterChange", function() {
        if ($(".slick-prev").hasClass("slick-disabled")) {
            $(".prev-btn").addClass("slick-disabled");
        } else {
            $(".prev-btn").removeClass("slick-disabled");
        }
        if ($(".slick-next").hasClass("slick-disabled")) {
            $(".next-btn").addClass("slick-disabled");
        } else {
            $(".next-btn").removeClass("slick-disabled");
        }
    });


    $('.testimonials-slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // speed: 2000,

        responsive: [{
            breakpoint: 1200.98,
            settings: {
                slidesToShow: 2,
                infinite: false,
                dots: false
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
            }
        }]
    });



    $('.blogs-sec-slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // speed: 2000,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }]
    });


    $('.testimonials--slider').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonials--slider .slick-dots'
        // speed: 2000,
    });

    $('.testimonials--slider .slick-dots').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        // slidesToShow: 10,
        // slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        asNavFor: '.testimonials--slider',
        autoplaySpeed: 0,
        // pauseOnHover: false,
    });


    /* 
      Make cards clickable 
      ====================
    */

    // $('.card-body').on('click', function() {
    //   $(this).parent().find("a").trigger('click'); 
    // });


    // scroll hide and show

    $('.navbar-nav li a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    $(".navbar-toggler").click(function() {
        $("body").toggleClass("no-scroll");
    });

    $(".header-menu a").click(function() {
        $("body").removeClass("no-scroll");
    });

    $('.header-btn-main a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });


    // top nav header scroll active class add start

    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     if (scroll > 0) {
    //         $(".header-main").addClass("active");
    //     } else {
    //         $(".header-main").removeClass("active");
    //     }
    // });


    // $(function(){

    //   var scroll = $(document).scrollTop();
    //   var navHeight = $('.header-main').outerHeight();

    //   $(window).scroll(function(){

    //     var scrolled = $(document).scrollTop();

    //     if(scrolled > navHeight){

    //       $('.header-main').addClass('active');
    //         }else{
    //         $('.header-main').removeClass('active');
    //         }

    //       if(scrolled > scroll){
    //         $('.header-main').removeClass('sticky');
    //         }else{
    //         $('.header-main').addClass('sticky');
    //         }

    //       scroll = $(document).scrollTop();

    //   }); 

    // });



    // top nav header scroll active class add end


    // ==================================================================
    //        SERVICE PAGE SIDE NAV CLICK TO  SCROLL TOP JS START
    // ==================================================================  

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.allServices-ul li a.scrollTosection').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            //console.table(refElement.position().top, scrollPos, refElement.position().top + refElement.height(), scrollPos);

            if (refElement.position().top - 50 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.allServices-ul li a.scrollTosection').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.allServices-ul li a.scrollTosection[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 500, 'swing', function() {
            //window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

});


    // ==================================================================
    //        SERVICE PAGE SIDE NAV CLICK TO  SCROLL TOP JS START
    // ================================================================== 


    $(document).ready(function() {
        var $btns = $(".careers-btn").click(function() {
            if (this.id == "all") {
                $("#careersRow > div").fadeIn(450);
            } else {
                var $el = $("." + this.id).fadeIn(450);
                $("#careersRow > div").not($el).hide();
            }
            $btns.removeClass("active");
            $(this).addClass("active");
        });
    });




// ==================================================================
//        Categories Select Options JS START
// ================================================================== 

// Select the menu element
const menu = document.querySelector(".select-menu");

if (menu) {
    // Select the button and text elements within the menu
    const selectBtn = menu.querySelector(".select-btn");
    const sBtnText = menu.querySelector(".sBtn-text");

    if (selectBtn && sBtnText) {
        // Add click event listener to the select button
        selectBtn.onclick = () => menu.classList.toggle("active");

        // Add click event listeners to all options
        const options = menu.querySelectorAll(".option");
        options.forEach((option) => {
            const optionText = option.querySelector(".option-text");
            if (optionText) {
                option.onclick = () => {
                    sBtnText.innerText = optionText.innerText;
                    menu.classList.remove("active");
                };
            }
        });
    } // else {
    //     console.error("Select button or button text element not found.");
    // }
}; // else {
//     console.error("Menu element not found.");
// }

// ===========================================================    

// const menu = document.querySelector(".select-menu");
// const [selectBtn, sBtnText] = [
//     menu.querySelector(".select-btn"),
//     menu.querySelector(".sBtn-text")
// ];


// selectBtn.onclick = () => menu.classList.toggle("active");

// menu.querySelectorAll(".option").forEach((option) => {
//     option.onclick = () => {
//         sBtnText.innerText = option.querySelector(".option-text").innerText;
//         menu.classList.remove("active");
//     };
// });



// ==================================================================
//        Categories Select Options JS END
// ================================================================== 