// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamberger di klik
document.querySelector("#hamberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar sidebar untuk menghilangkan navigasi hamberger
const hamberger = document.querySelector("#hamberger-menu");
document.addEventListener("click", function (e) {
  if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
