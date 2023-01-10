// Menu logic

const btnMobile = document.querySelector('#nav-icon');
const nav = document.querySelector('.main-navbar');

const toggleMenu = () => {
	nav.classList.toggle('active');
}

const closeMenu = () => {
	toggleMenu();
	btnMobile.classList.toggle('open')
}

btnMobile.addEventListener('click', toggleMenu)

$('.nav-links').on('click', closeMenu)

// Hamburguer icon toggle

$(function(){
    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
})