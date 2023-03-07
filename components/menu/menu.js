const menu = document.querySelector('.menu');

function toggleMenu() {
    const messageContainer = document.querySelector('.message__container');
    if (messageContainer.classList.contains('hidden')) menu.classList.toggle('hidden');
}

function setupMenu() {
    const menuBtn = document.querySelector('.header__btn_menu');
    menuBtn.addEventListener('click', toggleMenu);
}

export { setupMenu };
