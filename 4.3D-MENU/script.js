const menu_center = document.querySelector(".center-item");
const menu = document.querySelector(".menu");

menu_center.addEventListener("mouseover", () => {
  menu.classList.add("change");
});
menu.addEventListener("mouseleave", () => {
  menu.classList.remove("change");
});
