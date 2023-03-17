import state from './state.js';
import { showMessage } from './message/message.js';
import { playSound } from './menu/menu.js';

function showStopMessage() {
    const gameOverSound = document.getElementById('sound__game-over');
    playSound(gameOverSound);
    if (state.language === 'en') showMessage('No time left... Try once more😉', 'Oops!', 'level-stop');
    else showMessage('Не осталось времени... Попробуй ещё раз😉', 'Упс!', 'level-stop');
}


function setLevelTimer() {
    clearInterval(state.time.timer);

    let timeLeft = state.time.levelTime;
    const tickSound = document.getElementById('sound__tick');
    const time = document.querySelector('.header__value_time');
    time.textContent = state.time.levelTime;
    state.allowGame = true;

    state.time.timer = setInterval(() => {
        time.textContent = `${--timeLeft}`;
        if (timeLeft < 4 && timeLeft > 0) playSound(tickSound);
        if (timeLeft <= 0) {
            clearInterval(state.time.timer);
            state.allowGame = false;
            showStopMessage();
        }
    }, 1000);
}

export { setLevelTimer };

