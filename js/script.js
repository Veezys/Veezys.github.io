const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	colseElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

colseElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.use__ratings-counter'),
	lines =  document.querySelectorAll('.use__ratings-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});