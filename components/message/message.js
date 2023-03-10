import state, { startGame } from '../state.js';
import { openGallery } from '../gallery/gallery.js';
import { closeMenu } from '../menu/menu.js';
import { changeLevel } from '../cards/cards.js';

const messageContainer = document.querySelector('.message__container');
const messageText = document.querySelector('.message__text');
const messageTitle = document.querySelector('.message__title');

const messageControlsLevelNext = document.querySelector('.message__controls_level-next');
const messageControlsLevelStop = document.querySelector('.message__controls_level-stop');
const messageControlsClose = document.querySelector('.message__controls_close');
const messageControlsStart = document.querySelector('.message__controls_start');

function showMessage(text, title = 'System message', type) {
    closeMenu();
    messageContainer.classList.remove('hidden');
    messageText.innerHTML = text;
    messageTitle.textContent = title;

    switch(type) {
        case 'level-next':
            if (state.level !== 5) messageControlsLevelNext.classList.remove('hidden');
            messageControlsClose.classList.remove('hidden');
            break;
        case 'level-stop':
            messageControlsLevelStop.classList.remove('hidden');
            messageControlsClose.classList.remove('hidden');
            break;
        case 'start':
            messageControlsStart.classList.remove('hidden');
            break;
        default:
            messageControlsClose.classList.remove('hidden');
    }
}

function closeMessage() {
    messageContainer.classList.add('hidden');
    messageControlsStart.classList.add('hidden');
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
            text = 'It was a bit harder, but still pretty easy!😉 <br><br> Now take some rest watching these exciting photos and then go to the next level!';
            break;
        case 3:
            title = 'Excellent!';
            text = 'Now I see that you have a pretty sharp mind! <br><br> 😎C O O L😎';
            break;
        case 4:
            title = 'WOW!!!'
            text = 'Only 1 level left to win the whole game! <br><br> 😮😮😮';
            break;
        case 5:
            title = 'UNBELIEVABLE ❗❕❗'
            text = `You proved to be a real MIND! <br> I'm truly astonished! 😲 <br><br> Thanks for your time. I hope you liked the game! Well, at least it trained your cognitive skills a little bit😊 <br><br> Good luck!`;
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

function closeAndStart() {
    closeMessage();
    startGame();
}

const messageBtnStart = document.querySelector('.message__btn_start');
const messageBtnRetry = document.querySelector('.message__btn_retry');
const messageBtnNextLevel = document.querySelector('.message__btn_level-next');

messageBtnStart.addEventListener('click', closeAndStart);
messageBtnRetry.addEventListener('click', closeAndStart);
messageBtnNextLevel.addEventListener('click', () => {
    changeLevel();
    closeAndStart();
});


export {
    showLevelMessage,
    showMessage,
};