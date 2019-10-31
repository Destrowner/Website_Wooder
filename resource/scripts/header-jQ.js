$(function() {

	let mql = window.matchMedia('only screen and (min-width: 850px)');

	$(window).on('scroll load resize', function() {
		let scrolled = window.pageYOffset;

		if (mql.matches) {
			(scrolled > 200) ? $('header').css('background-color', 'black') : $('header').css('background-color', 'transparent');
		} else {
			$('header').css('background-color', 'transparent')
		}

	});

	$(window).on('load resize', function() {
		$('.main-screen__logo').css('opacity', '1');
		document.querySelector('#mainNav').style.transform ='translateY(0%)';
	});
});