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
                slidesToShow: 1,
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

    // Work Feature Slider
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
            }
        ]
    });


    // Team person slider
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

    // Services Tabs JS Start

    $('.service-tab').on('click', function (e) {
        e.preventDefault();
      
        const $this = $(this);
        const target = $this.attr('href');
        const $target = $(target);

        // Check target section exists
        if (!$target.length) {
            console.warn('Target section not found:', target);
            return;
        }

        // Active class
        $('.service-tab').removeClass('active');
        $this.addClass('active');

        // Scroll to section
        $('html, body').animate({
            scrollTop: $target.offset().top - 50
        }, 0);
    });

    // end

    // Services slider For Responsive
    function serviceSlider() {
        if ($(window).width() < 1199) {
            if (!$('.explore-services-list').hasClass('slick-initialized')) {

                $('.explore-services-list').slick({
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    infinite: false,
                    touchThreshold: 20,
                    speed: 500,
                    responsive: [
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1.2
                            }
                        },
                        {
                            breakpoint: 360,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            }

        } else {
            if ($('.explore-services-list').hasClass('slick-initialized')) {
                $('.explore-services-list').slick('unslick');
            }
        }
    }

    serviceSlider();
    $(window).on('resize', serviceSlider);

    // Microsoft Azure Slider For Responsive
    function microsoftAzureSlider() {

        const $slider = $('.microsoft-azure-sec .explore-services-list');
        if ($(window).width() < 1199) {
            if (!$slider.hasClass('slick-initialized')) {
                $slider.slick({
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    infinite: false,
                    touchThreshold: 20,
                    speed: 500,
                    responsive: [
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1.2
                            }
                        },
                        {
                            breakpoint: 360,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });

            }

        } else {

            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }

        }

    }

    microsoftAzureSlider();
    $(window).on('resize', microsoftAzureSlider);


    // Slick Slider Methodology

    $('.methodology-rtl').on('init afterChange', function(event, slick, currentSlide) {
        let current = currentSlide || 0;

        $('.methodology-slide').removeClass('is-active');
        $(slick.$slides[current]).addClass('is-active');
    });

    $('.methodology-rtl').slick({
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
            },
            // {
            //     breakpoint: 992,
            //     settings: {
            //         variableWidth: false,   
            //         slidesToShow: 2,
            //         dots: true,
            //     }
            // }
        ]
    });

    if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
    }

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

            let bottomGap;

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
    } else if (window.innerWidth >= 300) {
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
    }


    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 300);

});


window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});

// end



// ==================================================================
//                  How We Deliver Sticky Animation
// ==================================================================
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
if (window.matchMedia("(min-width: 1200px)").matches) {
    const wrapper = document.querySelector(".how-we-deliver");

    if (wrapper) {
        const navItems = wrapper.querySelectorAll(".hwd-nav-item");
        const panels = wrapper.querySelectorAll(".hwd-info-inner");
        navItems[0]?.classList.add("active");

        // --------------------------------------------------------------
        // Main pinned animation
        // --------------------------------------------------------------
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: () => "+=" + (panels.length * window.innerHeight),
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,

                onUpdate: self => {
                    const progress = self.progress;
                    const index = Math.min(
                        Math.floor(progress * panels.length),
                        panels.length - 1
                    );
                    activateNav(index);
                }
            }
        });

        // --------------------------------------------------------------
        // Move right content
        // --------------------------------------------------------------
        const getMoveDistance = () => {
            const firstPanel = panels[0];
            const lastPanel = panels[panels.length - 1];
            return lastPanel.offsetTop - firstPanel.offsetTop;
        };

        tl.to(".hwd-scroll-text", {
            y: () => -getMoveDistance(),
            ease: "none"
        });

        // --------------------------------------------------------------
        // Active Navigation
        // --------------------------------------------------------------
        function activateNav(index) {
            navItems.forEach((item, i) => {
                item.classList.toggle("active", i === index);
            });
        }

        // --------------------------------------------------------------
        // Click Navigation
        // --------------------------------------------------------------
        navItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                const st = tl.scrollTrigger;
                if (!st) return;

                const firstPanel = panels[0];
                const panelOffset =
                    panels[index].offsetTop - firstPanel.offsetTop;

                const totalMoveDistance =
                    getMoveDistance();
            
                let progress =
                    panelOffset / totalMoveDistance;

                // Keep progress between 0 and 1
                progress = gsap.utils.clamp(0, 1, progress);
                const targetScroll =
                    st.start +
                    (st.end - st.start) * progress;

                // ------------------------------------------------------
                // Smooth scroll
                // ------------------------------------------------------
                gsap.to(window, {
                    duration: 0,
                    scrollTo: {
                        y: targetScroll,
                        autoKill: false
                    },
                    ease: "power3.inOut"
                });
            });
        });

        // --------------------------------------------------------------
        // Refresh on resize
        // --------------------------------------------------------------
        window.addEventListener("resize", () => {
            ScrollTrigger.refresh();
        });
    }
}

// Accordion from <1200 device
if (window.matchMedia("(max-width: 1199px)").matches) {
    const accordionItemHeaders = document.querySelectorAll(".hwd-accord-header");

    accordionItemHeaders.forEach((accordionItemHeader, index) => {
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        // First item open by default
        if (index === 0) {
            accordionItemHeader.classList.add("active");
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }

        accordionItemHeader.addEventListener("click", () => {
            const isActive = accordionItemHeader.classList.contains("active");
            // Close all other items
            accordionItemHeaders.forEach(otherHeader => {
                const otherBody = otherHeader.nextElementSibling;

                otherHeader.classList.remove("active");
                otherBody.style.maxHeight = "0px";
            });
            // Open clicked item if it wasn't already active
            if (!isActive) {
                accordionItemHeader.classList.add("active");
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            }
        });
    });
}

// end