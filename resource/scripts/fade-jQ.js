$(function() {

	function isVisible(elem) {

		let coords = elem.getBoundingClientRect();
	
		let windowHeight = document.documentElement.clientHeight;
	
		// видны верхний ИЛИ нижний край элемента
		let topVisible = coords.top > 0 && coords.top < windowHeight;
		let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
	
		return topVisible || bottomVisible;
	}

	$(window).on('scroll', showVisible);

	let elems = [];

	let fadeLeftFirst = document.querySelectorAll('.fade-left__first'),
			fadeLeftSecond = document.querySelectorAll('.fade-left__second'),
			fadeRightFirst = document.querySelectorAll('.fade-right__first'),
			fadeRightSecond = document.querySelectorAll('.fade-right__second'),
			fadeButton = document.querySelectorAll('.fade-button'),
			fadeLetter = document.querySelectorAll('.fade-letter'),
			fadeP = document.querySelectorAll('.fade-p');

	for (let elem of fadeLeftFirst) elems.push(elem);
	for (let elem of fadeLeftSecond) elems.push(elem);
	for (let elem of fadeRightFirst) elems.push(elem);
	for (let elem of fadeRightSecond) elems.push(elem);
	for (let elem of fadeButton) elems.push(elem);
	for (let elem of fadeLetter) elems.push(elem);

	function showVisible() {
		for (let elem of elems) {
	
			if (isVisible(elem)) {
				elem.classList.add('active');
			}
		}

		for (let elem of fadeP) {
			if (isVisible(elem)) {
				elem.style.opacity = '.2';
			}
		}
	}

	showVisible();
});