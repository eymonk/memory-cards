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
        console.log('with level controls')
        messageControlsLevel.classList.remove('hidden');
        messageControlsClose.classList.add('hidden');
    }
}

function closeMessage() {
    messageWrapper.classList.add('hidden');
    messageControlsLevel.classList.add('hidden');
    messageControlsClose.classList.remove('hidden');
}

const messageCloseBtn = document.querySelector('.message__btn_ok');
messageCloseBtn.addEventListener('click', closeMessage);

export {
    showMessage,
    closeMessage
};