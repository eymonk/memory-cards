import state from './state.js';
const cards = document.querySelectorAll('.card');

function shuffleArray(array) {
    let randomIndex, currentIndex = array.length;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex--);
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function createImageSources() {
    for (let i = 0; i < (state.cardsNumber / 2); i++) {
        state.imageSources.push(`../assets/img/${i + 1}.jpg`);
        state.imageSources.push(`../assets/img/${i + 1}.jpg`);
    };
    shuffleArray(state.imageSources);

    const imgElements = document.querySelectorAll('.card__img');
    imgElements.forEach((img, ind) => img.setAttribute('src', state.imageSources[ind]));
}


function closeCard(card) {
    state.openedCard.classList.remove('visible');
}

function checkOpenedCard(card) {
    const cardImg = card.querySelector('img');

    if (state.openedCard) {
        if(state.openedCardSrc !== cardImg.src) {
            closeCard();
            state.openedCardSrc = cardImg.src;
            state.openedCard = card;
        } else {
            state.openedCard = null;
            state.openedCardSrc = null;
        }
    } else {
        state.openedCardSrc = cardImg.src;
        state.openedCard = card;
    }

    card.classList.add('visible');
}

function setupCards() {
    createImageSources();

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('visible')) checkOpenedCard(card);
        });
    });
}


export { setupCards };
