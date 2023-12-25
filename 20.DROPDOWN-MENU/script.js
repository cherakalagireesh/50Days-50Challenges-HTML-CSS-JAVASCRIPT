const dropdown_bg = document.querySelector(".dropdown-bg");
const nav_items = document.querySelectorAll(".nav-item");


Array.from(nav_items).forEach(function (nav_item) {
  nav_item.addEventListener("mouseover", function (e) {
    dropdown_bg.style.opacity = "1";
    dropdown_bg.style.visibility = "visible";

    dropdown_bg.style.width = getComputedStyle(nav_item).width;
    dropdown_bg.style.height = getComputedStyle(nav_item).height;

    dropdown_bg.style.top = `${nav_item.lastElementChild.offsetTop}px`;
    dropdown_bg.style.left = `${nav_item.lastElementChild.offsetLeft}px`;
  });

  nav_item.addEventListener("mouseout", function (e) {
    dropdown_bg.style.opacity = "0";
    dropdown_bg.style.visibility = "hidden";
  });
});
