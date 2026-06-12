function f_swiper() {
	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 'auto',
		spaceBetween: 24,
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
}

export default f_swiper
