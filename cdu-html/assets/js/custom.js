$(document).ready(function() {

                       

    // ==================================================================
    //                    Header JS Start
    // ==================================================================    

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


    // ==================================================================
    //                    Header JS END
    // ==================================================================  


    var btnscrolltop = $(".scroll-top");

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btnscrolltop.addClass("show");
        } else {
            btnscrolltop.removeClass("show");
        }
    });

    btnscrolltop.on("click", function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "100");
    });

    
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
            }
        ]
    });




    $('.blogs-rtl').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        swipe: true,
        touchMove: true,
        edgeFriction: 0,

        swipeToSlide: false,
        touchThreshold: 20,

        infinite: false,
        autoplay: false,

        variableWidth: false,
        arrows: false,
        dots: false,
        speed: 500,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 1.,
                dots: true,
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
        }]
    });


    //  Slick Slider Case Studies Start
     
    let $wrap = $('.case-studies');
    let $slider = $wrap.find('.main-case-slider');
    let $cur = $wrap.find('.cs-cur');
    let $total = $wrap.find('.cs-total');

    $total.text(String($slider.children('.case-slide').length).padStart(2, '0'));

    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        fade: true,
        cssEase: 'ease-in-out',
        infinite: true,
        // autoplaySpeed: 5000,
        autoplay: false,
        prevArrow: $('.pagination-prev'),
        nextArrow: $('.pagination-next'),
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $cur.text('01');

    $slider.on('afterChange', function(event, slick, currentSlide) {
        $cur.text(String(currentSlide + 1).padStart(2, '0'));
    });
     

     //  Slick Slider Case Studies End

    // Client-testimonials JS Start


    (function() {
        let $wrap = $('.client-testimonials');
        let $slider = $wrap.find('.testimonial-main-slider');
        let $cur = $wrap.find('.cs-cur');
        let $total = $wrap.find('.cs-total');

        $slider.on('init reInit afterChange', function(event, slick, currentSlide) {
            let i = (currentSlide || 0) + 1;
            $cur.text(String(i).padStart(2, '0'));
            $total.text(String(slick.slideCount).padStart(2, '0'));
        });

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 300,
            fade: true,
            cssEase: 'ease-in-out',
            infinite: true,
            autoplay: false,
            prevArrow: $wrap.find('.pagination-prev'),
            nextArrow: $wrap.find('.pagination-next'),
            variableWidth: false
        });
    })();
   // Client-testimonials JS End

    // Slick Slider Industry Served 

    $('.slider-nav-wrapper').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: true,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 600,
        infinite: true,
        adaptiveHeight: true,
        arrows: false,
        asNavFor: '.slider-nav-wrapper',

    });
     

    // Slick Slider Methodology
    
    $('.methodology-rtl').on('init afterChange', function (event, slick, currentSlide) {
        let current = currentSlide || 0;

        $('.methodology-slide').removeClass('is-active');
        $(slick.$slides[current]).addClass('is-active');
    });

    $('.methodology-rtl').slick({
        // slidesToShow: 3.5,
        slidesPerView: 'auto',
        slidesToScroll: 1,
        edgeFriction: 0,

        swipeToSlide: false,
        touchThreshold: 20,

        infinite: false,
        variableWidth: true,
        arrows: false,
        dots: false,
        draggable: true,
        swipe: true,
        touchMove: true,
        speed: 500,
        cssEase: 'ease',
        focusOnSelect: true,
        accessibility: true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    slidesToShow: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });



});



// ==================================================================
//                    Concept-animation JS Start
// ================================================================== 


    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("load", () => {

        const section = document.querySelector(".concept-animation-main");
        const cardsWrap = document.querySelector(".ani-card-wrap");
        const cards = gsap.utils.toArray(".card_col");
        const lastCard = cards[cards.length - 1];
        const headingLeft = document.querySelector(".ani-middle-heading .left");
        const headingRight = document.querySelector(".ani-middle-heading .right");
        const buildBlock = document.querySelector(".cs-build-something");
        if (!section || !cardsWrap || !lastCard) return;

        if (window.innerWidth >= 1200) {
            const endTarget = buildBlock || lastCard;

            function getMoveDistance() {
                const rect = endTarget.getBoundingClientRect();

                if (window.innerWidth > 1536) {
                    // > 1536px
                    bottomGap = 960;
                } else {
                    // 1200px - 1536px
                    bottomGap = 820; // Change this value as needed
                }

                return endTarget.offsetTop + rect.height - (window.innerHeight - bottomGap);
            }

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => "+=" + getMoveDistance(),
                    pin: true,
                    scrub: 1.2,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    markers: false
                }
            });

            if (headingLeft && headingRight) {
                let headingDuration;

                if (window.innerWidth > 1800) {
                    headingDuration = 0.15;
                } else if (window.innerWidth > 1500) {
                    headingDuration = 0.10;
                } else if (window.innerWidth >= 1200) {
                    headingDuration = 0.10;
                }

                tl.to(headingLeft, {
                        xPercent: -100,
                        ease: "none",
                        duration: headingDuration
                    }, 0)
                    .to(headingRight, {
                        xPercent: 100,
                        ease: "none",
                        duration: headingDuration
                    }, 0);
            }

            tl.to(cardsWrap, {
                y: () => -getMoveDistance(),
                ease: "none",
                duration: 1
            }, 0);
        } else if (window.innerWidth >= 769) {
            let endValue;

            if (window.innerWidth >= 992) {
                endValue = 2400;
            } else {
                endValue = 2200;
            }

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=" + endValue,
                    pin: true,
                    scrub: 1.2,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    markers: false
                }
            });

            tl.to(cardsWrap, {
                y: () => -endValue,
                ease: "none",
                duration: 1
            }, 0);
            ScrollTrigger.refresh(true);
        } else if (window.innerWidth >= 300) {

            // const moveDistance = cardsWrap.scrollHeight - window.innerHeight;
            let endValue;

            if (window.innerWidth >= 575) {
                endValue = 1800;
            } else if (window.innerWidth >= 400) {
                endValue = 1650;
            } else {
                endValue = 1700;
            }
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=" + endValue,
                    pin: true,
                    scrub: 1.2,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    markers: false
                }
            });

            tl.to(cardsWrap, {
                y: () => -endValue,
                ease: "none",
                duration: 1
            }, 0);
            ScrollTrigger.refresh(true);

        }

        ScrollTrigger.refresh();
    });

// ==================================================================
//                    Concept-animation JS END
// ================================================================== 




