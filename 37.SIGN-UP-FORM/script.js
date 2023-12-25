const container = document.querySelector(".container");
const banner = document.querySelector(".banner");
const formContainer = document.querySelector(".form-container");
const bannerBtn = document.querySelector(".banner-btn");
const closeBtn = document.querySelector(".close-btn");

bannerBtn.addEventListener("click", () => {
  banner.style.display = "none";
  formContainer.style.cssText = "opacity:1;visibility:visible";
  container.style.background = "#cc683c";
});

closeBtn.addEventListener("click", function () {
  banner.style.display = "flex";
  formContainer.style.cssText = "opacity:0;visibility:hidden";
  container.style.cssText =
    "background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(images/bg1.jpeg) center no-repeat:background-size:cover";
});
