import state, { restartGame } from '../state.js';
import { openGallery } from '../gallery/gallery.js';

const messageContainer = document.querySelector('.message__container');
const messageText = document.querySelector('.message__text');
const messageTitle = document.querySelector('.message__title');
const messageControlsLevelNext = document.querySelector('.message__controls_level-next');
const messageControlsLevelStop = document.querySelector('.message__controls_level-stop');
const messageControlsClose = document.querySelector('.message__controls_close');

function showMessage(text, title = 'System message', type) {
    messageContainer.classList.remove('hidden');
    messageText.innerHTML = text;
    messageTitle.textContent = title;

    switch(type) {
        case 'level-next':
            messageControlsLevelNext.classList.remove('hidden');
            messageControlsClose.classList.remove('hidden');
            break;
        case 'level-stop':
            messageControlsLevelStop.classList.remove('hidden');
            messageControlsClose.classList.remove('hidden');
            break;
        default:
            messageControlsClose.classList.remove('hidden');
    }
}

function closeMessage() {
    messageContainer.classList.add('hidden');
    messageControlsLevelNext.classList.add('hidden');
    messageControlsLevelStop.classList.add('hidden');
    messageControlsClose.classList.add('hidden');
}

function showLevelMessage() {
    let text, title;
    switch(state.level) {
        case 1:
            title = 'Good👍';
            text = 'Now choose what to do next - show photos from the cards or go to the next level right away.<br><br>(The next level contains all the photos from this level.)';
            break;
        case 2:
            title = 'Well done!';
            text = 'It was a bit harder, but still pretty easy!😉 Now take some rest watching these exciting photos and then go to the next level!';
            break;
        case 3:
            title = 'Excellent!';
            text = 'Now I see that you have a pretty sharp mind! 😎C O O L😎';
            break;
        default:
            title = 'Great!';
            text = 'You seem to be pretty clever! I like you😊';
    }

    showMessage(text, title, 'level-next');
}

const messageBtnClose = document.querySelector('.message__btn_close');
messageBtnClose.addEventListener('click', closeMessage);

const messageBtnShowPhotos = document.querySelector('.message__btn_show-photos');
messageBtnShowPhotos.addEventListener('click', () => {
    closeMessage();
    openGallery();
});

const messageBtnRetry = document.querySelector('.message__btn_retry');
messageBtnRetry.addEventListener('click', () => {
    closeMessage();
    restartGame();
});

export {
    showLevelMessage,
    showMessage,
};