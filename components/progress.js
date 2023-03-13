import { showMessage } from './message/message.js';
import { changeLevel } from './cards/cards.js';
import state from './state.js';

function saveProgress(currentLevel) {
    localStorage.setItem('currentLevel', currentLevel);
}

function getProgress() {
    return localStorage.getItem('currentLevel');
}

function resetProgress(){
    const confirmMessage = state.language === 'en' ? 'Are you sure you want to reset the progress?' : 'Уверен, что хочешь сбросить прогресс?';
    const userAnswer = confirm(confirmMessage);

    if (userAnswer) {
        localStorage.clear();
        showMessage('The progress was reset. Now you can play from the very beginning😉');
        changeLevel(1);
    };
}

export {
    saveProgress,
    getProgress,
    resetProgress
}