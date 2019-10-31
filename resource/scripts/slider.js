document.addEventListener('DOMContentLoaded', function() {

	let mql = window.matchMedia('only screen and (min-width: 850px)');

	let slider = document.querySelector('.slider');
	let paginationBlocks = document.querySelectorAll('.slider-pagination__point');
	let paginationNumber = document.querySelector('.slider-pagination__current');
	let currentSlide = 0;
	let timer;

	if (mql.matches) {
			
		slideUp();
		pagination(currentSlide);
		paginationNumber.innerText = '0' + (currentSlide + 1);

		for (let i = 0; i < paginationBlocks.length; i++) {
			paginationBlocks[i].addEventListener('click', function(e) {
				clearInterval(timer);
				for (let j = 0; j < paginationBlocks.length; j++) {
					(this == paginationBlocks[j]) ? paginationBlocks[j].style.opacity = '1' : paginationBlocks[j].style.opacity = '0.2';
				}
				currentSlide = i;
				paginationNumber.innerText = '0' + (currentSlide + 1);
				slider.style.transform = `translateY(-${currentSlide}00%)`;
				(currentSlide == slider.children.length - 1) ? slideDown() : slideUp();
			});
		}

		function slideUp() {
			timer = setInterval(function() {
				currentSlide++;
				pagination(currentSlide);
				slider.style.transform = `translateY(-${currentSlide}00%)`;
				paginationNumber.innerText = '0' + (currentSlide + 1);
				if (currentSlide == slider.children.length - 1) {
					clearInterval(timer);
					slideDown();
				}
			}, 4000);
		}

		function slideDown() {
			timer = setInterval(function() {
				currentSlide--;
				pagination(currentSlide);
				slider.style.transform = `translateY(-${currentSlide}00%)`;
				paginationNumber.innerText = '0' + (currentSlide + 1);
				if (currentSlide == 0) {
					clearInterval(timer);
					slideUp();
				}
			}, 4000);
		}

		function pagination(currentSlide) {
			for (let i = 0; i < paginationBlocks.length; i++) {
				(currentSlide == i) ? paginationBlocks[i].style.opacity = '1' : paginationBlocks[i].style.opacity = '0.2';
			}
		}

	}

});