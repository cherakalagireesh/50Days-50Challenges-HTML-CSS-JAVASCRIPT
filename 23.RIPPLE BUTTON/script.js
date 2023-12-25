const btn = document.querySelector(".btn");
let ripple;

btn.addEventListener("mouseenter", function (e) {
    const left = e.clientX - e.target.getBoundingClientRect().lef4
  ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.top = `${top}px`;
  ripple.style.left = `${left}px`;
  btn.prepend(ripple);
});

btn.addEventListener("mouseleave", function () {
  btn.removeChild(btn.firstChild);
});
