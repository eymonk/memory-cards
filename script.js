

//CODE for testing purposes !!!
const cards = document.querySelectorAll('.main__card');

cards.forEach(card => card.addEventListener('click', () => {
    card.classList.add('visible');
    setTimeout(() => card.classList.remove('visible'), 3000);
}));
//CODE for testing purposes !!!