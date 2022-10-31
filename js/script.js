let toggleMenu = document.querySelector('.header__menu-toggle');
let headerNav = document.querySelector('.header__navigation');
let body = document.querySelector('body');
let main = document.querySelector('.main');
toggleMenu.addEventListener('click', function() {
   toggleMenu.classList.toggle('active');
   headerNav.classList.toggle('active');
   body.classList.toggle('lock');
   main.classList.toggle('hide');
   
})


let acordeon = document.querySelectorAll('.footer__nav_title');
let acordeonBox = document.querySelectorAll('.footer__acordeon');
acordeon.forEach(function(element, index ) {
   element.addEventListener('click', function() {
      element.classList.toggle('active')
      acordeonBox[index].classList.toggle('show');
   })
})