export default () => {
   
		$(document).ready(function () {

			function checkVisibility(el) {
				var dTop = $(window).scrollTop(),
					dBot = dTop + $(window).height(),
					elTop = el.offset().top,
					elBot = elTop + el.height();
				return ((elTop <= dBot) && (elBot >= dTop));
			}
	
			function toggleBanner() {
				const banner = $('.wPopup');
				const topForm = $('.top-block .form');
				const bottomForm = $('.last-block .form');
				const actionBlock = $('.header');
				const bannerHeight = banner.outerHeight();
				const bankFixed = $('.bankFixed');
				if (!checkVisibility(topForm) && !checkVisibility(bottomForm) && !checkVisibility(actionBlock)) {
					banner.fadeIn();
					// $('.promo__pay').css({"bottom":  $(".wPopup").outerHeight()});
					bankFixed.css({
						'-webkit-transform': `translateY(-${bannerHeight - 1}px)`,
						'-moz-transform': `translateY(-${bannerHeight - 1}px)`,
						'-ms-transform': `translateY(-${bannerHeight - 1}px)`,
						'-o-transform': `translateY(-${bannerHeight - 1}px)`,
						'transform': `translateY(-${bannerHeight - 1}px)`
					});
				} else {
					banner.fadeOut();
					// $('.promo__pay').css({"bottom":  0});
					bankFixed.css({
						'-webkit-transform': 'translateY(0)',
						'-moz-transform': 'translateY(0)',
						'-ms-transform': 'translateY(0)',
						'-o-transform': 'translateY(0)',
						'transform': 'translateY(0)'
					});
				}
			}
			$(window).on("scroll", function () {
				toggleBanner();
			});
	
		});
};
