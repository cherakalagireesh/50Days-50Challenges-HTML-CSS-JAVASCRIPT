const container = document.querySelector(".container");
const color_1 = document.querySelector(".color-1");
const color_2 = document.querySelector(".color-2");

color_2.addEventListener("click",()=>
{
    container.classList.add("change");
});
color_1.addEventListener("click",()=>
{
    container.classList.remove("change");
});