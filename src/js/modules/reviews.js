export default () => {
	$(".reviews-content").on("afterChange", function(event, slick, currentSlide) {
		$(this)
			.find(".slick-slide.text-open")
			.not(".slick-active")
			.removeClass("text-open");
	});
	$(".reviews-item__btn").on("click", function() {
		this.parentElement.classList.toggle("text-open");
		$(".reviews-item__text").find('.slick-slide.slick-active').height('auto');
		$(".reviews-item__text").find('.slick-list').height('auto');
	});


	$(".reviews-content").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28"><g><g><path  d="M0 13H.52L11.435.15l1.414 1.415-9.714 11.434H45v2H3.138l9.711 11.434-1.414 1.416L.521 14.999H0z"/></g></g></svg>',
		nextArrow: '<svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="45" height="28" viewBox="0 0 45 28"><g><g><path  d="M0 13h41.865L32.15 1.564 33.565.15 44.48 13h.52v2h-.52L33.565 27.849l-1.414-1.416L41.862 15H0z"/></g></g></svg>',
		autoplay: 0,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: false
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: false,
					adaptiveHeight: true,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true,
					dots: false
				}
			}
		]
	});

	const modal = $('.reviews .modal');
	
	$('.reviews__btn').on('click', () => {
    $('.reviews__feedback').toggleClass('feedback--show')
  });

  $('.reviews__feedback').on('submit', (e) => {
    e.preventDefault();
    modal.addClass('modal--show');
    $('.reviews__feedback').removeClass('feedback--show');
    setTimeout(() => {
      modal.removeClass('modal--show')
    }, 3000)
    $('.reviews__feedback input').val('');
		$('.reviews__feedback textarea').val('');
		$('.feedback__icon--age input').val('');
		var loadText = inputLoad.data('text');
		inputLoad.text("".concat(''));
		inputPhoto.css('background', "url(\"".concat(cdn_path + 'img/photo.png', "\") no-repeat center"));

	});
	
	$('.info__link').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
        );
    }
    return false;
});
var inputFile = $('.js-input-file');
      var inputPhoto = $('.js-photo');
      var inputLoad = $('.js-load');
function loadImage() {
	inputFile.change(function (e) {
		var file = e.target.files[0];

		if (!file) {
			return;
		}
		var urlFile = window.URL.createObjectURL(file);
		var loadText = inputLoad.data('text');
		inputLoad.text("".concat(loadText));
		inputPhoto.css('background', "url(\"".concat(urlFile, "\") no-repeat center"));
		inputPhoto.css('backgroundSize', 'cover');
	});
}
loadImage();
};