const nav_btn = document.querySelector(".nav-btn");
const container = document.querySelector(".container");

nav_btn.addEventListener("click", function () {
  container.classList.toggle("change");
});
