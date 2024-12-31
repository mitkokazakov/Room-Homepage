const burger = document.querySelector(".hamburger-container");
const closeBtn = document.querySelector(".close-btn-container");

const overlay = document.querySelector(".overlay");

const mobileNav = document.querySelector(".mobile-navigation");

burger.addEventListener("click", () => {
    mobileNav.classList.add("open")
    overlay.classList.add("open")
});

closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("open")
    overlay.classList.remove("open")
});