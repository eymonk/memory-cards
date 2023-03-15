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
        const message = state.language === 'en' ? 'The progress was reset.<br><br>Now you can play from the very beginning😉' : 'Прогресс был сброшен.<br><br>Теперь ты можешь сыграть с самого начала😉';
        localStorage.clear();
        showMessage(message);
        changeLevel(1);
    };
}

export {
    saveProgress,
    getProgress,
    resetProgress
}