const element = document.querySelector("body");
const button = document.querySelector(".button");
const example = document.querySelector("mobileMenu")
const mobileMenu = document.querySelector(".mobileMenu ul")
const menu = document.querySelector(".burgerMenu")
const navLinks = document.querySelector(".nav-links")

element.addEventListener("mousemove", showBtn);
menu.addEventListener("click", showMobileMenu);

function showBtn() {
    button.style.display = 'block'
}

function showMobileMenu() {
    navLinks.classList.toggle('active')
}
