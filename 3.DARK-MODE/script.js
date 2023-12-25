const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "fa-solid fa-moon")
    : (toggle.firstElementChild.className = "fa-solid fa-sun");
});
