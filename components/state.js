import { closeAllCards, setupImages } from './cards/cards.js';
import { setLevelTimer } from './level-time.js';
import { hideMenuBtn } from './menu/menu.js';

const state = {
    allowGame: true,
    level: 1,

    imagesSources: {
        original: [],
        compressed: []
    },

    cards: {
        totalNumber: 8,
        openedNumber: 0,
        openedCard: null,
        openedSrc: null,
    },

    time: {
        timer: null,
        levelTime: 8,
    },

    gallery: {
        activeIndicatorNumber: 1,
    }
}

function resetState() {
    state.allowGame = true;
    state.cards.openedNumber = 0;
    state.cards.openedCard = null
    state.cards.openedSrc = null;
}

function startGame() {
    hideMenuBtn('next-level');
    hideMenuBtn('gallery');
    closeAllCards();
    resetState();
    setupImages();
    setLevelTimer();
}

function setLevelState(levelNumber) {
    levelNumber = parseInt(levelNumber);
    state.level = levelNumber;

    switch(levelNumber) {
        case 2:
            state.cards.totalNumber = 10;
            state.time.levelTime = 11;
            break;
        case 3:
            state.cards.totalNumber = 12;
            state.time.levelTime = 15;
            break;
        case 4:
            state.cards.totalNumber = 16;
            state.time.levelTime = 22;
            break;
        case 5:
            state.cards.totalNumber = 20;
            state.time.levelTime = 30;
            break;
        default:
            state.cards.totalNumber = 8;
            state.time.levelTime = 8;
    }
}

export default state;
export { setLevelState };

export { startGame };