const card = document.querySelector('.card');

const cardBtn = document.querySelector('.card-btn')

cardBtn.addEventListener('click', () =>{
    card.classList.toggle('active');
})