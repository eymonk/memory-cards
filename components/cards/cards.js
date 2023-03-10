import { createImageIndicator, openGallery} from '../gallery/gallery.js';
import state, {setLevelState, startGame} from '../state.js';
import { showLevelMessage } from '../message/message.js';
import { saveProgress } from '../progress.js';
import {
    closeMenu,
    showMenuBtn,
} from '../menu/menu.js';

function shuffleArray(array) {
    let randomIndex, currentIndex = array.length;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex--);
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}


function setupCard(card) {
    card.addEventListener('click', () => {
        closeMenu();
        if (state.allowGame && !card.classList.contains('visible')) openCard(card);
        else if(!state.allowGame && state.cards.openedNumber >= state.cards.totalNumber) {
            const cardImgSrc = card.querySelector('img').src;
            const regEx = /\d+(?=\.(jpg|png))/g;
            const number = cardImgSrc.match(regEx)[0];
            openGallery(parseInt(number));
        }
    });
}

function createCardElement(cardNumber) {
    const card = document.createElement('div');
    card.classList.add('card', 'main__card');
    card.id = `card-${cardNumber}`;
    card.innerHTML =
        '<div class="card__front"></div>' +
        '<div class="card__back">' +
        '   <img class="card__img" src="" alt="card image">' +
        '</div>';
    setupCard(card);

    return card;
}


function setupImages() {
    shuffleArray(state.imagesSources.compressed);

    const imgElements = document.querySelectorAll('.card__img');
    if (imgElements.length < state.cards.totalNumber) {
        const cardsContainer = document.querySelector('.main__wrapper_cards');
        let number = imgElements.length;
        let nextGalleryIndicatorNumber = (number / 2) + 1;

        while(number++ < state.cards.totalNumber) {
            cardsContainer.append(createCardElement(number));
            if (!(number % 2)) createImageIndicator(nextGalleryIndicatorNumber++);
        }
    }

    imgElements.forEach((img, ind) => img.setAttribute('src', state.imagesSources.compressed[ind]));
    removeCardsHoverEffect();
}


function addImages() {
    state.imagesSources.original = [];
    state.imagesSources.compressed = [];

    for (let i = 0; i < (state.cards.totalNumber / 2); i++) {
        state.imagesSources.original.push(`../assets/img/${i + 1}.jpg`);
        state.imagesSources.compressed.push(`../assets/img/compressed/${i + 1}.jpg`);
        state.imagesSources.compressed.push(`../assets/img/compressed/${i + 1}.jpg`);
    }

    setupImages();
}


function closeCard() {
    if (state.cards.openedCard) {
        state.cards.openedNumber--;
        state.cards.openedCard.classList.remove('visible');
    }
}

function closeAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('visible'));
}


function addCardsHoverEffect() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('card-for-winner'));
}
function removeCardsHoverEffect() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('card-for-winner'));
}


function checkOpenedCard(card) {
    const cardImg = card.querySelector('img');

    if (state.cards.openedCard) {
        if (state.cards.openedCardSrc !== cardImg.src) {
            closeCard();
            state.cards.openedCardSrc = cardImg.src;
            state.cards.openedCard = card;
        } else {
            state.cards.openedCard = null;
            state.cards.openedCardSrc = null;
        }
    } else {
        state.cards.openedCardSrc = cardImg.src;
        state.cards.openedCard = card;
    }

    if (state.cards.openedNumber >= state.cards.totalNumber) {
        state.allowGame = false;
        clearInterval(state.time.timer);
        showLevelMessage();
        showMenuBtn('next-level');
        showMenuBtn('gallery');
        addCardsHoverEffect();
        saveProgress(state.level + 1);
    }
}


function openCard(card) {
    card.classList.add('visible');
    state.cards.openedNumber++;
    checkOpenedCard(card);
}


function setupCards() {
    addImages();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => setupCard(card));
}


function changeGrid(number) {
    const cardsGrid = document.querySelector('.main__wrapper_cards');
    cardsGrid.className = 'main__wrapper main__wrapper_cards';
    number = parseInt(number);

    switch(number) {
        case 2:
            cardsGrid.classList.add('grid-5-2');
            break;
        case 3:
            cardsGrid.classList.add('grid-4-3');
            break;
        case 4:
            cardsGrid.classList.add('grid-4-4');
            break;
        case 5:
            cardsGrid.classList.add('grid-5-4');
            break;
        default:
            cardsGrid.classList.add('grid-4-2');
    }
}


function changeLevel(levelNumber = (state.level + 1)) {
    const levelLabel = document.querySelector('.header__value_level');
    levelLabel.textContent = `${levelNumber}`;
    
    setLevelState(levelNumber);
    addImages();
    changeGrid(levelNumber);
    startGame();
}


export {
    setupCards,
    setupImages,
    closeAllCards,
    changeLevel,
};
