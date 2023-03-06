import state from '../state.js';
import { showMessage } from '../message/message.js';

function setLevelTimer() {
    const time = document.querySelector('.header__value_time');
    time.textContent = state.time.levelTime;
    state.allowGame = true;

    let timeLeft = state.time.levelTime;

    state.time.timer = setInterval(() => {
        time.textContent = `${--timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(state.time.timer);
            state.allowGame = false;
            showMessage('No time left... Try once more😉', 'Oops!', 'level-stop');
        }
    }, 1000);
}

export { setLevelTimer };

