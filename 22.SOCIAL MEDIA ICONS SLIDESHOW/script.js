const slideshow = document.querySelector(".slideshow");

setInterval(function () {
  const firstIcon = slideshow.firstElementChild;

  firstIcon.classList.add("fadeout");

  const thirdIcon = slideshow.children[3];

  thirdIcon.classList.add('light');

  thirdIcon.previousElementSibling.classList.remove('light');

  setTimeout(function () {
    slideshow.removeChild(firstIcon);

    slideshow.appendChild(firstIcon);
    
    setTimeout(function () {
      firstIcon.classList.remove("fadeout");
    },500);
  }, 500);
}, 3000);
