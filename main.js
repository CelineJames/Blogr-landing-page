const hamburger = document.querySelector(".hamburger-button");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".nav-wrapper");
const dropDownIcons = document.querySelectorAll(".card-header");
let dropDownContents = document.querySelectorAll(".card");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("hide");
});

for (let i = 0; i < dropDownIcons.length; i++) {
  dropDownIcons[i].addEventListener("click", function () {
    dropDownContents[i].classList.toggle("hidden");
  });
}
