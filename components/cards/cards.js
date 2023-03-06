import state from '../state.js';
import { showLevelMessage } from '../message/message.js';
const cards = document.querySelectorAll('.card');

function shuffleArray(array) {
    let randomIndex, currentIndex = array.length;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex--);
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function setupImages() {
    shuffleArray(state.imageSources);
    const imgElements = document.querySelectorAll('.card__img');
    imgElements.forEach((img, ind) => img.setAttribute('src', state.imageSources[ind]));
}

function createImageSources() {
    for (let i = 0; i < (state.cards.totalNumber / 2); i++) {
        state.imageSources.push(`../assets/img/${i + 1}.jpg`);
        state.imageSources.push(`../assets/img/${i + 1}.jpg`);
    }
    setupImages();
}


function closeCard() {
    state.cards.openedNumber--;
    state.openedCard.classList.remove('visible');
}

function closeAllCards() {
    state.cards.openedNumber = 0;
    cards.forEach(card => card.classList.remove('visible'));
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
    state.cards.openedNumber++;

    if (state.cards.openedNumber >= state.cards.totalNumber) {
        clearInterval(state.time.timer);
        showLevelMessage();
    }
}

function setupCards() {
    createImageSources();

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (state.allowGame && !card.classList.contains('visible')) checkOpenedCard(card);
        });
    });
}


export { setupCards, setupImages, closeAllCards };
