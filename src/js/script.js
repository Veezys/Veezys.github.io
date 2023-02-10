const hamburger = document.querySelector('.hamburger'),
      menu  = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      percents = document.querySelectorAll('.skill__percent'),
      rating = document.querySelectorAll('.skill__lines_second')


hamburger.addEventListener('click', () => {
    menu.classList.add('active')
})

close.addEventListener('click', () => {
    menu.classList.remove('active')
})


percents.forEach((item, i) => {
    rating[i].style.width = item.innerHTML;
})
