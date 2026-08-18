$(document).ready(function () {

    // ==================================================================
    //                    Header JS Start
    // ==================================================================    

    // scroll hide and show

    $('.navbar-nav li a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $(".navbar-toggler").click(function () {
        $("body").toggleClass("no-scroll");
    });

    $(".header-menu a").click(function () {
        $("body").removeClass("no-scroll");
    });

    $('.header-btn-main a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });



    // Header sticky when scroll down
    $(function () {
        // Disable header scroll JS only on service.html
        if ($('.services-tabs-sticky').length) {
            return;
        }

        var scroll = $(document).scrollTop();
        var navHeight = $('.header-main').outerHeight();
        var scrollThreshold = 100;

        $(window).scroll(function () {
            var scrolled = $(document).scrollTop();
            if (scrolled > navHeight) {

                $('.header-main').addClass('active');
            } else {
                $('.header-main').removeClass('active');
            }

            if (scrolled > scroll) {
                $('.header-main').removeClass('sticky');
            } else {
                $('.header-main').addClass('sticky');
            }

            scroll = $(document).scrollTop();
        });
    });

    // ==================================================================
    //                    Header JS END
    // ==================================================================  


    var btnscrolltop = $(".scroll-top");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btnscrolltop.addClass("show");
        } else {
            btnscrolltop.removeClass("show");
        }
    });

    btnscrolltop.on("click", function (e) {
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
        touchThreshold: 100,
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

    $slider.on('afterChange', function (event, slick, currentSlide) {
        $cur.text(String(currentSlide + 1).padStart(2, '0'));
    });

    //  Slick Slider Case Studies End

    // Client-testimonials JS Start

    (function () {
        let $wrap = $('.client-testimonials');
        let $slider = $wrap.find('.testimonial-main-slider');
        let $cur = $wrap.find('.cs-cur');
        let $total = $wrap.find('.cs-total');

        $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
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
            touchThreshold: 100,
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
        touchThreshold: 100,
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
        touchThreshold: 100,
        infinite: true,
        adaptiveHeight: true,
        arrows: false,
        asNavFor: '.slider-nav-wrapper',
    });

    // Header Service logo slider
    $('.sdropdown-slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        variableWidth: true,
        autoplaySpeed: 2000,
        speed: 500,
        touchThreshold: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Work Feature Slider
    $('.work-features-slider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 500,
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
        touchThreshold: 100,
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
        }
    };

    // ==================================================================
    //        Categories Select Options JS END
    // ==================================================================  


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
                    touchThreshold: 100,
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

    $('.methodology-rtl').on('init afterChange', function (event, slick, currentSlide) {
        let current = currentSlide || 0;

        $('.methodology-slide').removeClass('is-active');
        $(slick.$slides[current]).addClass('is-active');
    });

    $('.methodology-rtl').slick({
        slidesPerView: 'auto',
        slidesToScroll: 1,
        edgeFriction: 0,
        swipeToSlide: false,
        touchThreshold: 100,
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

    const endTarget = buildBlock || lastCard;

    function getMoveDistance() {
        return endTarget.offsetTop + endTarget.offsetHeight;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
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
            const getAnimDistance = () => {
                const headingRect = headingLeft.getBoundingClientRect();
                const cardRect = cards[0].getBoundingClientRect();
                const dist = cardRect.top - headingRect.bottom;
                const safetyMargin = 80;
                return Math.max(50, dist - safetyMargin);
            };

            gsap.to(headingLeft, {
                xPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => "+=" + getAnimDistance(),
                    scrub: 1.2,
                    invalidateOnRefresh: true
                }
            });

            gsap.to(headingRight, {
                xPercent: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => "+=" + getAnimDistance(),
                    scrub: 1.2,
                    invalidateOnRefresh: true
                }
            });
        }

        tl.to(cardsWrap, {
            y: () => -getMoveDistance(),
            ease: "none",
            duration: 1
        }, 0);
    });

    mm.add("(min-width: 769px) and (max-width: 1199px)", () => {

        const getDynamicDistance = () => {

            // Remove transform before measuring actual content position
            gsap.set(cardsWrap, {
                y: 0
            });

            const sectionRect = section.getBoundingClientRect();
            const buildRect = endTarget.getBoundingClientRect();
            const buildStyle = window.getComputedStyle(endTarget);
            const marginBottom = parseFloat(buildStyle.marginBottom) || 0;
            const totalContentHeight =
                buildRect.bottom -
                sectionRect.top +
                marginBottom;
            return Math.max(
                0,
                totalContentHeight - window.innerHeight
            );
        };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => "+=" + getDynamicDistance(),
                pin: true,
                scrub: 0.5,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                fastScrollEnd: true,
                markers: false
            }
        });

        tl.to(cardsWrap, {
            y: () => -getDynamicDistance(),
            ease: "none",
            duration: 1
        }, 0);

        return () => {
            tl.kill();
        };
    });

    mm.add("(min-width: 300px) and (max-width: 768px)", () => {

        const getDynamicDistance = () => {
            gsap.set(cardsWrap, {
                y: 0
            });

            const sectionRect = section.getBoundingClientRect();
            const buildRect = endTarget.getBoundingClientRect();
            const buildStyle = window.getComputedStyle(endTarget);
            const marginBottom = parseFloat(buildStyle.marginBottom) || 0;
            const totalContentHeight =
                buildRect.bottom -
                sectionRect.top +
                marginBottom;
            return Math.max(
                0,
                totalContentHeight - window.innerHeight
            );
        };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => "+=" + getDynamicDistance(),
                pin: true,
                scrub: 0.5,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                fastScrollEnd: true,
                markers: false
            }
        });


        tl.to(cardsWrap, {
            y: () => -getDynamicDistance(),
            ease: "none",
            duration: 1
        }, 0);


        return () => {
            tl.kill();
        };
    });

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