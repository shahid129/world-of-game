// burger menu

let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', openMenu);

function openMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}