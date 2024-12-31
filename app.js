const burger = document.querySelector(".hamburger-container");
const closeBtn = document.querySelector(".close-btn-container");

const mobileNav = document.querySelector(".mobile-navigation");

burger.addEventListener("click", () => {
    mobileNav.classList.add("open")
});

closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("open")
});