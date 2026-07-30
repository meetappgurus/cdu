// $(document).ready(function() {
$(window).on('load',function(){


	// Check if the loader element exists
	if ($('#loader').length) {
		// Add the noscroll class to the body to prevent scrolling
		$('body').addClass('no-scroll');
		$('.loader-cut').addClass('active');
		// Select the loader div and show it
		$('#loader').show();

		// Wait for 3 seconds and then hide the loader and remove the noscroll class
		setTimeout(function() {
			$('#loader').fadeOut(1000, function() {
				$('body').removeClass('no-scroll');
			});
		}, 3000);
	}


	let tl = gsap.timeline({
		delay: 0.2,
		defaults: {
			duration: 0.2,
			ease: "power4.out"
		}
	});

	function progressUpdate() {
		let progress = Math.round(this.progress() * 100);
		$(".loader_number").text(progress);
	}

	tl.to(".loader_bottom_bar", {
		width: "100%",
		duration: 2.7,
		onUpdate: progressUpdate,
		ease: "power4.out" // Add your desired easing function here
	})


	if ($('.slidem').length) {
		// Copy last div for the first slideup
		// jQuery(".slidem").prepend(
		// 	jQuery(".slidem > div:last").clone()
		// );

		jQuery.fn.slideFadeToggle = function(speed, easing, callback) {
			return this.animate({
					opacity: "toggle",
					height: "toggle"
				},
				speed,
				easing,
				callback
			);
		}; /* slideup fade toggle code */

		var divS = jQuery(".slidem > div"),
			sDiv = jQuery(".slidem > div").length,
			n = 0; /* starting counter */

		function slidethem() {
			/* slide fade function */
			jQuery(divS)
				.eq(n)
				.slideFadeToggle(
					1000,
					"swing",
					function() {
						n++;
						if (n < sDiv) {
							jQuery(divS).eq(n).show(); /* make sure the next div is displayed */
							setTimeout(slidethem, 200); /* schedule next slide */
						}
					}
				); /* slide fade the div at 1000ms swing */
		}

		slidethem(); /* start the loop */
	}
	
});