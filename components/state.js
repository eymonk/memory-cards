import { closeAllCards, setupImages } from './cards/cards.js';
import { setLevelTimer } from './level-time/level-time.js';

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
        levelTime: 10,
    },

    gallery: {
        activeIndicator: 1,
        currentImgNumber: 1,
    }
}

function restartGame() {
    state.allowGame = true;
    closeAllCards();
    setupImages();
    setLevelTimer();
}

export default state;

export { restartGame };