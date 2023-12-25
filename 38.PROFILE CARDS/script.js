const text = "Please meet our team";

let index = 0;

function typing()
{
    if(index < text.length)
    {
        document.querySelector('.heading').textContent += text[index];
        index++;

        setTimeout(typing,150);
    }
}

typing();

const cardWrapper = document.querySelector('.card-wrapper');

function cardVisible()
{
    cardWrapper.classList.add('change');

}

setTimeout(cardVisible,0);