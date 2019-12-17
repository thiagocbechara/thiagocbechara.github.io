AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {
	'use strict';
	const $window = $(window);

	$window.stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	const fullHeight = function () {
		$('.js-fullheight').css('height', $window.height());
		$window.resize(function () {
			$('.js-fullheight').css('height', $window.height());
		});
	};
	fullHeight();

	// loader
	const loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	// Burger Menu
	const burgerMenu = function () {
		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {
			event.preventDefault();
			if ($('#ftco-nav').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});
	};
	burgerMenu();

	const onePageClick = function () {
		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 500);
		});
	};
	onePageClick();

	const carousel = function () {
		const options = {
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ['<span class="ion-md-arrow-back"></span>', '<span class="ion-chevron-right"></span>'],
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
		}
		$('.home-slider').owlCarousel(options);
		$('.statements-container').owlCarousel($.extend(options, { responsive: { 1000: { items: 2 } } }));
	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		$this.find('.dropdown-menu').removeClass('show');
	});

	$('#dropdown04').on('show.bs.dropdown', function () {
		// console.log('show');
	});

	// scroll
	const scrollWindow = function () {
		$window.scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	const counter = function () {
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});
			}
		}, { offset: '95%' });
	}
	counter();

	const contentWayPoint = function () {
		$('.ftco-animate').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
				$(this.element).addClass('item-animate');
				setTimeout(function () {
					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});
				}, 100);

			}
		}, { offset: '95%' });
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
})(jQuery);