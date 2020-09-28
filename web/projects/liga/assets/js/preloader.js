var preloaderEl = document.querySelector('#preloader');

setTimeout(function() {
	preloaderEl.classList.add('preloader-hiding');
	
	preloaderEl.addEventListener('transitionend', function() {
		this.classList.add('preloader-overflow');
		this.classList.add('preloader-hidden');
		this.classList.remove('preloader-hiding');
	
	});
}, 3000);