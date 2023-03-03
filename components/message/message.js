import state from '../state.js';
import { openGallery } from '../gallery/gallery.js';

const messageWrapper = document.querySelector('.message__wrapper');
const messageText = document.querySelector('.message__text');
const messageTitle = document.querySelector('.message__title');
const messageControlsLevel = document.querySelector('.message__controls_next-level');
const messageControlsClose = document.querySelector('.message__controls_close');

function showMessage(text, title = 'System message', withLevelControls) {
    messageWrapper.classList.remove('hidden');
    messageText.textContent = text;
    messageTitle.textContent = title;

    if (withLevelControls) {
        messageControlsLevel.classList.remove('hidden');
        messageControlsClose.classList.add('hidden');
    }
}

function closeMessage() {
    messageWrapper.classList.add('hidden');
    messageControlsLevel.classList.add('hidden');
    messageControlsClose.classList.remove('hidden');
}

function showLevelMessage() {
    let text, title;
    switch(state.level) {
        case 1:
            title = 'Good👍';
            text = 'Now choose what to do next - show photos from the cards or go to the next level right away. (The next level contains all the photos from this level.)';
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

    showMessage(text, title, true);
}

const messageCloseBtn = document.querySelector('.message__btn_ok');
messageCloseBtn.addEventListener('click', closeMessage);

const messageShowPhotosBtn = document.querySelector('.message__btn_show-photos');
messageShowPhotosBtn.addEventListener('click', () => {
    closeMessage();
    openGallery();
});

export {
    showLevelMessage,
};