// let header = document.querySelector('.header');

// document.addEventListener('scroll', function() {
//    console.log(window.scrollY);

//    let headerOpacity;
//    if(window.scrollY > 0 && window.scrollY < 40) {
//       header.style.opacity = 1;
//       header.style.transition = 'all 0.8s';
//       headerOpacity = header.style.opacity;
//    }
//    if(window.scrollY > 20 && window.scrollY < 90) {
//       header.style.opacity = 0.8
//       headerOpacity = header.style.opacity;
//    }
//    if(window.scrollY > 90 && window.scrollY < 150) {
//       header.style.opacity = 0.6
//       headerOpacity = header.style.opacity;
//    }
//    header.addEventListener('mouseover', function() {
//       header.style.opacity = 1
//    })

//    header.addEventListener('mouseout', function() {
//       header.style.opacity = headerOpacity
//    })
// })


let toggleMenu = document.querySelector('.header__menu-toggle');
let headerNav = document.querySelector('.header__navigation')
toggleMenu.addEventListener('click', function() {
   toggleMenu.classList.toggle('active');
   headerNav.classList.toggle('active');
})