var menu = document.querySelector('.menu-links');
var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click',()=> {
    menu.classList.toggle('active');
})