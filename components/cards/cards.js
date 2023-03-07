import state from '../state.js';
import { showLevelMessage } from '../message/message.js';
import { openGallery } from '../gallery/gallery.js';
import { showMenuBtnGallery } from '../menu/menu.js';

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
    for (let i = 0; i < (state.cards.totalNumber / 2); i++) {
        state.imagesSources.original.push(`../assets/img/${i + 1}.jpg`);
        state.imagesSources.compressed.push(`../assets/img/compressed/${i + 1}.jpg`);
        state.imagesSources.compressed.push(`../assets/img/compressed/${i + 1}.jpg`);
    }
    setupImages();
}

function closeCard() {
    state.cards.openedNumber--;
    state.openedCard.classList.remove('visible');
}

function closeAllCards() {
    cards.forEach(card => card.classList.remove('visible'));
}

function addCardsHoverEffect() {
    cards.forEach(card => card.classList.add('card-for-winner'));
}

function removeCardsHoverEffect() {
    cards.forEach(card => card.classList.remove('card-for-winner'));
}

function setupImages() {
    shuffleArray(state.imagesSources.compressed);
    const imgElements = document.querySelectorAll('.card__img');
    imgElements.forEach((img, ind) => img.setAttribute('src', state.imagesSources.compressed[ind]));
    removeCardsHoverEffect();
}

function checkOpenedCard(card) {
    const cardImg = card.querySelector('img');
    card.classList.add('visible');
    state.cards.openedNumber++;

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
    
    if (state.cards.openedNumber >= state.cards.totalNumber) {
        state.allowGame = false;
        clearInterval(state.time.timer);
        showLevelMessage();
        showMenuBtnGallery();
        addCardsHoverEffect();
    }
}

function setupCards() {
    createImageSources();

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (state.allowGame && !card.classList.contains('visible')) checkOpenedCard(card);
            else if(!state.allowGame && state.cards.openedNumber >= state.cards.totalNumber) {
                const cardImgSrc = card.querySelector('img').src;
                const regEx = /\d+(?=\.(jpg|png))/g;
                const number = cardImgSrc.match(regEx)[0];
                openGallery(parseInt(number));
            }
        });
    });
}


export { setupCards, setupImages, closeAllCards };
