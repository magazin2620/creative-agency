Splitting();
ScrollOut({
	once: true
});

const mobileHamburger = document.querySelector('.mobile-hamburger');
const menuActive = document.querySelector('.home');

mobileHamburger.onclick = function () {
	this.classList.toggle('active');
	menuActive.classList.toggle('menu-active');
}

const swiper = new Swiper(".swiper-container", {
	speed: 1e3,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		950: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		576: {
			slidesPerView: 1,
			spaceBetween: 40
		}
	},
});
