const menu = document.getElementById("hamburger-menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("nav-active");
  menu.classList.toggle("change");
});
