const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links')

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('show');
});
