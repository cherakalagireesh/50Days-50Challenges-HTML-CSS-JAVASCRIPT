"use strict";

const countdown = document.querySelector(".countdown");

const interval = setInterval(() => {
  const deadline = new Date(2024, 1, 1, 12, 0, 0);
  const current = new Date();
  const diff = deadline - current;

  const days = Math.floor(diff / (24 * 60 * 60 * 1000))+"";
  const hours = Math.floor(diff / (60 * 60 * 1000)) % 24+"";
  const minutes = Math.floor(diff / (60 * 1000)) % 60+"";
  const seconds = Math.floor(diff / 1000) % 60+"";

  countdown.innerHTML = `<div data-content ="days">${days.length===1 ?0+days:days}</div>
  <div data-content="hours">${hours.length===1?0+hours:hours}</div>
  <div data-content="minutes">${minutes.length===1?0+minutes:minutes}</div>
  <div data-content="seconds">${seconds.length===1 ?0+seconds:seconds}</div>`;

  if(diff<0)
  {
    clearInterval(interval);
    countdown.innerHTML = `<h1>Here We Go!!!</h1>`
  }
  document.querySelector('.reset').addEventListener('click', function(){
    clearInterval(interval);
    const divs = document.querySelectorAll('.countdown div');
    divs.forEach((div)=>{
        div.innerHTML="00";
    })
  });
}, 1000);
